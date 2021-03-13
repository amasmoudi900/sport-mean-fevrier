import { PlayerService } from './../../services/player.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  id:any;
  player:any= {};
  playerForm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private playerService:PlayerService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.playerService.getPlayerById(this.id).subscribe(
      (data)=> {
        this.player = data;
      }
    )
    this.playerForm = this.fb.group({
      name:[''],
      poste:[''],
      age:[''],
      nbr:[''],
      description:['']
    })
  }
  editPlayer(){
    this.playerService.editPlayer(this.player).subscribe(
      () => {
        console.log('Player edited successfully');
        this.router.navigate(['admin']);
      }
    )
  }

}
