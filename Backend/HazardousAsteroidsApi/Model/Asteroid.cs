namespace HazardousAsteroidsApi.Model;

public class Asteroid
{
    public string? Name { get; set; }

    public float Diameter { get; set; }

    public float Speed { get; set; }

    public DateTime Date { get; set; }

    public string? Planet { get; set; }
}
