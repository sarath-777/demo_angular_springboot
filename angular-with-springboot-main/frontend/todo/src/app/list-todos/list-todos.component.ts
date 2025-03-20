import { DatePipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [NgFor,FormsModule,DatePipe],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit {

  todos=[
    new Todo(1,'go hiking',false,new Date()),
    new Todo(2,'go fishing',false,new Date()),
    new Todo(3,'go hunting',false,new Date()),
    new Todo(4,'learn driving',false,new Date()),
    new Todo(5,'learn Angular',false,new Date())
  ]
  constructor(){

  }

  ngOnInit(){

  }

}

export class Todo{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date
  ){

  }
}
