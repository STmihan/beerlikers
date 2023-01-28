using Domain;

namespace Asp.Net.Services.Interfaces;

public interface IUsersService
{
    Task<User> WhoAmI(string token);
}