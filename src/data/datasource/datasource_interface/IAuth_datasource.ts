import { signInFormModel, signInResponseModel, signUpFormModel, signUpResponseModel } from "../data_model/Auth_model";

export abstract class IAuthDataSource{

    abstract signUp(body:signUpFormModel):Promise<signUpResponseModel>;
    abstract signIn(body:signInFormModel):Promise<signInResponseModel>;
}