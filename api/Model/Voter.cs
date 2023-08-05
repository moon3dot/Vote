using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace api.Model;

public record Voter(
    [property: BsonId, BsonRepresentation(BsonType.ObjectId)]
    string? Id,
    [MaxLength(30, ErrorMessage = "MaxLength 30"), MinLength(3, ErrorMessage = "MinLength 3"), Required(ErrorMessage = "This is required")]
    string? Name,
    [EmailAddress(ErrorMessage = "This Format isnt valid"), Required(ErrorMessage = "This is required")]
    string? Email
);