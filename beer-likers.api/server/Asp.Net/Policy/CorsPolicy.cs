namespace Asp.Net.Policy;

public static class CorsPolicy
{
    public static IServiceCollection AddCorsPolicy(this IServiceCollection service, string policyName)
    {
        return service.AddCors(options =>
            options.AddPolicy(policyName,
                p =>
                    p.WithOrigins(
                            "http://localhost:5173",
                            "http://localhost:5432",
                            "http://127.0.0.1:5173",
                            "http://127.0.0.1:5432",
                            "http://104.238.177.149",
                            "http://104.238.177.149:80",
                            "http://104.238.177.149:5432",
                            "http://104.238.177.149:5000",
                            "http://abubandit.cf",
                            "http://abubandit.cf:80",
                            "http://abubandit.cf:5432",
                            "http://abubandit.cf:5000",
                            "http://70.34.254.131",
                            "http://70.34.254.131:80",
                            "http://70.34.254.131:5432",
                            "http://70.34.254.131:5000"
                        )
                        .AllowAnyMethod()
                        .AllowAnyHeader()
            )
        );
    }
}