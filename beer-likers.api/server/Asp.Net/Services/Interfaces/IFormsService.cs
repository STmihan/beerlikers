using Domain;

namespace Asp.Net.Services.Interfaces;

public interface IFormsService
{
    Task<FormAnswer> CreateFormAnswerAsync(FormDTO formAnswer);
    Task<List<FormAnswer>> GetFormsAsync();
}