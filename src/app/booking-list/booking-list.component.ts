import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.services';
import { Book } from '../model/book.model';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {

  books!: Book[];
  isConnected!: Boolean;
  onlyAvailable: Boolean = false;

  radioForm = new FormGroup({
    onlyAvailable: new FormControl(''),
 }); 

  constructor(private bookingService : BookingService) { }

  ngOnInit(): void {
    this.isConnected = this.bookingService.isConnected;
    this.books = this.bookingService.getAllBooks();
    
  }

  onFormSubmit(): void {}

  changeValue(e: any): void {
    if (this.onlyAvailable) {
      this.onlyAvailable = false;
      this.books = this.bookingService.getAllBooks();
    }
    else {
      this.onlyAvailable = true;
      this.books = this.bookingService.getAvailableBooks();
    }
  }

}
