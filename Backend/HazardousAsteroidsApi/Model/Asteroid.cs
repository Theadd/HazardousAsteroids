namespace HazardousAsteroidsApi.Model;

public class Asteroid
{
    public string? Name { get; set; }

    public float Diameter { get; set; }

    public float Speed { get; set; }

    public DateTime Date { get; set; }

    public string? Planet { get; set; }

    public static explicit operator Asteroid(NearEarthObject neo) => new()
    {
        Name = neo.Name,
        Diameter = (neo.EstimatedDiameterMin + neo.EstimatedDiameterMax) / 2.0f,
        Speed = neo.KilometersPerHour,
        Date = neo.CloseApproachDate,
        Planet = neo.OrbitingBody
    };
}
