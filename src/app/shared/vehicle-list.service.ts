import { vehicle } from './vehicle.model';
import { Output,EventEmitter,Injectable } from '@angular/core';

@Injectable()
export class VehicleListService {
  
  listUpdated = new  EventEmitter<number>();

  private vehcileList:vehicle[] = [];
  constructor() { }

  addNewVehicle(entryId,vehicleNo){
    console.log(entryId);
    this.vehcileList.push(new vehicle(parseInt(entryId), vehicleNo,new Date(),null, "0"));
    this.listUpdated.emit(parseInt(entryId));
  }

  getVehiclesList(){
    return this.vehcileList.slice();
  }
}
