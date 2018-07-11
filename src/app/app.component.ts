import { Component } from '@angular/core';
//import { USER_DATA } from './data/mocks';
import { User } from './model/user';
import { DataService } from './services/data.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users : User[];

  increase(){
    this.dataService.counter++;
  }
  constructor(public dataService :DataService){}
  ngOnInit(){
    //this.users = USER_DATA;
    
    // this.users = this.dataService.getUserData();
    // this.dataService.getJsonData()
    //   .subscribe(
    //     data=>this.users=data,
    //     err=>console.log(err),
    //     ()=>console.log("COMPLETED"));
    firebase.initializeApp({
      apiKey: "AIzaSyAaEjrH6qCQYguuRDenlIFXPoB5eMY9ge8",
      authDomain: "angular-project-1f886.firebaseapp.com"
    });
    
    this.dataService.getApiData()
      .subscribe(data=>this.users = data)
  }
}
