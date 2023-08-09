using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace api.Models;

public record Vote(
    [property: BsonId, BsonRepresentation(BsonType.ObjectId)]
    string? Id,
    string? VoterId,
    bool? Saturday,
    Time? SaturdayTime,
    bool? Sunday,
    Time? SundayTime,
    bool? Monday,
    Time? MondayTime,
    bool? Tuesday,
    Time? TuesdayTime,
    bool? Wednesday,
    Time? WednesdayTime,
    bool? Thursday,
    Time? ThursdayTime,
    bool? Friday,
    Time? FridayTime
);

public record Time(
    bool? Prd10To14,
    bool? Prd11To15,
    bool? Prd12To16,
    bool? Prd13To17,
    bool? Prd14To18,
    bool? Prd15To19,
    bool? Prd16To20,
    bool? Prd17To21
);
     
     
     
     
     
     
     
     
     
     
     