import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManteniemientoDestinosComponent } from './manteniemiento-destinos.component';

describe('ManteniemientoDestinosComponent', () => {
  let component: ManteniemientoDestinosComponent;
  let fixture: ComponentFixture<ManteniemientoDestinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManteniemientoDestinosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManteniemientoDestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
