import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import  { BookingService } from '../services/booking.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private bookingService : BookingService,private router : Router ) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log(this.loginForm.value.username + " " + this.loginForm.value.password);
    this.bookingService.verifyLogin(this.loginForm.value.username, this.loginForm.value.password);
    if (this.bookingService.isConnected) {
      console.log("Login Successful");
      this.router.navigateByUrl('');
    } else {
      console.log("Login Failed");
    }
  }

}
