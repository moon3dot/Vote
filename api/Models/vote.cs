namespace api.Models;

public record vote(
    //name voter
    string Email,
    // day
    bool ?SaturDay,
    // time  mornig and noon
    bool ?satMornig,
    bool ?SatNoon,
    //nextDay
    bool ?SunDay,
    bool ?SunMornig,
    bool ?SunNoon,
    bool ?MonDay,
    bool ?MonMornig,
    bool ?MonNoon,
    bool ?TuesDay,
    bool ?TuesMornig,
    bool ?TuseNoon,
    bool ?WednesDay,
    bool ?WenMornig,
    bool ?WenNoon,
    bool ?ThursDay,
    bool ?ThurMornig,
    bool ?ThurNoon,
    bool ?FriDay,
    bool ?FriyMornig,
    bool ?FriyNoon
);
