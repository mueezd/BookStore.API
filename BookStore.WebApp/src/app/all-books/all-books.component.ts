import { Component } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent {
  public books: any[] = [];
  constructor(private service: BookService){ }

  ngOnInit() {
    this.getBook();
  }

  private getBook(): void{
    this.service.getBook().subscribe(result => {
      this.books = result;
    });
  }

}
    
