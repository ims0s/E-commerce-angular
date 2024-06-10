import { signUpFormModel, signUpResponseModel } from "src/data/datasource/data_model/Auth_model";

export abstract class IAuth_Repo {
    abstract signUp(body:signUpFormModel):Promise<signUpResponseModel>
}