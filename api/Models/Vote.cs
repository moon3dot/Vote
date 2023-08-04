using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace api.Models;

public record Vote(
    [property: BsonId, BsonRepresentation(BsonType.ObjectId)]
    string? Id,
    Enum? Saturday,
    Time? SaturdayTime,
    Enum? Sunday,
    Time? SundayTime,
    Enum? Monday,
    Time? MondayTime,
    Enum? Tuesday,
    Time? TuesdayTime,
    Enum? Wednesday,
    Time? WednesdayTime,
    Enum? Thursday,
    Time? ThursdayTime,
    Enum? Friday,
    Time? FridayTime
);


public record Time(
    Enum? Prd10To14,
    Enum? Prd11To15,
    Enum? Prd12To16,
    Enum? Prd13To17,
    Enum? Prd14To18,
    Enum? Prd15To19,
    Enum? Prd16To20,
    Enum? Prd17To21
);