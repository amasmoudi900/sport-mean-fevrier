import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {

  matches:any;
  constructor() { }

  ngOnInit() {
    this.matches = [
      {id: 1, teamOne: 'FCB', teamTwo: 'RMD', scoreOne: 2, scoreTwo: 1, logoOne:"assets/images/logo_1.png", logoTwo:"assets/images/logo_2.png"},
      {id: 2, teamOne: 'SEV', teamTwo: 'ATM', scoreOne: 4, scoreTwo: 0, logoOne:"assets/images/logo_1.png", logoTwo:"assets/images/logo_2.png"},
      {id: 3, teamOne: 'EST', teamTwo: 'CA', scoreOne: 1, scoreTwo: 3, logoOne:"assets/images/logo_1.png", logoTwo:"assets/images/logo_2.png"},
      {id: 4, teamOne: 'DOR', teamTwo: 'ARS', scoreOne: 2, scoreTwo: 2, logoOne:"assets/images/logo_1.png", logoTwo:"assets/images/logo_2.png"},
    ]
  }

  salutation(id){
    alert('Hello '+id);
  }

}
