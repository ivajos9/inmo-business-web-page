import {Component, OnInit} from '@angular/core';
import {FhaImmovable} from '../../bo/FhaImmovable';
import {ActivatedRoute, Router} from '@angular/router';
import {FhaService} from '../../services/fha.service';
import {Quotation} from '../../bo/Quotation';
import {QuestionsService} from '../../services/questions.service';
import {QuotationsService} from '../../services/quotations.service';

@Component({
  selector: 'app-fha-detail',
  templateUrl: './fha-detail.component.html',
  styles: []
})
export class FhaDetailComponent implements OnInit {

  inmueble: FhaImmovable;
  images: string[] = [];
  quotation: Quotation = {
    code: null,
    name: null,
    email: null,
    message: null,
    phone: null,
    downPayment: null,
    type: 'fha'
  };
  sendSuccess = false;

  constructor(private activatedRoute: ActivatedRoute, private _router: Router,
              public fhaService: FhaService, private quotationService: QuotationsService) {
    window.scrollTo(0, 0);
    this.activatedRoute.params.subscribe(params => {
      this.fhaService.getImmovableDetail(params['code']).subscribe(detail => {
        this.inmueble = detail;
        this.quotation.code = this.inmueble.code;
        this.quotation.downPayment = this.inmueble.price * 0.05;
        if (this.inmueble.images) {
          for (let i = 0; i < this.inmueble.images.length; i++) {
            if (i > 0) {
              this.images.push(this.inmueble.images[i]);
            }
          }
        }
      });
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Creando cotizacion');
    if (this.quotation.name !== '' && this.quotation.email !== '' && this.quotation.message !== '') {
      this.quotationService.addQuotation(this.quotation);
      this.quotation.name = null;
      this.quotation.message = null;
      this.quotation.phone = null;
      this.quotation.email = null;
      this.quotation.downPayment = this.inmueble.price * 0.05;
      this.sendSuccess = true;
    }

  }
}
