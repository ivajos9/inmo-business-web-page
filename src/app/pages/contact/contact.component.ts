import { Component, OnInit } from '@angular/core';
import {Question} from '../../bo/Question';
import {QuestionsService} from '../../services/questions.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {

  sendSuccess = false;
  messageField = 'Gracias por Contactarnos. Te atenderemos en breve.';
  question: Question = {
    name: null,
    email: null,
    phone: null,
    message: null
  };

  constructor(private _questionService: QuestionsService) {
    window.scrollTo(0, 0);
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.question.name !== '' && this.question.email !== '' && this.question.message !== '') {
      this._questionService.addQuestion(this.question);
      this.question.name = null;
      this.question.message = null;
      this.question.phone = null;
      this.question.email = null;
      this.sendSuccess = true;
    }

  }

}
