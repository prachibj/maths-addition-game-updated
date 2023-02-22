import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }

  private subject = new Subject<any>();


  private randomNumber$ = new Observable(observer => {  
    const num1 = Math.floor(Math.random() * 9) + 1;
    const num2 = Math.floor(Math.random() * 9) + 1;
    observer.next({num1:num1,num2:num2});  
  }); 

  getData() {
    console.log(this.subject)
    return this.randomNumber$;
  }

}
