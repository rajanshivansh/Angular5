import { Injectable } from '@angular/core';
import { USER_DATA } from '../data/mocks';
import { Http } from '@angular/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from '../model/user';
import { AuthService } from './auth.service';

@Injectable()
export class DataService {
    counter : number = 0;
    getUserData(){
        return USER_DATA;
    }
    getJsonData(){
        return this.http.get("assets/data/user-data.json")
            .map(response=> <User[]> response.json().userdata)
            
    }
    getApiData(){
    //    return this.httpClient
    //     .get<User[]>("https://fir-soc-gen.firebaseio.com/userdata.json?auth="+this.authService.getToken() );

    // return this.httpClient
    //     .get<User[]>("https://fir-soc-gen.firebaseio.com/userdata.json",{
    //         params : new HttpParams().set("auth", this.authService.getToken())
    //     });
    return this.httpClient
       .get<User[]>("https://fir-soc-gen.firebaseio.com/userdata.json")
    }
    constructor(private http : Http,
                private httpClient : HttpClient,
                private  authService : AuthService){}
}

// npm install --save firebase
