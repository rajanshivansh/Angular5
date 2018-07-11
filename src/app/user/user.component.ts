import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../model/user';
import { DataService } from '../services/data.service';

@Component({
    selector : 'app-user',
   // template : `<h1>User Component Loaded!!!</h1>`,
   templateUrl : './user.component.html',
    // styles : [`
    //     h1{
    //         color : lightblue;
    //     }
    // `]
    styleUrls : [`./user.component.css`],
    providers : [DataService]
})
export class UserComponent {
    @Input('title') title : string;
    // @Input('users') users : User[];
    users : User[];

    myClasses = {
        myBorder : true,
        myText : false
    }
    myDefaultColor = 'darkgrey';

    moreInfo(user : User){
        alert(`${user.firstName} is working with ${user.company}!!!`);
        this.myClasses.myText = true;
        this.myClasses.myBorder = false;
    }


  increase(){
    this.dataService.counter++;
  }

    ngOnInit(){
        this.dataService.getApiData()
            .subscribe(data=>this.users = data);
    }
    // ngOnChanges(changes : SimpleChanges){
    //     console.log("ngOnChanges", changes);
    // }
   constructor(public dataService : DataService){}
    // ngDoCheck(){console.log("ngDoCheck");}
    // ngAfterContentInit(){console.log("ngAfterContentInit");}
    // ngAfterContentChecked(){console.log("ngAfterContentChecked");}
    // ngAfterViewInit(){console.log("ngAfterViewInit");}
    // ngAfterViewChecked(){console.log("ngAfterViewChecked");}
    // ngOnDestroy(){console.log("ngOnDestroy");}
}