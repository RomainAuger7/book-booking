import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isConnected: Boolean = this.bookingService.isConnected;;

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    setInterval(() => this.onClick(), 200);
  }

  onClick(): void {
    this.isConnected = this.bookingService.isConnected;
  }

  onLogout(): void {
    window.location.reload();
  }

}
