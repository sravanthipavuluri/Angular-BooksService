import { Component, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from './../books/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  // template:'<h1>{{message}}</h1>',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnDestroy  {
   
    message: any={};    
    subscription: Subscription;

    constructor(private messageService: MessageService){
      console.log("In Message component");
      this.subscription = this.messageService.getMessage().subscribe(result => {
        if(result){
          this.message = result;
        } 
      });      
    }
    ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
    }
    displaytext(display:HTMLParagraphElement){
      display.innerHTML = this.message.text.value;
    }
    print(){
      console.log(this.message.text);
    }
}
