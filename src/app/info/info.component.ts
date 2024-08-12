import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { treatments } from '../utils/constant-utils';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent implements OnInit {

  treatmentName: string = '';
  treatmentDetails: any;
  treatment: any;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.treatmentName = param.get('treatment') as string;
      this.treatmentDetails = treatments.find(treatment => {
        return treatment.id === 'gynecology';
      })
      this.treatment = this.treatmentDetails.treatments.find((item: { id: string; }) => {
        return item.id === this.treatmentName;
      })
    })


  }
}
