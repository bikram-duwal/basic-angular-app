import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
username: string='';
password: string='';

constructor(private router: Router){}

login(){
  localStorage.setItem('loggedIn', 'true');
  this.router.navigate(['/dashboard']);
}
}
