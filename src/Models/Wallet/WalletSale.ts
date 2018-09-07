export interface WalletSale{
    PartyMastId:string;
    Amount:number;
    PayCode:PayCode[];
    ServeTrDet:ServeTrDet[];
}

export interface PayCode{
    Code:string;//selectbox value
    Amount:number;//useramount
}
export interface ServeTrDet{
    ItMastId:string;
    FreeAmount:number;
    ItemAmount:number;
}