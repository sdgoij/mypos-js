export = TransactionsApiRequest;
declare const TransactionsApiRequest_base: typeof import("./api-request");
declare class TransactionsApiRequest extends TransactionsApiRequest_base {
    constructor(mypos: any, method: any, path: any, params?: any, data?: any, isGenerateToken?: boolean);
    get service(): {
        host: string;
        basePath: string;
    };
}
