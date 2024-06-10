export interface signUpFormModel{
    name:string,
    email:string,
    phone:number,
    password:string,
}

export interface signInFormModel{
    email:string,
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

export interface signInResponseModel extends signUpResponseModel{}