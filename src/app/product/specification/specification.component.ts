import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent implements OnInit {

  name : string;
  constructor(private route : ActivatedRoute) {
    this.name = this.route.snapshot.queryParams['name'];
   }

  ngOnInit() {
  }

}
