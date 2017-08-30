import { VehicleListService } from './../shared/vehicle-list.service';
import { vehicle } from './../shared/vehicle.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  vehiclesList :vehicle[]=[];

  constructor(private vlService:VehicleListService) { }

  ngOnInit() {
    this.vehiclesList = this.vlService.getVehiclesList();
    console.log(this.vehiclesList);
    
  }

}
