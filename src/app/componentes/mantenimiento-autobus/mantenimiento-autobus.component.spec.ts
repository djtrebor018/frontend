import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoAutobusComponent } from './mantenimiento-autobus.component';

describe('MantenimientoAutobusComponent', () => {
  let component: MantenimientoAutobusComponent;
  let fixture: ComponentFixture<MantenimientoAutobusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoAutobusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenimientoAutobusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
