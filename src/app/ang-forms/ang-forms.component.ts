import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ang-forms',
  templateUrl: './ang-forms.component.html',
  styleUrls: ['./ang-forms.component.css']
})
export class AngFormsComponent implements OnInit {
uname:string='';
userName:any;
formdata:any;
  constructor() { }

  ngOnInit(): void {
    this.formdata=new FormGroup({
      userName: new FormControl()
    });
  }
onDisplay():void{
  alert(`Welcome ${this.uname}!!`)
}
onReactDisplay(data: { userName: any; })
{
  this.userName= data.userName;
  alert(`Welcome ${this.userName}!!`)
}
}
