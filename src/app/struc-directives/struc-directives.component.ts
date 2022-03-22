import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struc-directives',
  templateUrl: './struc-directives.component.html',
  styleUrls: ['./struc-directives.component.css'],
})
export class StrucDirectivesComponent implements OnInit {
  num: number = 0;
  check: boolean = true;
  isDisplay:string='display:none';
  constructor() {}

  ngOnInit(): void {}

  EvenorOdd(): boolean {
    if (this.num % 2 == 0)
    {
      this.check = true;
      this.isDisplay="display:block";
    }
    else this.check = false;
    return this.check;
  }
}
