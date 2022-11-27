import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './componentes/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';
import { TablaViajesComponent } from './componentes/tabla-viajes/tabla-viajes.component';
import { ManteniemientoDestinosComponent } from './componentes/manteniemiento-destinos/manteniemiento-destinos.component';
import { MantenimientoAutobusComponent } from './componentes/mantenimiento-autobus/mantenimiento-autobus.component';
import { MantenimientoChoferComponent } from './componentes/mantenimiento-chofer/mantenimiento-chofer.component';
import { MantenimientoRutasComponent } from './componentes/mantenimiento-rutas/mantenimiento-rutas.component';
import { MantenimientoUsuariosComponent } from './componentes/mantenimiento-usuarios/mantenimiento-usuarios.component';
import { MantenimientoViajesComponent } from './componentes/mantenimiento-viajes/mantenimiento-viajes.component';
import { MantenimientoComponent } from './componentes/mantenimiento/mantenimiento.component';


const routes: Routes = [
  { path:'', component:LoginComponent},
  { path:'login', component:LoginComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path:'reserva',component:ReservaComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'tabla-viajes',component:TablaViajesComponent},
  {path:'Mantenimiento',component:MantenimientoComponent},
  {path:'Mantenimiento-Usuarios',component:MantenimientoUsuariosComponent},
  {path:'Mantenimiento-Rutas',component:MantenimientoRutasComponent},
  {path:'Mantenimiento-Chofer',component:MantenimientoChoferComponent},
  {path:'Mantenimiento-Viajes',component:MantenimientoViajesComponent},
  {path:'Mantenimiento-Autobus',component:MantenimientoAutobusComponent},
  {path:'Mantenimiento-Destinos',component:ManteniemientoDestinosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
