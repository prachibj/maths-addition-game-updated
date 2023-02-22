import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { InteractionService } from './interaction.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num1: number = 0;
  num2: number = 0;
  answer: any = null;
  isCorrect: boolean = false;
  isIncorrect: boolean = false;
  startTime: any;
  endTime: any;
  time: any;
  bootstrapModal: any;
  isReset: boolean = false;

  constructor(private interaction: InteractionService) {}

  ngOnInit() {
    this.startTime = new Date().getTime()
    this.interaction.getData().subscribe((res: any) => {
      console.log(res);
      this.num1 = res.num1;
      this.num2 = res.num2;
    })
  }


  checkAnswer() {
    this.endTime = new Date().getTime()
    console.log(this.startTime, this.endTime);
    if (this.answer === this.num1 + this.num2) {
      this.isCorrect = true;
      this.isIncorrect = false;
      this.time = Math.round((this.endTime - this.startTime) / 1000);
      this.showResultModal();
      this.reset();
    } else {
      this.isCorrect = false;
      this.isIncorrect = true;
      this.showResultModal()
    }
  }

  reset() {
    this.startTime = new Date().getTime()
    this.answer = null;
    this.isCorrect = false;
    this.isIncorrect = false;
    this.isReset = true;
  }
  showResultModal() {
    const modal = document.getElementById('resultModal');
    if (modal) {
      this.bootstrapModal = new bootstrap.Modal(modal);
      this.bootstrapModal.show();
    }
  }

  closeModal() {
    if (this.isReset) {
      window.location.reload();
    }
  }
}