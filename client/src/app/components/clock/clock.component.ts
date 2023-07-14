import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit{

private daysArray = [
  'satDay' , 'sunDay' , 'monDay' , 'tuseDay' , 'wednDAy' , 'thusDay' , 'friyDay'];

private date =new Date();

public hour: any;
public minute: string | undefined;
public second : string | undefined;
public ampm : string | undefined;
public day : string | undefined;

ngOnInit() {
  setInterval(()=>{
    const date = new Date();
    this.updateDate(date);
  }, 1000);
  this.day = this.daysArray[this.date.getDay()];
}
private updateDate(date : Date){
    const hours = date.getHours();
    this.hour = hours;

    const minutes = date.getMinutes();
    this.minute= minutes.toString(); 

    const seconds = date.getSeconds();
    this.second = seconds.toString();
};

} 
