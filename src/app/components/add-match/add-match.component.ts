import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  match:any={};
  matchForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.matchForm = this.fb.group({
      scoreOne:[''],
      scoreTwo:[''],
      teamOne:[''],
      teamTwo:[''],
      logoOne:[''],
      logoTwo:[''],
      
    })
  }

  addMatch(){
    console.log('Here the match object',this.match); 
  }
}
