using Newtonsoft.Json.Linq;
using HazardousAsteroidsApi.Model;
using System.ComponentModel;

namespace HazardousAsteroidsApi.Services;

public class NeoService : INeoService
{
    public string ApiUrl { get; set; } = "https://api.nasa.gov/neo/rest/v1/";
    public string ApiKey { get; set; } = "zdUP8ElJv1cehFM0rsZVSQN7uBVxlDnu4diHlLSb";

    public async Task<List<NearEarthObject>> GetAsync(DateTime startDate, DateTime endDate)
    {
        var results = new List<NearEarthObject>();

        dynamic resultsByDate = (JValue.Parse(await FetchNeoFeed(startDate, endDate)) as dynamic).near_earth_objects;

        foreach (PropertyDescriptor pd in TypeDescriptor.GetProperties(resultsByDate))
        {
            foreach (dynamic item in pd.GetValue(resultsByDate))
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

        return results;
    }

    private async Task<string> FetchNeoFeed(DateTime startDate, DateTime endDate)
    {
        using HttpClient client = new() { BaseAddress = new Uri(ApiUrl) };

        return await client.GetStringAsync($"feed?start_date={startDate:yyyy-MM-dd}&end_date={endDate:yyyy-MM-dd}&api_key={ApiKey}");
    }
}
