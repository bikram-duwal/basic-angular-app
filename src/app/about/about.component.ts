import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  contactDetails: any; 
  
  ngOnInit(){
    this.contactDetails = JSON.parse(localStorage.getItem('contactDetails') || '{}');  
  }
}
