import { Component, OnInit } from '@angular/core';
import { bookentry} from './bookentry';
import { MessageService } from './message.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  private bEntry:bookentry;
  constructor(private msgService:MessageService) { }

  ngOnInit() {
    this.bEntry=new bookentry({bookName:"",authorName:"",quantity:0});
  }

  onFormSubmit(BooksForm:HTMLFormElement){
    console.log("In onFormSubmit"+BooksForm.value.BName);
    this.msgService.sendMessage(BooksForm.value, "Successfully added");
  }

  clearData(){
    this.msgService.clearMessage();
  }

}
