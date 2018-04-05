import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {FhaImmovable} from '../bo/FhaImmovable';
import {Observable} from 'rxjs/Observable';
import {Municipio} from '../bo/Municipio';
import {Question} from '../bo/Question';

@Injectable()
export class QuestionsService {
  constructor(private db: AngularFireDatabase) {
  }

  addQuestion(question: Question) {
    this.db.list('/questions/').push(question);
  }
}


