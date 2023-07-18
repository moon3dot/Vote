import { Time } from "@angular/common";

export interface Day {
    // model day 
   saturday :EnumDay.saturday, // satueday index 0 
   sunday : EnumDay.sunday,  // sunday index 1 
   monday : EnumDay.monday,  // monday index 2 
   tuesday :EnumDay.thursday, // tuesday index 3 
   wednesday : EnumDay.wednesday, // wednesday index 4 
   thursday : EnumDay.thursday, // thursday index 5 
   friday : EnumDay.friday, //friday index 6 
};

enum EnumDay{
    saturday,
    sunday,
    monday,
    tuesday, 
    wednesday, 
    thursday, 
    friday
};