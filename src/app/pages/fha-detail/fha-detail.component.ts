import { Component, OnInit } from '@angular/core';
import {FhaImmovable} from '../../bo/FhaImmovable';
import {ActivatedRoute, Router} from '@angular/router';
import {FhaService} from '../../services/fha.service';

@Component({
  selector: 'app-fha-detail',
  templateUrl: './fha-detail.component.html',
  styles: []
})
export class FhaDetailComponent implements OnInit {

  inmueble: FhaImmovable;

  constructor(private activatedRoute: ActivatedRoute, private _router: Router, public fhaService: FhaService) {
    this.activatedRoute.params.subscribe(params => {
      this.fhaService.getImmovableDetail(params['code']).subscribe(detail => {
        this.inmueble = detail;
      });
    });
  }

  ngOnInit() {
  }

}
