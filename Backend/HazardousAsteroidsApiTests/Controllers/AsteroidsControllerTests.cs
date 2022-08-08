using Xunit;
using Moq;
using HazardousAsteroidsApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace HazardousAsteroidsApi.Controllers.Tests;

public class AsteroidsControllerTests
{
    private readonly Mock<INeoService> _mockService;
    private readonly AsteroidsController _controller;

    public AsteroidsControllerTests()
    {
        _mockService = new Mock<INeoService>();
        _controller = new AsteroidsController(_mockService.Object);
    }

    [Fact()]
    public async void GetAsync_CalledWithoutParameters_ReturnsBadRequest()
    {
        var badRequestResult = await _controller.GetAsync();

        Assert.IsType<BadRequestObjectResult>(badRequestResult as BadRequestObjectResult);
    }

    [Fact()]
    public async void GetAsync_CalledWithPlanetParameter_ReturnsOkResult()
    {
        var okResult = await _controller.GetAsync("Earth");

        Assert.IsType<OkObjectResult>(okResult as OkObjectResult);
    }
}
