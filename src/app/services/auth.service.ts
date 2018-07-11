import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  token : any;
  constructor(private router : Router) { }

  registerUser(username : string, password : string){
    firebase.auth().createUserWithEmailAndPassword(username, password)
      .then(response=>console.log(response))
      .catch(err=>console.log(err));
  }
  loginUser(username : string, password : string){
    firebase.auth().signInWithEmailAndPassword(username, password)
      .then(response=>{
        console.log(response);
        firebase.auth().currentUser.getIdToken()
          .then(token=>{
            //console.log(token);
            this.token = token;
            // localStorage.setItem('mytoken', JSON.stringify({
            //   token : token, 
            //   expires : new Date()
            // }));
            this.router.navigate(['/user']);
          }).catch(err=>console.log(err))
      }).catch(err=>console.log(err))
  }

  getToken(){
    return this.token;
  }

  isAuthenticated(){
    return this.token != null;
  }

  
}
