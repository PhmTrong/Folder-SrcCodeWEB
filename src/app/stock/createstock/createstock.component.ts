import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-createstock',
  templateUrl: './createstock.component.html',
  styleUrls: ['./createstock.component.css']
})
export class CreatestockComponent {

  public nameControl = new FormControl();
  constructor(){

  }
  onSubmit(){
    console.log('Name Control Value',this.nameControl.value);
  }
}
