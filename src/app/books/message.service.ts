import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { LoggerService } from './logger.service';

@Injectable()
export class MessageService {

  private subject = new Subject<any>();
  private logger = new LoggerService();

   sendMessage(obj, message) {
       this.logger.addLog("In sendMessage");
       this.subject.next({bname:obj.BName,aname: obj.AName, quantity:obj.Qty, message: message });
   }

   clearMessage() {
       this.logger.addLog("In clearMessage");
       this.subject.next({});
   }

   getMessage(): Observable<any> {
       this.logger.addLog("In Service class getMessage");
       return this.subject.asObservable();
   }

}
