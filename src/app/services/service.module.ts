import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FhaService} from './fha.service';
import {QuestionsService} from './questions.service';
import {QuotationsService} from './quotations.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    FhaService,
    QuestionsService,
    QuotationsService
  ]
})
export class ServiceModule { }
