import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  // playerUrl = 'api/players';
  playerUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  addplayer(player: any) {
    return this.httpClient.post(`${this.playerUrl}/addPlayer`, player);
  }
  getAllPlayers() {    
    return this.httpClient.get<{allPlayers:any}>(`${this.playerUrl}/getAllPlayers`);
  }
  getPlayerById(id) {
    return this.httpClient.get(`${this.playerUrl}/getPlayerById/${id}`);
  }
  deletePlayer(id) {
    return this.httpClient.delete(`${this.playerUrl}/deletePlayer/${id}`);
  }
  editPlayer(player: any) {
    return this.httpClient.put(`${this.playerUrl}/editPlayer/${player.id}`, player);
  }
}
