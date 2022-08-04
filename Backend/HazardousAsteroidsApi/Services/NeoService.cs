using Newtonsoft.Json.Linq;
using HazardousAsteroidsApi.Model;

namespace HazardousAsteroidsApi.Services;

public static class NeoService
{
    public static readonly string NEO_API_URL = "https://api.nasa.gov/neo/rest/v1/";
    public static readonly string API_KEY = "zdUP8ElJv1cehFM0rsZVSQN7uBVxlDnu4diHlLSb";

    public static async Task<List<NearEarthObject>> GetAsync(DateTime startDate, DateTime endDate)
    {
        var results = new List<NearEarthObject>();

        dynamic json = JValue.Parse(await FetchNeoFeed(startDate, endDate));

        // TODO

        return results;
    }

    private static async Task<string> FetchNeoFeed(DateTime startDate, DateTime endDate)
    {
        using HttpClient client = new() { BaseAddress = new Uri(NEO_API_URL) };

        return await client.GetStringAsync($"feed?start_date={startDate:yyyy-MM-dd}&end_date={endDate:yyyy-MM-dd}&api_key={API_KEY}");
    }
}
