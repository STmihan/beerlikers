using System.Net;

namespace Domain.Exceptions;

public class BadRequestException : HttpException
{
    public BadRequestException(string message) : base(message, HttpStatusCode.BadRequest)
    {
    }
    
    public BadRequestException() : base("Bad request", HttpStatusCode.BadRequest)
    {
    }
}