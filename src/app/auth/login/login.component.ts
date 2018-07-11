import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login(form : NgForm){
    console.log("Username : " + form.value.username + 
        "\nPassword : " + form.value.password);
        this.authService.loginUser(form.value.username, form.value.password);
  }
  getData(){
    this.dataService.getApiData()
      .subscribe(data=>console.log(data));
  }
  constructor(private authService : AuthService,
              private dataService : DataService) { }

  ngOnInit() {
  }

}
