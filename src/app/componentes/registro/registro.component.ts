import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/clases/usuario.model';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  constructor(private _service:ServicesService,
    private toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
  }


   }
