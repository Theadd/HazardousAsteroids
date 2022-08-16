namespace HazardousAsteroidsApi.Model;

/// <summary>
/// Asteroid's Model.
/// </summary>
public class Asteroid
{
    /// <summary>
    /// The name of the asteroid.
    /// </summary>
    public string? Name { get; set; }

    /// <summary>
    /// The average asteroid estimated diameter (Ø) in km.
    /// </summary>
    public float Diameter { get; set; }

    /// <summary>
    /// Asteroid's speed in km/h.
    /// </summary>
    public float Speed { get; set; }

    /// <summary>
    /// Asteroid's close approach date to it's orbiting body.
    /// </summary>
    public DateTime Date { get; set; }

    /// <summary>
    /// The name of the planet being orbited by the asteroid.
    /// </summary>
    public string? Planet { get; set; }

    #pragma warning disable CS1591
    public static explicit operator Asteroid(NearEarthObject neo) => new()
    {
        Name = neo.Name,
        Diameter = (neo.EstimatedDiameterMin + neo.EstimatedDiameterMax) / 2.0f,
        Speed = neo.KilometersPerHour,
        Date = neo.CloseApproachDate,
        Planet = neo.OrbitingBody
    };
    #pragma warning restore CS1591
}
