import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() match:any;
  constructor() { }

  ngOnInit() {
  }

  color(x:number,y:number){
    if (x<y) {
      return ['red', 0, 'Loss'];
    } else if (x>y){
      return ['green',1, 'Win' ];
    } else {
      return ['blue', 2, 'Draw'];
    }
  }

  // result(x:number,y:number) {
  //   if (x<y) {
  //     return 0;
  //   } else if (x>y){
  //     return 1;
  //   } else {
  //     return 2;
  //   }
  // }

}
