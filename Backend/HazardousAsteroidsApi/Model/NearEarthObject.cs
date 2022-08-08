namespace HazardousAsteroidsApi.Model;

public class NearEarthObject
{
    public string? Name { get; set; }

    public string? OrbitingBody { get; set; }

    public float KilometersPerHour { get; set; }

    public float EstimatedDiameterMax { get; set; }

    public float EstimatedDiameterMin { get; set; }

    public DateTime CloseApproachDate { get; set; }

    public bool IsPotentiallyHazardousAsteroid { get; set; }
}
