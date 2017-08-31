import { VehicleListService } from './../../shared/vehicle-list.service';
import { 
  Component, 
  OnInit,
  ViewChild,
  ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})

export class EntryComponent implements OnInit {
  entryNo:number = 0;
  vehicleid:string;
  showForm = true;
  wheelsNum :string;
  
  entryValid
  vehicleValid
  wheelsValid
  rForm: FormGroup;
  constructor(private vlService:VehicleListService,private fBuilder:FormBuilder) { 
  }

  ngOnInit() {
  this.vlService.listUpdated.subscribe(
     (e:number) =>{
       console.log(e);
       this.entryNo = e+1;
     }
   )
  this.entryValid = new FormControl( this.entryNo , [Validators.required]);
  this.vehicleValid = new FormControl(null,[Validators.required]);
  this.wheelsValid = new FormControl(null,[Validators.required]);

 this.rForm = this.fBuilder.group({
      'entrynumber' : this.entryValid,
      'vehicleNumber' : this.vehicleValid,
      'wheelsValid' : this.wheelsValid
    });
  }
  
  onVehcileAdded(entryForm){
    this.entryNo = entryForm.entrynumber;
    this.vehicleid = entryForm.vehicleid;
    this.vlService.addNewVehicle(entryForm.entrynumber,entryForm.vehicleNumber,entryForm.wheelsValid);
    this.showForm = false;
  }
   
  onShowForm(){
    this.showForm = true;
  }
}
