import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
city='Brampton';
city2='Toronto';
  constructor() { }

  ngOnInit() {
  }

  clearCity()
{
  this.city ='';
  this.city2='';
}
mouse(){ this.city = 'Mississauga';}
mouse2() { this.city= 'Toronto';}
resetCity(){
  this.city ='Brampton';
  this.city2='ABC';
}
}
