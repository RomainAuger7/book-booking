import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isConnected!: Boolean;

  constructor(private bookingService : BookingService) { }

  ngOnInit(): void {
    this.isConnected = this.bookingService.isConnected;
  }

}
