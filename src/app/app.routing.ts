import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './shared/not-found/not-found.component';

const ROUTES: Routes = [
  {path: '**', component: NotFoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, {useHash: true});
