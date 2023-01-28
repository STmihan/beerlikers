using Asp.Net.Services.Implementation;
using Asp.Net.Services.Interfaces;

namespace Asp.Net;

public static class ServiceRegister
{
    public static IServiceCollection AddAppServices(this IServiceCollection services)
    {
        return services
            .AddScoped<IAuthService, AuthService>()
            .AddScoped<IUsersService, UsersService>()
            .AddScoped<IFormsService, FormsService>();
    }
}