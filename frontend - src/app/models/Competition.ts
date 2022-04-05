export class Competition {
    sport : string = '';
    discipline : string = '';
    location : string = '';
    gender : string = '';
    startDate : Date;
    endDate  : Date;
    type : string = ''; //team or individual
    competitors: string[] = [];
    delegate : string = '';
    minSportsmen: number = 0;
    maxSportsmen: number = 0;
    resultType: string = '';
    roundNumber: number = 0;
    identificator: number;
    scheduled: boolean = false;
    message: string = ''
}