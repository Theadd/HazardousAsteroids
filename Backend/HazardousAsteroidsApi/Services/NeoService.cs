using Newtonsoft.Json.Linq;
using HazardousAsteroidsApi.Model;
using System.ComponentModel;
using Microsoft.Extensions.Caching.Memory;

namespace HazardousAsteroidsApi.Services;

internal class NeoService : INeoService
{
    private static readonly int MAX_CACHE_SIZE = 256;

    public string ApiUrl { get; set; } = "https://api.nasa.gov/neo/rest/v1/";
    public string ApiKey { get; set; } = "zdUP8ElJv1cehFM0rsZVSQN7uBVxlDnu4diHlLSb";

    private static MemoryCache _cache { get; } = new MemoryCache(new MemoryCacheOptions() { SizeLimit = MAX_CACHE_SIZE });

    private static string GetCacheKey(DateTime startDate, DateTime endDate) => $"{startDate.DayOfYear}-{startDate.Year}-{(endDate - startDate).Days}";

    public async Task<IEnumerable<NearEarthObject>> GetAsync(DateTime startDate, DateTime endDate)
    {
        var cacheKey = GetCacheKey(startDate, endDate);

        if (!_cache.TryGetValue(cacheKey, out IEnumerable<NearEarthObject> results))
        {
            results = await RequestAsync(startDate, endDate);
            
            _cache.Set(cacheKey, results, new MemoryCacheEntryOptions().SetSize(results.Count() + 1));
            
            // preserve only up to 4 most recently/frequently cached results
            if (_cache.Count > 4)
            {
                _cache.Compact(.5);
            }
        }

        return results;
    }

    private async Task<IEnumerable<NearEarthObject>> RequestAsync(DateTime startDate, DateTime endDate)
    {
        var results = new List<NearEarthObject>();

        dynamic resultsByDate = (JValue.Parse(await FetchNeoFeed(startDate, endDate)) as dynamic).near_earth_objects;

        foreach (PropertyDescriptor pd in TypeDescriptor.GetProperties(resultsByDate))
        {
            foreach (dynamic item in pd.GetValue(resultsByDate))
            {
                // filtering for potentially hazardous entries here to reduce cache impact
                if (item.is_potentially_hazardous_asteroid == true)
                {
                    results.Add(new NearEarthObject()
                    {
                        Name = item.name,
                        IsPotentiallyHazardousAsteroid = item.is_potentially_hazardous_asteroid,
                        EstimatedDiameterMax = item.estimated_diameter.kilometers.estimated_diameter_max,
                        EstimatedDiameterMin = item.estimated_diameter.kilometers.estimated_diameter_min,
                        CloseApproachDate = item.close_approach_data[0].close_approach_date,
                        OrbitingBody = item.close_approach_data[0].orbiting_body,
                        KilometersPerHour = item.close_approach_data[0].relative_velocity.kilometers_per_hour
                    });
                }
            }
        }

        return results.AsEnumerable();
    }

    private async Task<string> FetchNeoFeed(DateTime startDate, DateTime endDate)
    {
        using HttpClient client = new() { BaseAddress = new Uri(ApiUrl) };

        return await client.GetStringAsync($"feed?start_date={startDate:yyyy-MM-dd}&end_date={endDate:yyyy-MM-dd}&api_key={ApiKey}");
    }
}
