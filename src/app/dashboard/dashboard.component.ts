import { Component, OnInit } from '@angular/core';
import { CalculatorComponent } from "../calculator/calculator.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CalculatorComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  ngOnInit() {
    const loggedIn = localStorage.getItem('loggedIn');
    if (!loggedIn) { alert('You must be logged in to view this page'); }
  }
}
