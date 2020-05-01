export = DevicesApiRequest;
declare const DevicesApiRequest_base: typeof import("./api-request");
declare class DevicesApiRequest extends DevicesApiRequest_base {
    constructor(mypos: any, method: any, path: any, params?: any, data?: any, isGenerateToken?: boolean);
    get service(): {
        host: string;
        basePath: string;
    };
}
