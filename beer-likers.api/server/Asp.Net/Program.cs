using Asp.Net;
using Asp.Net.Filters.Auth;
using Asp.Net.Middlewares;
using Asp.Net.Policy;
using Asp.Net.Utils;

const string POLICY_NAME = "Police";

var builder = WebApplication.CreateBuilder(args);
{
    builder.Services.AddLogging();
    builder.Services.AddCorsPolicy(POLICY_NAME);
    
    builder.Services.AddDb(builder.Configuration);
    
    builder.Services.AddAppServices();
    builder.Services.AddControllers();
    
    builder.Services.AddTransient<ErrorsMiddleware>();
    builder.Services.AddScoped<AuthFilterAttribute>();
}

var app = builder.Build();
{
    app.UseCors(POLICY_NAME);
    
    app.UseMiddleware<ErrorsMiddleware>();

    app.MapControllers();
}

app.Run();