import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struc-directives',
  templateUrl: './struc-directives.component.html',
  styleUrls: ['./struc-directives.component.css'],
})
export class StrucDirectivesComponent implements OnInit {
  num: number = 0;
  check: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  EvenorOdd(): boolean {
    if (this.num % 2 == 0) this.check = true;
    else this.check = false;
    return this.check;
  }
}
