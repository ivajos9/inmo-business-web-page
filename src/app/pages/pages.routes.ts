import {PagesComponent} from './pages.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FhaListComponent} from './fha-list/fha-list.component';
import {FhaDetailComponent} from './fha-detail/fha-detail.component';
import {FaqsFhaComponent} from './faqs-fha/faqs-fha.component';
import {ContactComponent} from './contact/contact.component';
import {OurServicesComponent} from './our-services/our-services.component';

const pagesRoutes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      {path: 'home', component: HomeComponent,  data: {titulo: 'Home'}},
      {path: 'fha-list', component: FhaListComponent, data: {titulo: 'FHA'}},
      {path: 'fha-detail/:code', component: FhaDetailComponent, data: {titulo: 'FHA'}},
      {path: 'faq-fha', component: FaqsFhaComponent, data: {titulo: 'FHA'}},
      {path: 'contact', component: ContactComponent, data: {titulo: 'Contactanos'}},
      {path: 'our-services', component: OurServicesComponent, data: {titulo: 'Nuestros Servicios'}},
      {path: '', redirectTo: '/home', pathMatch: 'full'}
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
