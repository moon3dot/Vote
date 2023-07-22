using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public record Register(
    [property: BsonId, BsonRepresentation(BsonType.ObjectId)] string? Id,
    [MinLength(3),MaxLength(20)]string Name,
    [EmailAddress]string Email,
    [MaxLength(20), MinLength(3)] string Password,
    [MaxLength(20), MinLength(3)] string ConfirmPass,
    bool? IsAdmin
);
