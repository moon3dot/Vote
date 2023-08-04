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
//         Vote vote = new Vote
//         {

//             Id = null,
//             Saturday = newVote.Saturday,
//             SaturdayTime = new Time
//             (
//                 Prd10To14: newVote.SaturdayTime.Prd10To14,
//                 Prd11To15: newVote.SaturdayTime.Prd11To15,
//                 Prd12To16: newVote.SaturdayTime.Prd12To16,
//                 Prd13To17: newVote.SaturdayTime.Prd13To17,
//                 Prd14To18: newVote.SaturdayTime.Prd14To18,
//                 Prd15To19: newVote.SaturdayTime.Prd15To19,
//                 Prd16To20: newVote.SaturdayTime.Prd16To20,
//                 Prd17To21: newVote.SaturdayTime.Prd17To21
//             ),
//             Sunday = newVote.Sunday,
//             SundayTime = new Time
//             (
//                 Prd10To14: newVote.SundayTime.Prd10To14,
//                 Prd11To15: newVote.SundayTime.Prd11To15,
//                 Prd12To16: newVote.SundayTime.Prd12To16,
//                 Prd13To17: newVote.SundayTime.Prd13To17,
//                 Prd14To18: newVote.SundayTime.Prd14To18,
//                 Prd15To19: newVote.SundayTime.Prd15To19,
//                 Prd16To20: newVote.SundayTime.Prd16To20,
//                 Prd17To21: newVote.SundayTime.Prd17To21
//             ),
//             Monday = newVote.Monday,
//             MondayTime = new Time
//             (
//                 Prd11To15: newVote.MondayTime.Prd11To15,
//                 Prd12To16: newVote.MondayTime.Prd12To16,
//                 Prd10To14: newVote.MondayTime.Prd10To14,
//                 Prd13To17: newVote.MondayTime.Prd13To17,
//                 Prd14To18: newVote.MondayTime.Prd14To18,
//                 Prd15To19: newVote.MondayTime.Prd15To19,
//                 Prd16To20: newVote.MondayTime.Prd16To20,
//                 Prd17To21: newVote.MondayTime.Prd17To21
//             ),
//             Tuesday = newVote.Tuesday,
//             TuesdayTime = new Time
//             (
//                 Prd11To15: newVote.TuesdayTime.Prd11To15,
//                 Prd12To16: newVote.TuesdayTime.Prd12To16,
//                 Prd10To14: newVote.TuesdayTime.Prd10To14,
//                 Prd13To17: newVote.TuesdayTime.Prd13To17,
//                 Prd14To18: newVote.TuesdayTime.Prd14To18,
//                 Prd15To19: newVote.TuesdayTime.Prd15To19,
//                 Prd16To20: newVote.TuesdayTime.Prd16To20,
//                 Prd17To21: newVote.TuesdayTime.Prd17To21
//             ),
//             Wednesday = newVote.Wednesday,
//             WednesdayTime = new Time
//             (
//                 Prd11To15: newVote.WednesdayTime.Prd11To15,
//                 Prd12To16: newVote.WednesdayTime.Prd12To16,
//                 Prd10To14: newVote.WednesdayTime.Prd10To14,
//                 Prd13To17: newVote.WednesdayTime.Prd13To17,
//                 Prd14To18: newVote.WednesdayTime.Prd14To18,
//                 Prd15To19: newVote.WednesdayTime.Prd15To19,
//                 Prd16To20: newVote.WednesdayTime.Prd16To20,
//                 Prd17To21: newVote.WednesdayTime.Prd17To21
//             ),
//             Thursday = newVote.Thursday,
//             ThursdayTime = new Time
//             (
//                 Prd11To15: newVote.ThursdayTime.Prd11To15,
//                 Prd12To16: newVote.ThursdayTime.Prd12To16,
//                 Prd10To14: newVote.ThursdayTime.Prd10To14,
//                 Prd13To17: newVote.ThursdayTime.Prd13To17,
//                 Prd14To18: newVote.ThursdayTime.Prd14To18,
//                 Prd15To19: newVote.ThursdayTime.Prd15To19,
//                 Prd16To20: newVote.ThursdayTime.Prd16To20,
//                 Prd17To21: newVote.ThursdayTime.Prd17To21
//             ),
//             Friday = newVote.Friday,
//             FridayTime = new Time
//             (
//                 Prd10To14: newVote.FridayTime.Prd10To14,
//                 Prd11To15: newVote.FridayTime.Prd11To15,
//                 Prd12To16: newVote.FridayTime.Prd12To16,
//                 Prd13To17: newVote.FridayTime.Prd13To17,
//                 Prd14To18: newVote.FridayTime.Prd14To18,
//                 Prd15To19: newVote.FridayTime.Prd15To19,
//                 Prd16To20: newVote.FridayTime.Prd16To20,
//                 Prd17To21: newVote.FridayTime.Prd17To21
//             )
//         };

//         await _collection.InsertOneAsync(vote);

//         return vote;
//     }
// }

