export = BasePOSRequest;
declare class BasePOSRequest {
    constructor(mypos: any, params: any);
    _mypos: any;
    _params: any;
    get mypos(): any;
    get params(): any;
    get isValid(): boolean;
    get config(): {
        host: string;
        port: number;
    };
    send: (callback: any) => void;
}
