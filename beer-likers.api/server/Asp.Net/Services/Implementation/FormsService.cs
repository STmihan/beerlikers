using Asp.Net.Context;
using Asp.Net.Services.Interfaces;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Asp.Net.Services.Implementation;

public class FormsService : IFormsService
{
    private readonly AppDbContext _context;

    public FormsService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<FormAnswer> CreateFormAnswerAsync(FormDTO form)
    {
        var entity = new FormAnswer(
            form.IsLoveBeer,
            form.BeerType,
            form.Name,
            form.Age,
            form.BeerPerMonth
        );

        await _context.FormAnswers.AddAsync(entity);
        await _context.SaveChangesAsync();
        return entity;
    }

    public async Task<List<FormAnswer>> GetFormsAsync()
    {
        var answers = await _context.FormAnswers.ToListAsync();
        return answers;
    }
}