import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoggerService {

  addLog(logText : string){
      console.log(logText);
  }
}
