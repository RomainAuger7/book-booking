import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  @Input()
  book!: Book

  @Input()
  isConnected!: Boolean

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    if (this.book.available) {
      this.book.available = false
    } else {
      this.book.available = true
    }
  }

}
