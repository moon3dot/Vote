using api.Model;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class VoterController : ControllerBase
{
    #region 
    private readonly IMongoCollection<Admin> _collection;
    // Dependency Injection
    public AdminController(IMongoClient client, IMongoDbSettings dbSettings)
    {
        var dbName = client.GetDatabase(dbSettings.DatabaseName);
        _collection = dbName.GetCollection<Admin>("voters");
    }
    #endregion

    [HttpPost("register_Voter")]
    public async Task<ActionResult<Voter>> Create([FromBody] Voter UserInput)
    {

        bool hasDoc = _collection.AsQueryabale().where<Voter>(doc => doc.Email  == UserInput.Email).Any();
    }
}
