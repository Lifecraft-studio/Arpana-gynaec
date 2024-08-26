import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { treatments } from '../utils/constant-utils';
import { InfoComponent } from "../info/info.component";
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-treatment',
  standalone: true,
  imports: [RouterOutlet, RouterLink, InfoComponent, UpperCasePipe],
  templateUrl: './treatment.component.html',
  styleUrl: './treatment.component.scss'
})
export class TreatmentComponent {

  treatmentType: string | null = '';
  treatmentSubType: string | null = '';
  treatments = treatments;
  selectedTreatment: any;
  items: any;
  selectedSubTreatment: any;

  constructor(public route: ActivatedRoute) {

    this.route.paramMap.subscribe(params => {
      this.treatmentType = params.get('type');
      this.treatmentSubType = params.get('subtype');

      this.getTreatmentList();
    })
  }

  getTreatmentList() {
    this.selectedTreatment = this.treatments.find((treatment) => treatment.id === this.treatmentType);
    this.items = this.selectedTreatment.treatments;
    this.selectedSubTreatment = this.items.find((subTreatment: any) => subTreatment.id === this.treatmentSubType)
  }
}
