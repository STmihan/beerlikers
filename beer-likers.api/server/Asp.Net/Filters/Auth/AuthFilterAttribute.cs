using Asp.Net.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Primitives;

namespace Asp.Net.Filters.Auth;

public class AuthFilterAttribute : IAsyncActionFilter
{
    private readonly AppDbContext _context;
    public AuthFilterAttribute(AppDbContext context)
    {
        _context = context;
    }

    public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
    {
        if (context.HttpContext.Request.Headers.TryGetValue("Authorization", out StringValues token))
        {
            if (await _context.Tokens.AnyAsync(t => t.Value == token[0]))
            {
                await next();
            }
        }

        context.Result = new UnauthorizedResult();
    }
}
