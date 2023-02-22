import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private randomNumber$ = new Observable(observer => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    observer.next({ num1: num1, num2: num2 });
  });

  getData() {
    return this.randomNumber$;
  }

}
