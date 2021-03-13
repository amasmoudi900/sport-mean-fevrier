import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  team:any={};
  teamForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.teamForm = this.fb.group({
      name:[''],
      country:[''],
      foundation:[''],
      stadium:['']
    })
  }

  addTeam(){
    console.log('Here the team object',this.team); 
  }

}
