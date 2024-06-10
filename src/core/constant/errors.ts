export const errors:IErrorsKeys = {
    "name":{
        "required":"Name is required",
        "minlength":"Name required at least 3 characters",
        "maxlength":"Name maximum 16 number of characters "
    },
    "email" : {
        "required":"Email is required",
        "email":"Enter a valid email 'example@email.com'"
    },
    "password":{
        "required":"Password is Required",
        "pattern":"Password must be from 6 to 16 , with at least 1 number , and 1 characters"
    },
    "phone": {
        "required":"Phone number is required",
        "pattern" : "must be an Egyptian number"
    },
    "rePassword":{
        "required":"Re Password is required"
    }
}

interface IErrorsKeys {
    [key:string]:{[key:string]:string}
}