using System.Security.Authentication;
using Asp.Net.Context;
using Asp.Net.Filters.Auth;
using Asp.Net.Services.Interfaces;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Asp.Net.Services.Implementation;

public class AuthService : IAuthService
{
    private readonly AppDbContext _context;

    public AuthService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<Token> Login(LoginDTO loginDTO)
    {
        User? user = await _context.Users.FirstOrDefaultAsync(user =>
            user.Login == loginDTO.Username && user.Password == loginDTO.Password);

        if (user == null)
        {
            throw new AuthenticationException("Invalid username or password");
        }

        var token = new Token { UserId = user.Id };
        await _context.Tokens.AddAsync(token);
        await _context.SaveChangesAsync();

        return token;
    }
    
    public async Task Logout(string token)
    {
        Token? find = await _context.Tokens.FirstOrDefaultAsync(t => t.Value == token);
        if (find == null)
        {
            throw new BadHttpRequestException("Invalid token");
        }

        _context.Tokens.Remove(find);
        await _context.SaveChangesAsync();
    }
}