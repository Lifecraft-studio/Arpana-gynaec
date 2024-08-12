import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-obstetrics',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './obstetrics.component.html',
  styleUrl: './obstetrics.component.scss'
})
export class ObstetricsComponent {
  items = [
    {
      label: 'Pre Pregnancy Care',
      router: 'pre'
    },
    {
      label: 'Menstrual Problems',
      router: ''
    },
    {
      label: 'Polycystic Ovarian Syndrome (PCOS)',
      router: ''
    },
    {
      label: 'Urinary Problems in Females',
      router: ''
    },
    {
      label: 'Vaginal Discharge',
      router: ''
    },
    {
      label: 'Menopause',
      router: ''
    },
    {
      label: 'Cancer Screening',
      router: ''
    },
    {
      label: 'Cervical Cancer',
      router: ''
    },
    {
      label: 'Ovarian Cysts',
      router: ''
    },
    {
      label: 'Colposcopy',
      router: ''
    },
    {
      label: 'Pelvic Floor Repair',
      router: ''
    },
  ]
}
