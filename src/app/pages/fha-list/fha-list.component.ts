import {Component, OnInit} from '@angular/core';
import {FhaImmovable} from '../../bo/FhaImmovable';
import {Municipio} from '../../bo/Municipio';
import {FhaService} from '../../services/fha.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fha-list',
  templateUrl: './fha-list.component.html',
  styles: []
})
export class FhaListComponent implements OnInit {
  title = 'Listado de FHA';

  fhaInmos: FhaImmovable[];
  fhaDisp: FhaImmovable[] = [];
  seleccionado = '';
  municipios: Municipio[] = [];


  constructor(public fhaService: FhaService, private _router: Router) {
    window.scrollTo(0, 0);
    this.fhaService.getMunicipiosList().subscribe(municipios => {
      this.municipios = municipios;
    });


    this.fhaService.getFhaList().subscribe(fhaInmos => {
      this.fhaInmos = fhaInmos;

      for (const disp of fhaInmos) {
        if (disp.available) {
          this.fhaDisp.push(disp);
        }
      }
    });
  }

  ngOnInit() {

  }

  getForMunicipio() {
    console.log(this.seleccionado);
    this.fhaService.getFhaList().subscribe(fhaInmos => {
        this.fhaInmos = fhaInmos;
        this.fhaDisp = [];

        if (this.seleccionado === '') {
          for (const disp of fhaInmos) {
            if (disp.available) {
              this.fhaDisp.push(disp);
            }
          }
        } else {
          for (const disp of fhaInmos) {
            if (disp.available && this.seleccionado === disp.city) {
              this.fhaDisp.push(disp);
            }
          }
        }
      }
    );
  }

  goToDetail(codigo: string) {
    this._router.navigate(['/fha-detail', codigo]);
  }

}
