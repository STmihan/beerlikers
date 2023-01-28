using System.Net;
using Domain.Exceptions;

namespace Asp.Net.Middlewares;

public class ErrorsMiddleware : IMiddleware
{
    private readonly ILogger<ErrorsMiddleware> _logger;

    public ErrorsMiddleware(ILogger<ErrorsMiddleware> logger)
    {
        _logger = logger;
    }

    public Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        try
        {
            return next(context);
        }
        catch (HttpException ex)
        {
            _logger.LogError(
                "Http Error. Status code: {StatusCode}. Message: {Message}",
                ex.StatusCode,
                ex.Message);
            context.Response.StatusCode = (int)ex.StatusCode;
            return context.Response.WriteAsync(ex.Message);
        }
        catch (Exception ex)
        {
            _logger.LogError(
                "Internal server error. Message: {Message}",
                ex.Message);
            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
            return context.Response.WriteAsync("Internal Server Error");
        }
    }
}