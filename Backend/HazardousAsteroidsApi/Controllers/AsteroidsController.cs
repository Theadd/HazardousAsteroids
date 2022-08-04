using HazardousAsteroidsApi.Model;
using HazardousAsteroidsApi.Services;
using HazardousAsteroidsApi.ViewModel;
using Microsoft.AspNetCore.Mvc;
using System.Net;

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
    [ProducesResponseType(typeof(PaginatedItemsViewModel<Asteroid>), (int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    public async Task<IActionResult> GetAsync(
            [FromQuery] string? planet = null,
            [FromQuery] DateTime? startDate = null,
            [FromQuery] DateTime? endDate = null,
            [FromQuery] int pageSize = 10,
            [FromQuery] int pageIndex = 0)
    {
        if (string.IsNullOrEmpty(planet))
            return BadRequest("The required parameter `planet` was not specified.");

        startDate = (startDate == null) ? DateTime.Now : startDate.Value;
        endDate = (endDate == null) ? startDate.Value.AddDays(7) : endDate.Value;

        var items = (await NeoService.GetAsync(startDate.Value, endDate.Value)).ToArray();

        // TODO

        return Ok(new PaginatedItemsViewModel<Asteroid>(pageIndex, pageSize, 0, Array.Empty<Asteroid>()));
    }
}
