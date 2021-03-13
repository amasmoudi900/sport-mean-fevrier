import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {

  players:any;
  constructor(
    private router:Router,
    private playerService:PlayerService) { }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe(
      (data) => {
        this.players = data.allPlayers;
      }
    );
  }
  goToPlayer(id){
    this.router.navigate([`displayPlayer/${id}`]);
  }
  goToEditPlayer(id){
    this.router.navigate([`editPlayer/${id}`]);
  }
  deletePlayer(id){
    this.playerService.deletePlayer(id).subscribe(
      () => {
        this.playerService.getAllPlayers().subscribe(
          (data) => {
            this.players = data.allPlayers;
          }
        ) 
      }
    )
  }

}
