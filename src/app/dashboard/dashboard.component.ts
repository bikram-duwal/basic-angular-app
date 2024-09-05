import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  ngOnInit() {
    const loggedIn = localStorage.getItem('loggedIn');
    if (!loggedIn) { alert('You must be logged in to view this page'); }
  }
}
