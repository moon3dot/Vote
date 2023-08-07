using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace api.Models;

public record Voter(
    [property: BsonId, BsonRepresentation(BsonType.ObjectId)]
    string? Id, //hamishe sabet
    [MinLength(3, ErrorMessage ="MinLength = 3"), MaxLength(30, ErrorMessage ="Max Length = 30")]
    string? Name,
    [EmailAddress , Required(ErrorMessage ="Is required")]
    string Email
);