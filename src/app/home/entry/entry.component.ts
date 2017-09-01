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
  entryNo:number;
  vehicleid:string;
  showForm = true;
  wheelsNum :string;
  entryTime:Date;
  
  entryValid
  vehicleValid
  wheelsValid
  rForm: FormGroup;
  constructor(private vlService:VehicleListService,private fBuilder:FormBuilder) { 
    
  }

  ngOnInit() {
  this.entryNo = (this.vlService.getVehiclesList().length > 1) ? this.vlService.getVehiclesList().length+1:1;
  this.resetFormGroup();
   this.rForm = this.fBuilder.group({
      'vehicleNumber' : this.vehicleValid,
      'wheelsValid' : this.wheelsValid
    });
  }

  resetFormGroup(){
    this.vehicleValid = new FormControl(null,[Validators.required]);
    this.wheelsValid = new FormControl(null,[Validators.required]);
  }
  
  onVehcileAdded(entryForm){
    this.vehicleid = entryForm.vehicleNumber;
    this.wheelsNum = entryForm.wheelsValid;
    this.entryTime = new Date();
    this.vlService.addNewVehicle(this.entryNo,entryForm.vehicleNumber,entryForm.wheelsValid,this.entryTime);
    console.log(this.entryNo);
    this.entryNo = this.entryNo+1;
    this.rForm.reset();
    this.showForm = false;
  }
   
  onShowForm(){
    this.showForm = true;
  }
}
