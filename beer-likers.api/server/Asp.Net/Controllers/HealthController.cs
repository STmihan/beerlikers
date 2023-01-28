using Asp.Net.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Asp.Net.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HealthController : ControllerBase
{
    private readonly AppDbContext _context;

    public HealthController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        try
        {
            var newGuid = Guid.NewGuid();
            bool any = await _context.Users.AnyAsync(t => t.Id == newGuid);
            return Ok("Working");
        }
        catch (Exception e)
        {
            return Problem(e.Message);
        }
    }
}