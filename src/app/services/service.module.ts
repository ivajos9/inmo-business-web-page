import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FhaService} from './fha.service';
import {ClientsService} from './clients.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    FhaService,
    ClientsService
  ]
})
export class ServiceModule { }
