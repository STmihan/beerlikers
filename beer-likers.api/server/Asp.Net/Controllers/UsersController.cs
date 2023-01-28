using Asp.Net.Attributes;
using Asp.Net.Services.Interfaces;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace Asp.Net.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly IUsersService _usersService;
    
    public UsersController(IUsersService usersService)
    {
        _usersService = usersService;
    }

    [HttpGet]
    [Auth]
    public async Task<IActionResult> WhoAmI()
    {
        User user = await _usersService.WhoAmI(Request.Headers.Authorization!);
        return Ok(user);
    }
}