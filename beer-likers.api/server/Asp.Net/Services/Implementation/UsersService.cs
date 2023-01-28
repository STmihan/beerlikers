using Asp.Net.Attributes;
using Asp.Net.Context;
using Asp.Net.Filters.Auth;
using Asp.Net.Services.Interfaces;
using Domain;
using Domain.Exceptions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Asp.Net.Services.Implementation;

public class UsersService : IUsersService
{
    private readonly AppDbContext _context;

    public UsersService(AppDbContext context)
    {
        _context = context;
    }
    
    public async Task<User> WhoAmI(string token)
    {
        Token? find = await _context.Tokens.FirstOrDefaultAsync(t => t.Value == token);
        if (find == null)
        {
            throw new NotFoundException();
        }
        return await _context.Users.FirstAsync(u => u.Id == find.UserId);
    }
}