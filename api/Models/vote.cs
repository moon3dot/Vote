namespace api.Models;


public record day(
    //name voter
    string Email,
    // day
    bool ?Saturday,
    // time  mornig and noon
    bool ?satMornig,
    bool ?SatNoon,
    //nextDay
    bool ?Sunday,
    bool ?Sunmornig,
    bool ?SunNoon,
    bool ?Monday,
    bool ?Monmornig,
    bool ?MonNoon,
    bool ?Tuesday,
    bool ?Tuesmornig,
    bool ?TuseNoon,
    bool ?Wednesday,
    bool ?Wenmornig,
    bool ?WenNoon,
    bool ?Thursday,
    bool ?Thurmornig,
    bool ?ThurNoon,
    bool ?Friday,
    bool ?Friymornig,
    bool ?FriyNoon
);
