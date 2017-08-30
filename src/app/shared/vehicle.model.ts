export class vehicle{
    private entryId :number;
    private vehicleNumber : string ;
    private entryTime : Date;
    private exitTime : Date;
    private paidAmount : string;
    
    constructor(entryId:number,vehicleNumber:string,entryTime:Date,exitTime:Date,paidAmount:string){
        this.entryId =entryId;
        this.vehicleNumber = vehicleNumber;
        this.entryTime = entryTime;
        this.exitTime = exitTime;
        this.paidAmount = paidAmount;
    }
}