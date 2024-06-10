export interface signUpFormModel{
    name:string,
    email:string,
    phone:number,
    password:string,
}

export interface signUpResponseModel{
    message:string,
    token:string,
    user:UserModel
}

export interface UserModel{
    email:string,
    name:string,
    role:string,
}