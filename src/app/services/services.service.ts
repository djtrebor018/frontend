import { Injectable } from '@angular/core';
import { User } from '../clases/login.model';
import{HttpClient} from '@angular/common/http'
import {  Observable } from 'rxjs';
import { Usuario } from '../clases/usuario.model';
import{Viajes} from '../clases/viajes.model';
import { CookieService } from "ngx-cookie-service";




@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  api:string = 'http://localhost:5231/api/';
  constructor(private http:HttpClient) { }



}
