using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public record Register
(
    [property: BsonId, BsonRepresentation(BsonType.ObjectId)]
    string? Id,
    [MaxLength(25), MinLength(3) ]
    string? Name,
    [EmailAddress, Required(ErrorMessage ="Email is required") , RegularExpression("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$" , ErrorMessage ="Must be a valid email")]
    string Email,
    [Required(ErrorMessage ="Password is required"), MaxLength(30 , ErrorMessage ="must leter 30 Character") , MinLength(8 , ErrorMessage ="must more 8 Character")]
    string Password,
    [MaxLength(30 , ErrorMessage ="must leter 30 Character") , MinLength(8 , ErrorMessage ="must more 8 Character")]
    string? ConfirmPass,
    bool? IsAdmin
);