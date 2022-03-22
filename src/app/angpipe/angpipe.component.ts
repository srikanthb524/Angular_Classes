import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angpipe',
  templateUrl: './angpipe.component.html',
  styleUrls: ['./angpipe.component.css']
})
export class AngpipeComponent implements OnInit {

today:number=Date.now();

dummyText:string="Lorem ipsum dolor sit amet. In vero sint eos culpa dolorum vel officiis quia aut minus illo id culpa officia est tempore tenetur. Qui autem repudiandae et corrupti placeat qui dolor repellendus in maxime nihil et optio minima. Sit itaque doloribus eos eius dolorem ea aliquid quaerat eum expedita aliquid et magnam repellendus. Qui consequatur dolores in eveniet labore ad sint quia cum internos doloremque.";

pi: number = 3.14159265359;

a: number = 0.259;
b: number = 1.3495;

str: string = 'abcdefghij';

  constructor() { }

  ngOnInit(): void {
  }

}
