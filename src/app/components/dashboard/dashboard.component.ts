import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  lastedUpdate: string = '';
  totalItems: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteAll(): void {

  }

}
