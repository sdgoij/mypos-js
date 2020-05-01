export = POSPaymentRequest;
declare const POSPaymentRequest_base: typeof import("./base-request");
declare class POSPaymentRequest extends POSPaymentRequest_base {
    constructor(mypos: any, amount: any, tid: any, serialNumber: any, trnRef?: any);
}
