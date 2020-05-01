export = CheckoutApiRequest;
declare class CheckoutApiRequest {
    constructor(mypos: any, params: any);
    _mypos: any;
    _params: any;
    get mypos(): any;
    get params(): any;
    get host(): "https://www.mypos.eu/vmp/checkout-test" | "https://www.mypos.eu/vmp/checkout";
    send: (handler: any) => void;
}
