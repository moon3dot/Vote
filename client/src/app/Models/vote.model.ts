export interface vote {

    VoterId?: string,
    Saturday?: boolean,
    SaturdayTime?: time,
    Sunday?: boolean,
    SundayTime?: time,
    Monday?: boolean,
    MondayTime?: time,
    Tuesday?: boolean,
    TuesdayTime?: time,
    Wednesday?: boolean,
    WednesdayTime?: time,
    Thursday?: boolean,
    ThursdayTime?: time,
    Friday?: boolean,
    FridayTime?: time,
}

export interface time {
    Prd10To14: boolean,
    Prd11To15: boolean,
    Prd12To16: boolean,
    Prd13To17: boolean,
    Prd14To18: boolean,
    Prd15To19: boolean,
    Prd16To20: boolean,
    Prd17To21: boolean
}