import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {PAGES_ROUTES} from './pages.routes';
import {PagesComponent} from './pages.component';
import { FhaListComponent } from './fha-list/fha-list.component';
import {environment} from '../../environments/environment';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { FhaDetailComponent } from './fha-detail/fha-detail.component';

@NgModule ({
  declarations: [
    HomeComponent,
    PagesComponent,
    FhaListComponent,
    FhaDetailComponent
  ],
  exports: [
    HomeComponent,
    PagesComponent,
    FhaListComponent,
    FhaDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ]
})

export class PagesModule {}
