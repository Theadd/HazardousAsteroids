using Newtonsoft.Json.Linq;
using HazardousAsteroidsApi.Model;

namespace HazardousAsteroidsApi.Services;

public class NeoService : INeoService
{
    public string ApiUrl { get; set; } = "https://api.nasa.gov/neo/rest/v1/";
    public string ApiKey { get; set; } = "zdUP8ElJv1cehFM0rsZVSQN7uBVxlDnu4diHlLSb";

    public async Task<List<NearEarthObject>> GetAsync(DateTime startDate, DateTime endDate)
    {
        var results = new List<NearEarthObject>();

        dynamic json = JValue.Parse(await FetchNeoFeed(startDate, endDate));

        // TODO

        return results;
    }

    private async Task<string> FetchNeoFeed(DateTime startDate, DateTime endDate)
    {
        using HttpClient client = new() { BaseAddress = new Uri(ApiUrl) };

        return await client.GetStringAsync($"feed?start_date={startDate:yyyy-MM-dd}&end_date={endDate:yyyy-MM-dd}&api_key={ApiKey}");
    }
}
