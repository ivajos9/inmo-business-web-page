import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {QuestionsService} from '../../services/questions.service';
import {Question} from '../../bo/Question';

@Component({
  selector: 'app-faqs-fha',
  templateUrl: './faqs-fha.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class FaqsFhaComponent implements OnInit {
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
