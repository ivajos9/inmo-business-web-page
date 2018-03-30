import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';
import {FhaImmovable} from '../bo/FhaImmovable';
import {Municipio} from '../bo/Municipio';

@Injectable()
export class FhaService {

  public fhaInmo: Observable<FhaImmovable[]>;
  public municipios: Observable<Municipio[]>;
  public detailInmo: Observable<any>;

  constructor(private db: AngularFireDatabase) {
  }

  getListByPath(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getFhaList() {
    this.fhaInmo = this.getListByPath('/fha/immovables');
    return this.fhaInmo;
  }

  getMunicipiosList() {
    this.municipios = this.getListByPath('/fha/locations-fha');
    return this.municipios;
  }

  getImmovableDetail(codigo) {
    this.detailInmo = this.db.object('/fha/immovables/' + codigo).valueChanges();
    return this.detailInmo;

  }

}
