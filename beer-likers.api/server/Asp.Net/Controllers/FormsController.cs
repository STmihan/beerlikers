using Asp.Net.Attributes;
using Asp.Net.Services.Interfaces;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace Asp.Net.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FormsController : ControllerBase
{
    private readonly IFormsService _formsService;

    public FormsController(IFormsService formsService)
    {
        _formsService = formsService;
    }

    [HttpPost]
    public async Task<IActionResult> PostNewAsync(FormDTO form)
    {
        FormAnswer answer = await _formsService.CreateFormAnswerAsync(form);
        return Ok(answer);
    }

    [HttpGet]
    [Auth]
    public async Task<IActionResult> GetAllAsync()
    {
        List<FormAnswer> list = await _formsService.GetFormsAsync();
        return Ok(list);
    }
}