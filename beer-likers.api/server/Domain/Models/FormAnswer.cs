namespace Domain;

public class FormAnswer
{
    public Guid Id { get; set; }
    public bool IsLoveBeer { get; set; }
    public BeerType BeerType { get; set; }
    public string Name { get; set; }
    public int Age { get; set; }
    public int BeerPerMonth { get; set; }

    public FormAnswer() { }

    public FormAnswer(bool isLoveBeer, int beerType, string name, int age, int beerPerMonth)
    {
        Id = Guid.NewGuid();
        IsLoveBeer = isLoveBeer;
        BeerType = (BeerType)beerType;
        Name = name;
        Age = age;
        BeerPerMonth = beerPerMonth;
    }
}