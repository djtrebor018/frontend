import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Viajes } from 'src/app/clases/viajes.model';
import { ServicesService } from 'src/app/services/services.service';
@Component({
  selector: 'app-tabla-viajes',
  templateUrl: './tabla-viajes.component.html',
  styleUrls: ['./tabla-viajes.component.css']
})
export class TablaViajesComponent implements OnInit {
  viajes:any[]=[];

  constructor(private _service:ServicesService,
    private toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
    
  }
  }


