import { UserService } from './../../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName:['', [Validators.minLength(3), Validators.required]],
      lastName:['',[Validators.minLength(5), Validators.required]],
      email:['',[Validators.email, Validators.required]],
      pwd:['',[Validators.minLength(8), Validators.required]],
      confirmPwd:['']
    })
  }

  signup(x){
    console.log('BTN clicked', x );
    this.userService.signup(x).subscribe(
      ()=> {
        console.log('Signup with success');
        
      }
    )
  }


}
