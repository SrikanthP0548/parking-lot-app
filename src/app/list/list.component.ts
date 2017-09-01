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
  pageVehicles :vehicle[]=[];
  page = 1 ;
  itemsPerPage =5;
  totalListItems:number;
  previousPage:number;
  constructor(private vlService:VehicleListService) { }

  ngOnInit() {
    this.vehiclesList = this.vlService.getVehiclesList();
    this.totalListItems = this.vehiclesList.length;
    this.loadData();
  }

  loadPage(page:number){
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.loadData();
    }
  }
  
  loadData(){
    this.pageVehicles = this.vehiclesList.slice((this.itemsPerPage*(this.page-1)),(this.itemsPerPage*(this.page-1))+this.itemsPerPage);
  }

}
