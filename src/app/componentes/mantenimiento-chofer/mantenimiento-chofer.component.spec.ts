import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoChoferComponent } from './mantenimiento-chofer.component';

describe('MantenimientoChoferComponent', () => {
  let component: MantenimientoChoferComponent;
  let fixture: ComponentFixture<MantenimientoChoferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoChoferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenimientoChoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
