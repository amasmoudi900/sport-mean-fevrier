import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {

    let players = [
      { id: 1, name: 'Messi', nbr: '10', age: 35, description: 'Best player for 5 times', poste: 'MID' },
      { id: 2, name: 'Xavi', nbr: '06', age: 35, description: 'Best player for 5 times', poste: 'MID' },
      { id: 3, name: 'Iniesta', nbr: '08', age: 35, description: 'Best player for 5 times', poste: 'MID' },
      { id: 4, name: 'Ronaldo', nbr: '07', age: 35, description: 'Best player for 5 times', poste: 'ATK' }
    ];

    let matches= [
      {}
    ]

    return { players, matches };

  }
}