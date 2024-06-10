export abstract class IAuth_Service {
    abstract user:any;
    abstract token:string|null;

    abstract setAuthInfo(user:any,token:string):void;
    abstract deleteAuthInfo():void;

}