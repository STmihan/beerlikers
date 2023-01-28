using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Domain;

[PrimaryKey("Id")]
public class Token
{
    public Guid Id { get; set; }
    [ForeignKey("Users")]
    public Guid UserId { get; set; }
    public string Value { get; set; }

    public Token()
    {
        Id = Guid.NewGuid();
        Value = Guid.NewGuid().ToString();
    }
}