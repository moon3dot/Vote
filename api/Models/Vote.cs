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
    EnumTime Prd10To14,
    EnumTime Prd11To15,
    EnumTime Prd12To16,
    EnumTime Prd13To17,
    EnumTime Prd14To18,
    EnumTime Prd15To19,
    EnumTime Prd16To20,
    EnumTime Prd17To21
);

public class Time2
{
    public EnumTime Prd11To15 { get; set; }
    public EnumTime Prd12To16 { get; set; }
    public EnumTime Prd10To14 { get; set; }
    public EnumTime Prd13To17 { get; set; }
    public EnumTime Prd14To18 { get; set; }
    public EnumTime Prd15To19 { get; set; }
    public EnumTime Prd16To20 { get; set; }
    public EnumTime Prd17To21 { get; set; }
}



