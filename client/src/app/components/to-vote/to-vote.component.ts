import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { vote } from 'src/app/Models/vote.model';
import { GetVoteService } from 'src/app/services/get-vote.service';

@Component({
  selector: 'app-to-vote',
  templateUrl: './to-vote.component.html',
  styleUrls: ['./to-vote.component.scss']
})
export class ToVoteComponent {
  public votes: vote[] | undefined;
  public apiUrl = 'http://localhost:5000/api/vote/get-all';

  // priority of the day
  firstPriorityDay = 0;
  nameFirstPriorityDay = '';
  secondPriorityDay = 0;
  nameSecondPriorityDay = '';

  //priority of the time
  firstPriorityTime = 0;
  nameFirstPriorityTime = '';
  secondPriorityTime = 0;
  nameSecondPriorityTime = '';
  thirdPriorityTime = 0;
  nameThirdPriorityTime = '';
  fourthPriorityTime = 0;
  nameFourthPriorityTime = '';

  //Days
  sat = 0;
  sun = 0;
  mon = 0;
  tu = 0;
  we = 0;
  th = 0;
  fri = 0;

  //times
  prd10To14 = 0;
  prd11To15 = 0;
  prd12To16 = 0;
  prd13To17 = 0;
  prd14To18 = 0;
  prd15To19 = 0;
  prd16To20 = 0;
  prd17To21 = 0;


  constructor(private http: HttpClient) {

    this.showVotes()
  }

