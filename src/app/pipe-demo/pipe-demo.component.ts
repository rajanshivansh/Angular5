import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {
  filteredStatus = "";
  addTodo(){
    this.todos.push({
      label : "New Work",
      status : 'pending'
    })
  }
  todos = [{
    label: 'Some Work',
    status: 'done'
  }, {
    label: 'Some Work',
    status: 'pending'
  }, {
    label: 'Some Work',
    status: 'done'
  }, {
    label: 'Some Work',
    status: 'pending'
  }
  ]

  contact_number: number = 987654321;
  data = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Here comes the data!!")
    }, 800);
  })
  constructor() { }

  ngOnInit() {
  }

}

// ng g p pipes/filter --spec false