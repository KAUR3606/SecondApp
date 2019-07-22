import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
appStatus: boolean = true;
appTitle = 'You can see ';

appList: any[] = 
[ 
  {country: 'UK', rank: 'One'},
{country: 'USA', rank: 'Two'} 
];
carSelection='toyo';
  constructor() { }

  ngOnInit() {
  }

}
