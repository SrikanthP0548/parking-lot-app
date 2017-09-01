import { vehicle } from './vehicle.model';
import { OnInit,Output,EventEmitter,Injectable } from '@angular/core';

@Injectable()
export class VehicleListService {
  
  listUpdated = new EventEmitter<number>();

  private vehcileList:vehicle[] = [];
  constructor() {
    this.vehcileList.push(new vehicle(1,"ABC",new Date(),new Date(),100,"Four Wheels"));
    this.vehcileList.push(new vehicle(2,"ABC",new Date(),new Date(),100,"Four Wheels"));
    this.vehcileList.push(new vehicle(3,"ABC",new Date(),new Date(),100,"Four Wheels"));
    this.vehcileList.push(new vehicle(4,"ABC",new Date(),new Date(),100,"Four Wheels"));
    this.vehcileList.push(new vehicle(5,"ABC",new Date(),new Date(),100,"Four Wheels"));
    this.vehcileList.push(new vehicle(6,"ABC",new Date(),new Date(),100,"Four Wheels"));
    this.vehcileList.push(new vehicle(7,"ABC",new Date(),new Date(),100,"Four Wheels"));
    this.vehcileList.push(new vehicle(8,"ABC",new Date(),new Date(),100,"Four Wheels"));
    this.vehcileList.push(new vehicle(9,"ABC",new Date(),new Date(),100,"Four Wheels"));
    this.vehcileList.push(new vehicle(10,"ABC",new Date(),new Date(),100,"Four Wheels"));
    this.vehcileList.push(new vehicle(11,"ABC",new Date(),new Date(),100,"Four Wheels"));
    this.vehcileList.push(new vehicle(12,"ABC",new Date(),new Date(),100,"Four Wheels"));
    this.vehcileList.push(new vehicle(13,"ABC",new Date(),new Date(),100,"Four Wheels"));
    this.vehcileList.push(new vehicle(14,"ABC",new Date(),new Date(),100,"Four Wheels"));
    this.vehcileList.push(new vehicle(15,"ABC",new Date(),new Date(),100,"Four Wheels"));
    this.vehcileList.push(new vehicle(16,"ABC",new Date(),new Date(),100,"Four Wheels"));
    this.vehcileList.push(new vehicle(17,"ABC",new Date(),new Date(),100,"Four Wheels"));
    this.vehcileList.push(new vehicle(18,"ABC",new Date(),new Date(),100,"Four Wheels"));
    this.vehcileList.push(new vehicle(19,"ABC",new Date(),new Date(),100,"Four Wheels"));
    this.vehcileList.push(new vehicle(20,"ABC",new Date(),new Date(),100,"Four Wheels"));
    this.vehcileList.push(new vehicle(21,"ABC",new Date(),new Date(),100,"Four Wheels"));
    this.vehcileList.push(new vehicle(23,"ABC",new Date(),new Date(),100,"Four Wheels"));
    this.vehcileList.push(new vehicle(22,"ABC",new Date(),new Date(),100,"Four Wheels"));
    this.vehcileList.push(new vehicle(24,"ABC",new Date(),new Date(),100,"Four Wheels"));
    this.vehcileList.push(new vehicle(25,"ABC",new Date(),new Date(),100,"Four Wheels"));
    this.vehcileList.push(new vehicle(26,"ABC",new Date(),new Date(),100,"Four Wheels"));
    this.vehcileList.push(new vehicle(27,"ABC",new Date(),new Date(),100,"Four Wheels"));
  }

  addNewVehicle(entryId,vehicleNo,wheelsNum,entryTime){
     this.listUpdated.emit(parseInt(entryId));
     this.vehcileList.push(new vehicle(parseInt(entryId), vehicleNo,new Date(entryTime),null,0,wheelsNum));
  }

  getVehiclesList(){
    return this.vehcileList.slice();
  }

  replace(index,temp:vehicle){
    this.vehcileList[index] = temp;
  }
} 
