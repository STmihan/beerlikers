using Domain;
using Microsoft.EntityFrameworkCore;

namespace Asp.Net.Context;

public class AppDbContext : DbContext
{
    public DbSet<FormAnswer> FormAnswers => Set<FormAnswer>();
    public DbSet<User> Users => Set<User>();
    public DbSet<Token> Tokens => Set<Token>();

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
}