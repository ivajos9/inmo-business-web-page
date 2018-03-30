import {Component, OnInit} from '@angular/core';
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
  images: string[] = [];

  constructor(private activatedRoute: ActivatedRoute, private _router: Router, public fhaService: FhaService) {
    window.scrollTo(0, 0);
    this.activatedRoute.params.subscribe(params => {
      this.fhaService.getImmovableDetail(params['code']).subscribe(detail => {
        this.inmueble = detail;
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

}
