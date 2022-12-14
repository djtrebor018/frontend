import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoUsuariosComponent } from './mantenimiento-usuarios.component';

describe('MantenimientoUsuariosComponent', () => {
  let component: MantenimientoUsuariosComponent;
  let fixture: ComponentFixture<MantenimientoUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenimientoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
