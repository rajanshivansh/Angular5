import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  id : number;
  constructor(private route : ActivatedRoute) { 
   // this.id = +this.route.snapshot.params['id'];
    this.route.params.subscribe(params=>{
      this.id = +params['id'];
    })
  }

  ngOnInit() {
  }

}
