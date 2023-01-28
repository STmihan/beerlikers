using System.Net;

namespace Domain.Exceptions;

public class UnauthorizedException : HttpException
{
    public UnauthorizedException(string message) : base(message, HttpStatusCode.Unauthorized)
    {
    }
    
    public UnauthorizedException() : base("Unauthorized", HttpStatusCode.Unauthorized)
    {
    }
}