import { PlayerService } from './../../services/player.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  player:any= {};
  playerForm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private playerService:PlayerService,
    private router:Router) { }

  ngOnInit() {
    this.playerForm = this.fb.group({
      name:[''],
      poste:[''],
      age:[''],
      nbr:[''],
      description:['']
    })
  }

  addPlayer(){
    this.playerService.addplayer(this.player).subscribe(
      () => {
        console.log('Player added successfully');
        this.router.navigate(['admin']);
      }
    )
  }

}