  showVotes(): void {

    this.http.get<vote[]>(this.apiUrl).subscribe({
      next: respose => {
        this.votes = respose;

        //check for firstPriorityDay & Time
        this.votes.forEach(vote => {

          // satday
          if (vote.saturday) {
            this.sat++

            //firstPriorityDay
            if (this.sat >= this.firstPriorityDay) {
              this.nameFirstPriorityDay = "شنبه"

              //prd10To14
              if (vote.saturdayTime?.prd10To14) {
                this.prd10To14++
                
                if (this.prd10To14 >= this.firstPriorityTime) {
                  this.nameFirstPriorityTime = "بین ساعت 10 تا 14";
                  this.prd10To14 = this.firstPriorityTime;
                }

                if (this.prd10To14 >= this.secondPriorityTime && this.prd10To14 < this.firstPriorityTime) {
                  this.nameSecondPriorityTime = "بین ساعت 10 تا 14";
                  this.prd10To14 = this.secondPriorityTime;
                }

                if (this.prd10To14 >= this.thirdPriorityTime && this.prd10To14 < this.secondPriorityTime) {
                  this.nameThirdPriorityTime = "بین ساعت 10 تا 14";
                  this.prd10To14 = this.thirdPriorityTime;
                }

                if (this.prd10To14 >= this.fourthPriorityTime && this.prd10To14 < this.thirdPriorityTime) {
                  this.nameFourthPriorityTime = "بین ساعت 10 تا 14";
                  this.prd10To14 = this.fourthPriorityTime;
                }

              }

              //prd11To15
              if (vote.saturdayTime?.prd11To15) {
                this.prd11To15++

                if (this.prd11To15 >= this.firstPriorityTime){
                  this.nameFirstPriorityTime = "بین ساعت 11 تا 15";
                  this.prd11To15 = this.firstPriorityTime;
                }

                if (this.prd11To15 >= this.secondPriorityTime && this.prd11To15 < this.firstPriorityTime){
                  this.nameSecondPriorityTime = "بین ساعت 11 تا 15";
                  this.prd11To15 = this.secondPriorityTime;
                }

                if (this.prd11To15 >= this.thirdPriorityTime && this.prd11To15 < this.secondPriorityTime){
                  this.nameThirdPriorityTime = "بین ساعت 11 تا 15";
                  this.prd11To15 = this.thirdPriorityTime;
                }

                if (this.prd11To15 >= this.fourthPriorityTime && this.prd11To15 < this.thirdPriorityTime){
                  this.nameFourthPriorityTime = "بین ساعت 11 تا 15";
                  this.prd11To15 = this.fourthPriorityTime;
                }
              }

              //prd12To16
              if (vote.saturdayTime?.prd12To16) {
                this.prd12To16++

                if (this.prd12To16 >= this.firstPriorityTime){
                  this.nameFirstPriorityTime = "بین ساعت 12 تا 16";
                  this.prd12To16 = this.firstPriorityTime;
                }

                if (this.prd12To16 >= this.secondPriorityTime && this.prd12To16 < this.firstPriorityTime){
                  this.nameSecondPriorityTime = "بین ساعت 12 تا 16";
                  this.prd12To16 = this.secondPriorityTime;
                }

                if (this.prd12To16 >= this.thirdPriorityTime && this.prd12To16 < this.secondPriorityTime){
                  this.nameThirdPriorityTime = "بین ساعت 12 تا 16";
                  this.prd12To16 = this.thirdPriorityTime;
                }

                if (this.prd12To16 >= this.fourthPriorityTime && this.prd12To16 < this.thirdPriorityTime){
                  this.nameFourthPriorityTime = "بین ساعت 12 تا 16";
                  this.prd12To16 = this.fourthPriorityTime;
                }
              }

              //prd13To17
              if (vote.saturdayTime?.prd13To17) {
                this.prd13To17++

                if (this.prd13To17 >= this.firstPriorityTime){
                  this.nameFirstPriorityTime = "بین ساعت 13 تا 17";
                  this.prd13To17 = this.firstPriorityTime;
                }

                if (this.prd13To17 >= this.secondPriorityTime && this.prd13To17 < this.firstPriorityTime){
                  this.nameSecondPriorityTime = "بین ساعت 13 تا 17";
                  this.prd13To17 = this.secondPriorityTime;
                }

                if (this.prd13To17 >= this.thirdPriorityTime && this.prd13To17 < this.firstPriorityTime){
                  this.nameThirdPriorityTime = "بین ساعت 13 تا 17";
                  this.prd13To17 = this.thirdPriorityTime;
                }

                if (this.prd13To17 >= this.fourthPriorityTime && this.prd13To17 < this.firstPriorityTime){
                  this.nameFourthPriorityTime = "بین ساعت 13 تا 17";
                  this.prd13To17 = this.fourthPriorityTime;
                }
              }

              //prd14To18
              if (vote.saturdayTime?.prd14To18) {
                this.prd14To18++

                if (this.prd14To18 >= this.firstPriorityTime){
                  this.nameFirstPriorityTime = "بین ساعت 14 تا 18";
                  this.prd14To18 = this.firstPriorityTime;
                }

                if (this.prd14To18 >= this.secondPriorityTime && this.prd14To18 < this.firstPriorityTime){
                  this.nameSecondPriorityTime = "بین ساعت 14 تا 18";
                  this.prd14To18 = this.secondPriorityTime;
                  console.log(this.firstPriorityTime)
                }

                if (this.prd14To18 >= this.thirdPriorityTime && this.prd14To18 < this.secondPriorityTime)
                  this.nameThirdPriorityTime = "بین ساعت 14 تا 18";

                if (this.prd14To18 >= this.fourthPriorityTime && this.prd14To18 < this.fourthPriorityTime)
                  this.nameFourthPriorityTime = "بین ساعت 14 تا 18";
              }
              //prd15To19
              if (vote.saturdayTime?.prd15To19) {
                this.prd15To19++

                if (this.prd15To19 >= this.firstPriorityTime)
                  this.nameFirstPriorityTime = "بین ساعت 15 تا 19";

                if (this.prd15To19 >= this.secondPriorityTime && this.prd15To19 < this.firstPriorityTime)
                  this.nameSecondPriorityTime = "بین ساعت 15 تا 19";

                if (this.prd15To19 >= this.thirdPriorityTime && this.prd15To19 < this.secondPriorityTime)
                  this.nameThirdPriorityTime = "بین ساعت 15 تا 19";

                if (this.prd15To19 >= this.fourthPriorityTime && this.prd15To19 < this.fourthPriorityTime)
                  this.nameFourthPriorityTime = "بین ساعت 15 تا 19";
              }
              //prd16To20
              if (vote.saturdayTime?.prd16To20) {
                this.prd16To20++

                if (this.prd16To20 >= this.firstPriorityTime)
                  this.nameFirstPriorityTime = "بین ساعت 16 تا 20";

                if (this.prd16To20 >= this.secondPriorityTime)
                  this.nameSecondPriorityTime = "بین ساعت 16 تا 20";

                if (this.prd16To20 >= this.thirdPriorityTime)
                  this.nameThirdPriorityTime = "بین ساعت 16 تا 20";

                if (this.prd16To20 >= this.fourthPriorityTime)
                  this.nameFourthPriorityTime = "بین ساعت 16 تا 20";
              }
              //prd17To21
              if (vote.saturdayTime?.prd17To21) {
                this.prd17To21++

                if (this.prd17To21 >= this.firstPriorityTime)
                  this.nameFirstPriorityTime = "بین ساعت 17 تا 21";

                if (this.prd17To21 >= this.secondPriorityTime)
                  this.nameSecondPriorityTime = "بین ساعت 17 تا 21";

                if (this.prd17To21 >= this.thirdPriorityTime)
                  this.nameThirdPriorityTime = "بین ساعت 17 تا 21";

                if (this.prd17To21 >= this.fourthPriorityTime)
                  this.nameFourthPriorityTime = "بین ساعت 17 تا 21";
              }
            }
          }


        })

      }
    });
  }
}
