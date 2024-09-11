import { Component, OnInit } from '@angular/core';
import { CalculatorComponent } from "../calculator/calculator.component";
import { MyLibComponent } from '../../../projects/my-lib/src/public-api';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CalculatorComponent, MyLibComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  ngOnInit() {
    const loggedIn = localStorage.getItem('loggedIn');
    if (!loggedIn) { alert('You must be logged in to view this page'); }
  }
}
