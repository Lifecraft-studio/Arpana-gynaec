import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TreatmentComponent } from './treatment/treatment.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'treatment/:type/:subtype',
    component: TreatmentComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
];
