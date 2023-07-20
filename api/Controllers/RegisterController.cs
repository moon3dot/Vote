using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Settings;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RegisterController : ControllerBase
{
    private readonly IMongoCollection<Register> _collection;

    // Dependency Injection
    public RegisterController(IMongoClient client, IMongoDbSettings dbSettings)
    {
        var dbName = client.GetDatabase(dbSettings.DatabaseName);
        _collection = dbName.GetCollection<Register>("voters");
    }

    [HttpPost("addVoter")]
    public async Task<ActionResult<Register>> creat(Register userInput)
    {
        if (ModelState.IsValid)
        {

            bool hasdocs = _collection.AsQueryable().Where<Register>(v => userInput.Email == v.Email).Any();

            if (hasdocs)
            {
                return BadRequest($"the Email  {userInput.Email} has already register.");
            }

            Register addVoter = new Register(
                Id: null,
                Name: userInput.Name.Trim().ToLower(),
                Email: userInput.Email.Trim().ToLower()
            );

            _collection.InsertOne(addVoter);

            return addVoter;
        }
        return BadRequest("model isnt state");
    }
}
