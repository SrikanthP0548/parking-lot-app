import { VehicleListService } from './../../shared/vehicle-list.service';
import { 
  Component, 
  OnInit,
  ViewChild,
  ElementRef } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})

export class EntryComponent implements OnInit {
  entrynumber:number = 0;
  vehicleid:string;
  showForm = true;
  @ViewChild('entryId') entryId:ElementRef;
  @ViewChild('vehicleNumber') vehicleNo:ElementRef;
  
  constructor(private vlService:VehicleListService) { }

  ngOnInit() {
    this.vlService.listUpdated.subscribe(
     (e:number) =>{
       console.log(e);
       this.entrynumber = e+1;
     }
   )
  }
  
  onVehcileAdded(){
   this.entrynumber = this.entryId.nativeElement.value;
   this.vehicleid = this.vehicleNo.nativeElement.value;
   this.vlService.addNewVehicle(this.entrynumber,this.vehicleid);
  this.showForm = false;
  }
   
  onShowForm(){
    this.showForm = true;
  }
}
