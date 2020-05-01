export = AuthToken;
declare class AuthToken {
    constructor(data: any);
    _token: any;
    _type: any;
    _expiresIn: any;
    _error: any;
    get token(): any;
    get type(): any;
    get expiresIn(): number;
    get expiresAt(): number;
    get error(): any;
    get forHeader(): string;
    get isExpired(): boolean;
    get asJSON(): {
        token: any;
        type: any;
        expiresIn: number;
        expiresAt: number;
        isExpired: boolean;
        error: any;
    };
}
