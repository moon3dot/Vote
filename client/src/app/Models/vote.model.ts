export interface vote {

    saturday?: boolean,
    saturdayTime?: time,
    sunday?: boolean,
    sundayTime?: time,
    monday?: boolean,
    mondayTime?: time,
    tuesday?: boolean,
    tuesdayTime?: time,
    wednesday?: boolean,
    wednesdayTime?: time,
    thursday?: boolean,
    thursdayTime?: time,
    friday?: boolean,
    fridayTime?: time,
}

export interface time {
    prd10To14?: boolean,
    prd11To15?: boolean,
    prd12To16?: boolean,
    prd13To17?: boolean,
    prd14To18?: boolean,
    prd15To19?: boolean,
    prd16To20?: boolean,
    prd17To21?: boolean
}