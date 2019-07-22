import { Component } from '@angular/core';
import { splitNsName } from '@angular/compiler';
import { Student } from './student';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondApp';
  campus = 'data';
  currStudent: Student = 
  { sid:15646846, sname: 'hejrh',
scampus: 'DFavis', slogin: 'hieru' };
  get sname(){
    return 'ABC';
  }
}
