using api.Models;
using api.Settings;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class VoteController : ControllerBase
{
    #region Db and Token Settings
    const string _collectionName = "vote";
    private readonly IMongoCollection<day> _collection;

    // constructor - dependency injections
    public VoteController(IMongoClient client, IMongoDbSettings dbSettings)
    {
        var dbName = client.GetDatabase(dbSettings.DatabaseName);
        _collection = dbName.GetCollection<day>(_collectionName);
    }
    #endregion
    #region http post
     [HttpPost ("getVote")]
    public async Task<ActionResult<day>> GetVote([FromBody] day RequstVote){

        if(!ModelState.IsValid){
            return BadRequest("filde isn`t valid");
        }

        day Voter = await _collection.Find<day>(vote => RequstVote.Email == vote.Email.ToLower().Trim()).FirstOrDefaultAsync();

        if(Voter is null){
            day NewVote = new day(
                Email:RequstVote.Email,
                Saturday:RequstVote.Saturday,
                satMornig:RequstVote.satMornig,
                SatNoon:RequstVote.SatNoon,
                Sunday:RequstVote.Sunday,
                Sunmornig:RequstVote.Sunmornig,
                SunNoon:RequstVote.SunNoon,
                Monday:RequstVote.Monday,
                Monmornig:RequstVote.Monmornig,
                MonNoon:RequstVote.MonNoon,
                Tuesday:RequstVote.Thursday,
                Tuesmornig:RequstVote.Tuesmornig,
                TuseNoon:RequstVote.TuseNoon,
                Wednesday:RequstVote.Wednesday,
                Wenmornig:RequstVote.Wenmornig,
                WenNoon:RequstVote.WenNoon,
                Thursday:RequstVote.Thursday,
                Thurmornig:RequstVote.Thurmornig,
                ThurNoon:RequstVote.ThurNoon,
                Friday:RequstVote.Friday,
                Friymornig:RequstVote.Friymornig,
                FriyNoon:RequstVote.FriyNoon
            );   
            _collection.InsertOne(NewVote);
            return NewVote;
        }
        else
            {
             return BadRequest("You already voted");   
            }
    }
    #endregion
}
