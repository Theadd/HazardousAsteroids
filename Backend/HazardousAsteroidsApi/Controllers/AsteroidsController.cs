using HazardousAsteroidsApi.Model;
using HazardousAsteroidsApi.Services;
using HazardousAsteroidsApi.ViewModel;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace HazardousAsteroidsApi.Controllers;

[Route("[controller]")]
[ApiController]
[Produces("application/json")]
public class AsteroidsController : ControllerBase
{
    private readonly INeoService _service;

    public AsteroidsController(INeoService service)
    {
        _service = service;
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="planet">The name of the planet that the asteroids are oribing</param>
    /// <param name="startDate">The first date used to filter the results. Being the date where the asteroids are in closest range to the planet</param>
    /// <param name="endDate">The last date included in the filter</param>
    /// <param name="pageSize">Number of items per page</param>
    /// <param name="pageIndex">The zero-based page index</param>
    /// <returns>A paginated list of hazardous asteroids</returns>
    /// 
    /// <response code="200">Returns a paginated list of Asteroid objects</response>
    /// <response code="400">If parameter `planet` is not provided</response>
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
        var dateSpan = (endDate - startDate).Value.Days;
        endDate = dateSpan < 0 || dateSpan > 7 ? startDate.Value.AddDays(7) : endDate;

        var items = await _service.GetAsync(startDate.Value, endDate.Value);

        var filteredItems = items == null ? Array.Empty<Asteroid>() : items.ToArray()
                .Where(n => n.OrbitingBody == planet)
                .Where(n => n.IsPotentiallyHazardousAsteroid == true)
                .Select(n => (Asteroid)n)
                .ToArray();

        var itemsOnPage = filteredItems
            .Skip(pageSize * pageIndex)
            .Take(pageSize)
            .ToArray();

        return Ok(new PaginatedItemsViewModel<Asteroid>(pageIndex, pageSize, filteredItems.Length, itemsOnPage));
    }
}
