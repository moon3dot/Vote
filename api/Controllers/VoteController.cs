using api.Models;
using api.Settings;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class VoteController : ControllerBase
{
    #region  mongodb
    private readonly IMongoCollection<Vote> _collection;

    // Dependency Injection
    public VoteController(IMongoClient client, IMongoDbSettings dbSettings)
    {
        var dbName = client.GetDatabase(dbSettings.DatabaseName);
        _collection = dbName.GetCollection<Vote>("votes");
    }
    #endregion

    [HttpPost("regVote")]
    public async Task<ActionResult<Vote>> regVote([FromBody] Vote newVote)
    {
        Vote vote = new Vote(
            Id: null,
            Saturday: newVote.Saturday,
            SaturdayTime: newVote.SaturdayTime,
            Sunday: newVote.Sunday,
            Sundaytime: newVote.SaturdayTime,
            Monday: newVote.Monday,
            MondayTime: newVote.MondayTime,
            Tuesday: newVote.Tuesday,
            TuesdayTime: newVote.TuesdayTime,
            Wednesday: newVote.Wednesday,
            WednesdayTime: newVote.WednesdayTime,
            Thursday:newVote.Thursday,
            ThursdayTime:newVote.ThursdayTime,
            Friday:newVote.Friday,
            FridayTime:newVote.FridayTime
        );
        
        _collection.InsertOne(vote);

        return vote;
        
    }
}
