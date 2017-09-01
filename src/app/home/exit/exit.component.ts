import { vehicle } from './../../shared/vehicle.model';
import { VehicleListService } from './../../shared/vehicle-list.service';
import { Component, OnInit ,ViewChild ,ElementRef} from '@angular/core';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css']
})
export class ExitComponent implements OnInit {
  
  @ViewChild('entryNumber') entryNumber:ElementRef;
  isDetailsFetched = false;
  entryno:number;
  vehicles :vehicle[];
  temp:vehicle;
  totalhours:any;
  isError=false;
  alreadyPaid = true;
  constructor(private vlService:VehicleListService) { }

  ngOnInit() {
  }
  
  getEntryDetails(){
    this.entryno = parseInt(this.entryNumber.nativeElement.value);
    this.vehicles= this.vlService.getVehiclesList();
    if(this.vehicles.find(e=>e.entryId === this.entryno)){
      this.isError = false;
      this.temp = this.vehicles.find(e=>e.entryId === this.entryno);
      if(this.temp.paidAmount == 0){
      this.alreadyPaid = true;
      this.temp.exitTime = new Date();
      let timeDiff = (this.temp.exitTime.getTime() - this.temp.entryTime.getTime());
      this.totalhours =Math.ceil(timeDiff/ (1000*60*60)); 
      this.temp.paidAmount  = this.totalhours *100;
      this.isDetailsFetched = true;
    }
    else
    {
      let timeDiff = (this.temp.exitTime.getTime() - this.temp.entryTime.getTime());
      this.totalhours =Math.ceil(timeDiff/ (1000*60*60)); 
      this.isDetailsFetched = true;
      this.alreadyPaid = false;
    }
    }
    else{
      this.isError = true;
      this.isDetailsFetched = false;
    }
  }

  payAmount(){
   let index = (this.vehicles.findIndex(e=>e.entryId===this.entryno));
   this.vlService.replace(index,this.temp);
  }
}