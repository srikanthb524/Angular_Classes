import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angcustpipe',
  templateUrl: './angcustpipe.component.html',
  styleUrls: ['./angcustpipe.component.css']
})
export class AngcustpipeComponent implements OnInit {
title:string='';
Fahrenheit:number=0;
celcius:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
