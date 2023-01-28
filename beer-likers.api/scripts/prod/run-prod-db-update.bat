@echo off

IF "%~1" == "" (
  echo password is blank
  exit
)

dotnet ef database update --connection="Server=70.34.254.131;Port=5432;Username=postgres;Password=%1;Database=postgres" -p ../../server/Asp.Net/