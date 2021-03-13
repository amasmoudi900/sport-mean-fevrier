import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {

  teams:any;
  constructor() { }

  ngOnInit() {
    this.teams = [
      {id:1, name: 'RMD', foundation: '1899', stadium: 'Bernabiu', country: 'Spain'},
      {id:2, name: 'FCB', foundation: '1900', stadium: 'Camp new', country: 'Spain'},
      {id:3, name: 'SEV', foundation: '1920', stadium: 'STA SEV', country: 'Spain'}
    ];
  }

}
