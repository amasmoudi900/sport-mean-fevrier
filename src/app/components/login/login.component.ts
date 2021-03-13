import { UserService } from './../../services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any = {};
  loginForm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private userService:UserService,
    private router:Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email:[''],
      pwd:['']
    })
  }
  login(){
    this.userService.login(this.user).subscribe(
      (data)=> {
        console.log('User is logged in', data.message);
        if (data.message == '2') {
          this.router.navigate(['admin']);
        } 
      }
    )
  }

}
