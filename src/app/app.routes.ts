import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { GynecologyComponent } from './gynecology/gynecology.component';
import { ObstetricsComponent } from './obstetrics/obstetrics.component';
import { SurgeryComponent } from './surgery/surgery.component';
import { GalleryComponent } from './gallery/gallery.component';
import { InfoComponent } from './info/info.component';
import { TreatmentComponent } from './treatment/treatment.component';

export const routes: Routes = [
    {
        path: '', component: LandingComponent, pathMatch: 'full'
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'treatment/:type/:subtype', component: TreatmentComponent
    },
    {
        path: 'gallery', component: GalleryComponent
    },
];
