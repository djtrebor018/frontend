import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ServicesService } from './services/services.service';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReservaComponent } from './componentes/reserva/reserva.component';
import { AdminNavbarComponent } from './componentes/admin-navbar/admin-navbar.component';
import { AdminDashboardComponent } from './componentes/admin-dashboard/admin-dashboard.component';
import { TablaViajesComponent } from './componentes/tabla-viajes/tabla-viajes.component';
import { MantenimientoComponent } from './componentes/mantenimiento/mantenimiento.component';
import { MantenimientoUsuariosComponent } from './componentes/mantenimiento-usuarios/mantenimiento-usuarios.component';
import { MantenimientoRutasComponent } from './componentes/mantenimiento-rutas/mantenimiento-rutas.component';
import { MantenimientoViajesComponent } from './componentes/mantenimiento-viajes/mantenimiento-viajes.component';
import { MantenimientoChoferComponent } from './componentes/mantenimiento-chofer/mantenimiento-chofer.component';
import { ManteniemientoDestinosComponent } from './componentes/manteniemiento-destinos/manteniemiento-destinos.component';
import { MantenimientoAutobusComponent } from './componentes/mantenimiento-autobus/mantenimiento-autobus.component'
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NavbarComponent,
    DashboardComponent,
    ReservaComponent,
    AdminNavbarComponent,
    AdminDashboardComponent,
    TablaViajesComponent,
    MantenimientoComponent,
    MantenimientoUsuariosComponent,
    MantenimientoRutasComponent,
    MantenimientoViajesComponent,
    MantenimientoChoferComponent,
    ManteniemientoDestinosComponent,
    MantenimientoAutobusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [ServicesService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
