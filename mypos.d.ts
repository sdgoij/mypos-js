export = MyPOS;
declare function MyPOS(config: any): any;
declare class MyPOS {
    constructor(config: any);
    token: any;
    config: any;
    setToken: (token: any) => void;
}
