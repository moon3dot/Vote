using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace api.Models;



public record Vote(
    [property: BsonId, BsonRepresentation(BsonType.ObjectId)]
    string? Id,
    EnumDay? Saturday,
    EnumTime? SaturdayTime,
    EnumDay? Sunday,
    EnumTime? SundayTime,
    EnumDay? Monday,
    EnumTime? MondayTime,
    EnumDay? Tuesday,
    EnumTime? TuesdayTime,
    EnumDay? Wednesday,
    EnumTime? WednesdayTime,
    EnumDay? Thursday,
    EnumTime? ThursdayTime,
    EnumDay? Friday,
    EnumTime? FridayTime
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