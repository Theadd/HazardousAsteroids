using HazardousAsteroidsApi.Model;
using Microsoft.AspNetCore.Mvc;

namespace HazardousAsteroidsApi.Controllers;

[Route("[controller]")]
[ApiController]
public class AsteroidsController : ControllerBase
{
    private readonly ILogger<AsteroidsController> _logger;

    public AsteroidsController(ILogger<AsteroidsController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<Asteroid> Get()
    {
        return Array.Empty<Asteroid>();
    }
}
