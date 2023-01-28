using Asp.Net.Filters.Auth;
using Microsoft.AspNetCore.Mvc;

namespace Asp.Net.Attributes;

[ServiceFilter(typeof(AuthFilterAttribute))]
public class AuthAttribute : Attribute { }