using System.Net;

namespace Domain.Exceptions;

public class NotFoundException : HttpException
{
    public NotFoundException(string message) : base(message, HttpStatusCode.NotFound)
    {
    }
    
    public NotFoundException() : base("Not found", HttpStatusCode.NotFound)
    {
    }
}