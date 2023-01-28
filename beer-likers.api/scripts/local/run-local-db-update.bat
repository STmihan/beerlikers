@echo off

dotnet ef database update --connection "Server=192.168.1.4;Port=5432;Username=postgres;Password=admin;Database=postgres" -p ../../server/Asp.Net/