import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { User } from '../../clases/login.model';
import {  ToastrModule,ToastrService } from 'ngx-toastr';
import { NgIfContext } from '@angular/common';
import { Route, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

usuario:string='';
contraseña:string='';

  constructor(private _service:ServicesService,
    private toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
  }


      }



