import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent {

  public bookForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: BookService){ }

  ngOnInit(): void {
    this.init();
  }

  public saveBook(): void{
    this.service.addBook(this.bookForm.value).subscribe(result => {
      alert(`New book added with id = ${result}`);
    });
  }

  private init():void{
    this.bookForm = this.formBuilder.group({
      title: [],
      description: []
    });
  }

}
