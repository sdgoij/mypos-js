export = ApiRequest;
declare class ApiRequest {
    constructor(mypos: any, method: any, path: any, params?: any, data?: any, isGenerateToken?: boolean);
    _mypos: any;
    _method: any;
    _path: any;
    _params: any;
    _reqData: any;
    _isGenerateToken: boolean;
    get mypos(): any;
    get method(): any;
    get service(): {};
    get basePath(): string;
    get path(): any;
    get params(): any;
    get reqData(): any;
    get isGenerateToken(): boolean;
    get url(): string;
    get apiKey(): any;
    get tokenGenerationHeaders(): {
        'Content-Type': string;
        Authorization: string;
    };
    get defaultHeaders(): {
        Authorization: any;
        Accept: string;
        'API-Key': any;
        'Content-Type': string;
        'X-Request-ID': any;
    };
    get options(): {
        url: string;
        method: any;
        headers: {
            'Content-Type': string;
            Authorization: string;
        } | {
            Authorization: any;
            Accept: string;
            'API-Key': any;
            'Content-Type': string;
            'X-Request-ID': any;
        };
    };
    reqIsValid: (callback: any) => boolean;
    send: (callback: any) => void;
}
