export = WebHooksApiRequest;
declare const WebHooksApiRequest_base: typeof import("./api-request");
declare class WebHooksApiRequest extends WebHooksApiRequest_base {
    constructor(mypos: any, method: any, path: any, params?: any, data?: any, isGenerateToken?: boolean);
    get service(): {
        host: string;
        basePath: string;
    };
}
