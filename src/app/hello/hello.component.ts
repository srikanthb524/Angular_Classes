import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  title='Hello World';
  fname="abcd";
  lname="xyz";
  getColor='red';


getName():string{
  return (`Name is ${this.fname} ${this.lname}`);
}

  constructor() { }

  ngOnInit(): void {
  }

}
