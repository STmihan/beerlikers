using Domain;

namespace Asp.Net.Services.Interfaces;

public interface IAuthService
{
    Task<Token> Login(LoginDTO loginDTO);
    Task Logout(string token);
}