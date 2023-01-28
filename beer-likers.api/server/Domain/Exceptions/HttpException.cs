using System.Net;

namespace Domain.Exceptions;

public class HttpException : Exception
{
    public HttpException(string message, HttpStatusCode statusCode) : base(message)
    {
        StatusCode = statusCode;
    }

    public HttpStatusCode StatusCode { get; }
}