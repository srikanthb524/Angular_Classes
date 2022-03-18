import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-propbing',
  templateUrl: './propbing.component.html',
  styleUrls: ['./propbing.component.css']
})
export class PropbingComponent implements OnInit {
isDisable=false;

hi="Hi i am from componnet property binding";
  constructor() { }

  ngOnInit(): void {
  }

  getevenorodd():string
  {
    let num:number= 20;
    let res:string;
    if(num%2==0)
    {
      res="Number is Even";
    }
    else{
      res="Number is Odd";
    }
    return res;
  }

}
