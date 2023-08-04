// using api.Models;
// using api.Settings;
// using Microsoft.AspNetCore.Mvc;
// using MongoDB.Driver;

// namespace api.Controllers;

// [ApiController]
// [Route("api/[controller]")]
// public class VoteController : ControllerBase
// {
//     #region  Mongodb
//     private readonly IMongoCollection<Vote> _collection;

//     // Dependency Injection
//     public VoteController(IMongoClient client, IMongoDbSettings dbSettings)
//     {
//         var dbName = client.GetDatabase(dbSettings.DatabaseName);
//         _collection = dbName.GetCollection<Vote>("votes");
//     }
//     #endregion

//     [HttpPost("regVote")]
//     public async Task<ActionResult<Vote>> regVote([FromBody] Vote newVote)
//     {
//         Vote vote = new Vote{
            
//         };

//         await _collection.InsertOneAsync(vote);

//         return vote;
//     }
// }

