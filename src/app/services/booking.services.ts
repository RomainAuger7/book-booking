import { Injectable } from "@angular/core";
import { Book } from "../model/book.model";

@Injectable({
    providedIn: "root"
})

export class BookingService {

    book: Book[] = [
        {
            id: 1,
            title: 'The moutains of madness',
            author: 'H.P. Lovecraft',
            description: 'The story details the events of a disastrous expedition to Antarctica in September 1930, and what is found there by a group of explorers led by the narrator, Dr. William Dyer of Miskatonic University.',
            cover: 'https://images-na.ssl-images-amazon.com/images/I/81opYKUZKJL.jpg',
            available: true
        },
        {
            id: 2,
            title: 'The call of cthulhu',
            author: 'H.P. Lovecraft',
            description: 'The Call of Cthulhu is a short story by American horror writer H. P. Lovecraft, written in August and September 1926 and originally serialized in the February 1928 issue of Weird Tales.',
            cover: 'https://static.fnac-static.com/multimedia/Images/FR/NR/f2/24/d3/13837554/1507-1/tsp20220216212120/The-Call-of-Cthulhu.jpg',
            available: false
        },
        {
            id: 3,
            title: '1984',
            author: 'George Orwell',
            description: 'Nineteen Eighty-Four, often published as 1984, is a dystopian novel published in 1949 by the UK publisher George Orwell. It is the story of the Englishman Winston Smith who is forced to live in an alternate realityy...',
            cover: 'https://www.editionsartege.fr/pfs/vignettes/FIC171037HAB0.jpg',
            available: true
        }
    ];

    isConnected: Boolean = false;
    
    
    constructor() { }


    verifyLogin(username: string, password: string): void {
        console.log(username + " " + password);
        if (username === "user" && password === "user") {
            this.isConnected = true;
            console.log(this.isConnected);
        } else {
            this.isConnected = false;
            console.log(this.isConnected);
        }
    }

    getAllBooks(): Book[] {
        return this.book;
    }

    getAvailableBooks(): Book[] {
        return this.book.filter(book => book.available);
    }
}
