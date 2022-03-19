import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.css'],
})
export class EventbindComponent implements OnInit {
  num: number = 0;
  result: string = '';
  cssres: boolean = true;
  color:any;
  constructor() {}
  ngOnInit(): void {}
  getValue(): string {
    if (this.num % 2 == 0) {
      this.result = 'You have entered Even Number';
      this.cssres=true;
    } else {
      this.result = 'You have entered Odd Number';
      this.cssres=false;
    }

    return this.result;
  }
}
