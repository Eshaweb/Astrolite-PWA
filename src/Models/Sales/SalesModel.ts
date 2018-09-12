export interface SalesModel{
    PartyMastId:string;
    Amount:number;
    BillDiscountCode:string;
    Remarks:string;
    PayCodes:PayCode[];
    ServtrDets:ServtrDet[];
}

export interface PayCode{
    Code:string;//selectbox value
    Amount:number;//useramount
}
export interface ServtrDet{
    ItMastId:string;
    FreeAmount:number;
    ItemAmount:number;
}