import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoViajesComponent } from './mantenimiento-viajes.component';

describe('MantenimientoViajesComponent', () => {
  let component: MantenimientoViajesComponent;
  let fixture: ComponentFixture<MantenimientoViajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoViajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenimientoViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
