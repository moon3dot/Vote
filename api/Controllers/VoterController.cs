using api.Models;
using api.Settings;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class VoterController : ControllerBase
{
    private readonly IMongoCollection<Voter> _collection;
    // Dependency Injection
    public VoterController(IMongoClient client, IMongoDbSettings dbSettings)
    {
        var dbName = client.GetDatabase(dbSettings.DatabaseName);
        _collection = dbName.GetCollection<Voter>("Voter");
    }

    [HttpPost("singup")]
    public async Task<ActionResult<Voter>> Creat([FromBody] Voter userInput)
    {
        bool hasDoc = _collection.AsQueryable().Where<Voter>(doc => doc.Email == userInput.Email).Any();

        if (hasDoc)
            return Unauthorized($"The Email {userInput.Email} has already User. Please login");

        Voter new_Voter = new Voter(
            Id: null,
            Name: userInput.Name,
            Email: userInput.Email
        );

        await _collection.InsertOneAsync(new_Voter);

        return new_Voter;
    }

}
