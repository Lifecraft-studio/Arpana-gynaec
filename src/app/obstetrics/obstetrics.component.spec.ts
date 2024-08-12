import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObstetricsComponent } from './obstetrics.component';

describe('ObstetricsComponent', () => {
  let component: ObstetricsComponent;
  let fixture: ComponentFixture<ObstetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObstetricsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObstetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
