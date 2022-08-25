import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interface.model';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  taskAdd: string = '';
  taskList: Task[] = [{
    isDeleted: false,
    taskName: 'item 1'
  },
  {
    isDeleted: true,
    taskName: 'item 1'
  }];

  constructor() { }

  ngOnInit(): void {
  }

  addTask(): void {

  }

}
