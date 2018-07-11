import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit {

  username = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);
  password = new FormControl('', [
    Validators.required,
    this.hasExclamation
  ]);

  registerForm : FormGroup;

  register(){
    console.log(this.registerForm);
    this.authService.registerUser(this.registerForm.value.username,
              this.registerForm.value.password);
  }
  hasExclamation(input : FormControl){
    const exclExist = input.value.indexOf('!')>=0;
    return exclExist ? null : { 'needExclamation' : true}
  }
  constructor(private fb : FormBuilder, private authService : AuthService) {
    this.registerForm = this.fb.group({
      username : this.username,
      password : this.password
    })
   }

  ngOnInit() {
  }

}
