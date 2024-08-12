import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { GynecologyComponent } from './gynecology/gynecology.component';
import { ObstetricsComponent } from './obstetrics/obstetrics.component';
import { SurgeryComponent } from './surgery/surgery.component';
import { GalleryComponent } from './gallery/gallery.component';
import { InfoComponent } from './info/info.component';

export const routes: Routes = [
    {
        path: '', component: LandingComponent, pathMatch: 'full'
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'gynecology', component: GynecologyComponent,
        children: [
            {
                path: ':treatment', component: InfoComponent
            },
        ]
    },
    {
        path: 'obstetrics', component: ObstetricsComponent
    },
    {
        path: 'surgery', component: SurgeryComponent
    },
    {
        path: 'galley', component: GalleryComponent
    },
];
