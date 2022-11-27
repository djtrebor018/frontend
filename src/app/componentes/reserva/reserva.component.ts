import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Viajes } from 'src/app/clases/viajes.model';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  constructor(private _service:ServicesService,
    private toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {

  }

  }


