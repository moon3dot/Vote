
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public record Vote(
    [property: BsonId, BsonRepresentation(BsonType.ObjectId)]
    string? Id,
    string? Saturday,
    Time? SaturdayTime,
    string? Sunday,
    Time? SundayTime,
    string? Monday,
    Time? MondayTime,
    string? Tuesday,
    Time? TuesdayTime,
    string? Wednesday,
    Time? WednesdayTime,
    string? Thursday,
    Time? ThursdayTime,
    string? Friday,
    Time? FridayTime
);

public enum EnumDay
{
    Saturday,
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday
};

public enum EnumTime
{
    Prd10To14,
    Prd11To15,//period
    Prd12To16,
    Prd13To17,
    Prd14To18,
    Prd15To19,
    Prd16To20,
    Prd17To21
};

public record Time(
    string Prd10To14,
    string Prd11To15,
    string Prd12To16,
    string Prd13To17,
    string Prd14To18,
    string Prd15To19,
    string Prd16To20,
    string Prd17To21
);