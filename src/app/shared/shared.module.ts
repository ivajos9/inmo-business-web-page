import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    NotFoundComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    NotFoundComponent
  ]
})

export class SharedModule {}
