using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace api.Models;



public record Vote(
    [property: BsonId, BsonRepresentation(BsonType.ObjectId)]
    string? Id,
    EnumDay? Saturday,
    Time? SaturdayTime,
    EnumDay? Sunday,
    Time? Sundaytime,
    EnumDay? Monday,
    Time? MondayTime,
    EnumDay? Tuesday,
    Time? TuesdayTime,
    EnumDay? Wednesday,
    Time? WednesdayTime,
    EnumDay? Thursday,
    Time? ThursdayTime,
    EnumDay? Friday,
    Time? FridayTime
);
public enum EnumDay
{
    saturday,
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday
};

public enum EnumTime
{
    prd10To14,
    prd11To15,//period
    prd12To16,
    prd13To17,
    prd14To18,
    prd15To19,
    prd16To20,
    prd17To21
};

public record Time(
    EnumTime prd11To15,
    EnumTime prd12To16,
    EnumTime prd10To14,
    EnumTime prd13To17,
    EnumTime prd14To18,
    EnumTime prd15To19,
    EnumTime prd16To20,
    EnumTime prd17To21
);
