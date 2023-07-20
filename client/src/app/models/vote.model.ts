enum EnumDay{
    saturday,
    sunday,
    monday,
    tuesday, 
    wednesday, 
    thursday,
    friday
};

export interface Day {
    // model day 
   saturday? :EnumDay.saturday, // satueday index 0 
   saturdayTime? : Time, // inject model time in day
   sunday? : EnumDay.sunday,  // sunday index 1 
   sundayTime? : Time, //inject model time in day
   monday? : EnumDay.monday,  // monday index 2 
   mondayTime? :Time, //inject model time in day 
   tuesday? :EnumDay.thursday, // tuesday index 3
   tuesdayTime? : Time, //inject model time in day 
   wednesday? : EnumDay.wednesday, // wednesday index 4
   wednesdayTime? : Time, //inject model time in day 
   thursday? : EnumDay.thursday, // thursday index 5
   thursdayTime? : Time, //inject model time in day 
   friday? : EnumDay.friday, //friday index 6 
   fridayTime? : Time //inject model time in day
};

enum EnumTime{
    prd10To14,
    prd11To15,//period
    prd12To16,
    prd13To17,
    prd14To18,
    prd15To19,
    prd16To20,
    prd17To21
}

export interface Time{
    prd11To15? : EnumTime.prd11To15, //prd11To15 index = 0
    prd12To16? : EnumTime.prd12To16, //prd12To16 index = 1
    prd10To14? : EnumTime.prd10To14,  //prd10To14 index = 2
    prd13To17? : EnumTime.prd13To17, //prd13To17 index = 3 
    prd14To18? : EnumTime.prd14To18, //prd14To18 index = 4
    prd15To19? : EnumTime.prd15To19, //prd15To19 index = 5
    prd16To20? : EnumTime.prd16To20, //prd16To20 index = 6 
    prd17To21? : EnumTime.prd17To21   //prd17To21 index =7
}

