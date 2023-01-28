using Asp.Net.Attributes;
using Asp.Net.Services.Interfaces;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace Asp.Net.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;
    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }
    
    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDTO loginDTO)
    {
        Token token = await _authService.Login(loginDTO);
        return Ok(token);
    }
    
    [HttpDelete("logout")]
    [Auth]
    public async Task<IActionResult> Logout()
    {
        await _authService.Logout(Request.Headers.Authorization!);
        return Ok();
    }
}