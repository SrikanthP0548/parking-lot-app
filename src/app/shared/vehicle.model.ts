export class vehicle{
    public entryId :number;
    public vehicleNumber : string ;
    public entryTime : Date;
    public exitTime : Date;
    public paidAmount : number;
    public wheelsNo : string;
    constructor(entryId:number,vehicleNumber:string,entryTime:Date,exitTime:Date,paidAmount:number,wheelsNo:string){
        this.entryId =entryId;
        this.vehicleNumber = vehicleNumber;
        this.entryTime = entryTime;
        this.exitTime = exitTime;
        this.paidAmount = paidAmount;
        this.wheelsNo = wheelsNo;
    }
}