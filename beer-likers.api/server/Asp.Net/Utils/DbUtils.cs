using Asp.Net.Context;
using Microsoft.EntityFrameworkCore;

namespace Asp.Net.Utils;

public static class DbUtils
{
    public static IServiceCollection AddDb(this IServiceCollection serviceCollection, IConfiguration configuration)
    {
        string connectionString = GetConnectionString();
        serviceCollection.AddDbContext<AppDbContext>(
            optionsBuilder => optionsBuilder.UseNpgsql(connectionString));
        return serviceCollection;
    }
    
    public static string GetConnectionString()
    {
        return Environment.GetEnvironmentVariable("DB_CONNECTION_STRING") ?? string.Empty;
    }
}