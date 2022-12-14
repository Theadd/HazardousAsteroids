using HazardousAsteroidsApi.Model;

namespace HazardousAsteroidsApi.Services;

public interface INeoService
{
    string ApiUrl { get; set; }
    string ApiKey { get; set; }
    Task<IEnumerable<NearEarthObject>> GetAsync(DateTime startDate, DateTime endDate);
}
