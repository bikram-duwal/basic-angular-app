import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name: string = '';  
  address: string = '';  
  phoneNumber: string = '';  
  formValid: boolean = false; 

  constructor(private router: Router) {} 
  
  saveContact() {  
    const contactDetails = { name: this.name, address: this.address, phoneNumber: this.phoneNumber };  
    localStorage.setItem('contactDetails', JSON.stringify(contactDetails));  
    this.formValid = true;  
    this.router.navigate(['/about']);  
  }  

  canDeactivate(): boolean {
    if (!this.formValid) {
      return confirm('You have unsaved changes! Are you sure you want to leave?');
    }
    return true;
  }
}
