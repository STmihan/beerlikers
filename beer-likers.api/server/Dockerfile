FROM mcr.microsoft.com/dotnet/sdk:7.0 AS base
WORKDIR /app

WORKDIR /src
COPY ["server.sln", "."]
COPY ["Domain/Domain.csproj", "./Domain/"]
COPY ["Asp.Net/Asp.Net.csproj", "./Asp.Net/"]
RUN dotnet restore

COPY ["Domain/", "./Domain/"]
COPY ["Asp.Net/", "./Asp.Net/"]

RUN dotnet publish -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:7.0
ENV ASPNETCORE_URLS=http://+:5000
WORKDIR /app
COPY --from=base /app/publish .
ENTRYPOINT ["dotnet", "Asp.Net.dll"]
