import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-gynecology',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './gynecology.component.html',
  styleUrl: './gynecology.component.scss'
})
export class GynecologyComponent {
  items = [
    {
      label: 'Adolescent Medicine',
      router: 'adolscent'
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
