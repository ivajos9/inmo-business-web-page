import { Injectable } from '@angular/core';
import {Quotation} from '../bo/Quotation';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class QuotationsService {

  constructor(private db: AngularFireDatabase) { }

  addQuotation(quotation: Quotation) {
    this.db.list('/quotations-requests/').push(quotation);
  }
}
