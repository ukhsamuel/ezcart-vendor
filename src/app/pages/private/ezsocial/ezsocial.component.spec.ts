import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzsocialComponent } from './ezsocial.component';

describe('EzsocialComponent', () => {
  let component: EzsocialComponent;
  let fixture: ComponentFixture<EzsocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EzsocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EzsocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
