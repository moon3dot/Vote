import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { vote } from 'src/app/Models/vote.model';

@Component({
  selector: 'app-all-vote',
  templateUrl: './all-vote.component.html',
  styleUrls: ['./all-vote.component.scss']
})
export class AllVoteComponent {
  public votes: vote[] | undefined;
  public apiUrl = "http://localhost:5000/api/vote/get-all";
  public count = 0;
  //global variable for day and time

  //satday
  public satdayCount = 0;
  public satCount10 = 0;
  public satCount11 = 0;
  public satCount12 = 0;
  public satCount13 = 0;
  public satCount14 = 0;
  public satCount15 = 0;
  public satCount16 = 0;
  public satCount17 = 0;

  //sunday
  public sundayCount = 0;
  public sunCount10 = 0;
  public sunCount11 = 0;
  public sunCount12 = 0;
  public sunCount13 = 0;
  public sunCount14 = 0;
  public sunCount15 = 0;
  public sunCount16 = 0;
  public sunCount17 = 0;

  //monday
  public mondayCount = 0;
  public monCount10 = 0;
  public monCount11 = 0;
  public monCount12 = 0;
  public monCount13 = 0;
  public monCount14 = 0;
  public monCount15 = 0;
  public monCount16 = 0;
  public monCount17 = 0;

  //tuesday
  public tuesdayCount = 0;
  public tuesCount10 = 0;
  public tuesCount11 = 0;
  public tuesCount12 = 0;
  public tuesCount13 = 0;
  public tuesCount14 = 0;
  public tuesCount15 = 0;
  public tuesCount16 = 0;
  public tuesCount17 = 0;

  //wednsday
  public wedndayCount = 0;
  public wednCount10 = 0;
  public wednCount11 = 0;
  public wednCount12 = 0;
  public wednCount13 = 0;
  public wednCount14 = 0;
  public wednCount15 = 0;
  public wednCount16 = 0;
  public wednCount17 = 0;

  //thurday
  public thurdayCount = 0;
  public thurCount10 = 0;
  public thurCount11 = 0;
  public thurCount12 = 0;
  public thurCount13 = 0;
  public thurCount14 = 0;
  public thurCount15 = 0;
  public thurCount16 = 0;
  public thurCount17 = 0;


  //friday
  public fridayCount = 0;
  public friCount10 = 0;
  public friCount11 = 0;
  public friCount12 = 0;
  public friCount13 = 0;
  public friCount14 = 0;
  public friCount15 = 0;
  public friCount16 = 0;
  public friCount17 = 0;

  constructor(private http: HttpClient) {

    this.showVotes()
  }

  showVotes(): void {

    this.http.get<vote[]>(this.apiUrl).subscribe({
      next: respose => {
        this.votes = respose;
        this.count = this.votes.length

        this.votes.forEach(vote => {

          //day sat
          if (vote.saturday)
            this.satdayCount++
          //time
          if (vote.saturdayTime?.prd10To14)
            this.satCount10++

          if (vote.saturdayTime?.prd11To15)
            this.satCount11++

          if (vote.saturdayTime?.prd12To16)
            this.satCount12++

          if (vote.saturdayTime?.prd13To17)
            this.satCount13++

          if (vote.saturdayTime?.prd14To18)
            this.satCount14++

          if (vote.saturdayTime?.prd15To19)
            this.satCount15++

          if (vote.saturdayTime?.prd16To20)
            this.satCount16++

          if (vote.saturdayTime?.prd17To21)
            this.satCount17++

          //day sunday
          if (vote.sunday)
            this.sundayCount++
          //time
          if (vote.sundayTime?.prd10To14)
            this.sunCount10++

          if (vote.sundayTime?.prd11To15)
            this.sunCount11++

          if (vote.sundayTime?.prd12To16)
            this.sunCount12++

          if (vote.sundayTime?.prd13To17)
            this.sunCount13++

          if (vote.sundayTime?.prd14To18)
            this.sunCount14++

          if (vote.sundayTime?.prd15To19)
            this.sunCount15++

          if (vote.sundayTime?.prd16To20)
            this.sunCount16++

          if (vote.sundayTime?.prd17To21)
            this.sunCount17++

          //day monday
          if (vote.monday)
            this.mondayCount++
          //time
          if (vote.mondayTime?.prd10To14)
            this.monCount10++

          if (vote.mondayTime?.prd11To15)
            this.monCount11++

          if (vote.mondayTime?.prd12To16)
            this.monCount12++

          if (vote.mondayTime?.prd13To17)
            this.monCount13++

          if (vote.mondayTime?.prd14To18)
            this.monCount14++

          if (vote.mondayTime?.prd15To19)
            this.monCount15++

          if (vote.mondayTime?.prd16To20)
            this.monCount16++

          if (vote.mondayTime?.prd17To21)
            this.monCount17++

          //day Tuesday
          if (vote.thursday)
            this.thurdayCount++
          //time
          if (vote.thursdayTime?.prd10To14)
            this.tuesCount10++

          if (vote.thursdayTime?.prd11To15)
            this.tuesCount11++

          if (vote.thursdayTime?.prd12To16)
            this.tuesCount12++

          if (vote.thursdayTime?.prd13To17)
            this.tuesCount13++

          if (vote.thursdayTime?.prd14To18)
            this.tuesCount14++

          if (vote.thursdayTime?.prd15To19)
            this.tuesCount15++

          if (vote.thursdayTime?.prd16To20)
            this.tuesCount16++

          if (vote.thursdayTime?.prd17To21)
            this.tuesCount17++


          //day wednsday
          if (vote.wednesday)
            this.wedndayCount++
          //time
          if (vote.wednesdayTime?.prd10To14)
            this.wednCount10++

          if (vote.wednesdayTime?.prd11To15)
            this.wednCount11++

          if (vote.wednesdayTime?.prd12To16)
            this.wednCount12++

          if (vote.wednesdayTime?.prd13To17)
            this.wednCount13++

          if (vote.wednesdayTime?.prd14To18)
            this.wednCount14++

          if (vote.wednesdayTime?.prd15To19)
            this.wednCount15++

          if (vote.wednesdayTime?.prd16To20)
            this.wednCount16++

          if (vote.wednesdayTime?.prd17To21)
            this.wednCount17++


          //day Thursday
          if (vote.thursday)
            this.thurdayCount++
          //time
          if (vote.thursdayTime?.prd10To14)
            this.thurCount10++

          if (vote.thursdayTime?.prd11To15)
            this.thurCount11++

          if (vote.thursdayTime?.prd12To16)
            this.thurCount12++

          if (vote.thursdayTime?.prd13To17)
            this.thurCount13++

          if (vote.thursdayTime?.prd14To18)
            this.thurCount14++

          if (vote.thursdayTime?.prd15To19)
            this.thurCount15++

          if (vote.thursdayTime?.prd16To20)
            this.thurCount16++

          if (vote.thursdayTime?.prd17To21)
            this.thurCount17++


          //day Friyday
          if (vote.friday)
            this.fridayCount++
          //time
          if (vote.fridayTime?.prd10To14)
            this.friCount10++

          if (vote.fridayTime?.prd11To15)
            this.friCount11++

          if (vote.fridayTime?.prd12To16)
            this.friCount12++

          if (vote.fridayTime?.prd13To17)
            this.friCount13++

          if (vote.fridayTime?.prd14To18)
            this.friCount14++

          if (vote.fridayTime?.prd15To19)
            this.friCount15++

          if (vote.fridayTime?.prd16To20)
            this.friCount16++

          if (vote.fridayTime?.prd17To21)
            this.friCount17++

        });
      }

    });
  }
}
