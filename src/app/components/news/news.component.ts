import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  players:any;
  constructor() { }

  ngOnInit() {
    this.players = [
      {id: 1, name: 'Messi', nbr: '10', age: 35, description: 'Best player for 5 times', poste: 'MID', img: 'assets/images/img_1.jpg'},
      {id: 2, name: 'Xavi', nbr: '06', age: 35, description: 'Best player for 5 times', poste: 'MID', img: 'assets/images/img_2.jpg'},
      {id: 3, name: 'Iniesta', nbr: '08', age: 35, description: 'Best player for 5 times', poste: 'MID', img: 'assets/images/img_3.jpg'},
      {id: 4, name: 'Ribery', nbr: '07', age: 35, description: 'Best player for 5 times', poste: 'ATK', img: 'assets/images/img_1.jpg'}
    ]
  }

}
