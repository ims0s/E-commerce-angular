import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { errors } from 'src/core/constant/errors';
import { Auth_dataSource } from 'src/data/datasource/remote_datasource_impl/Auth_datasource_imp';
import { Signup_usecaseService } from 'src/domain/usecases/auth/signup_usecase.service';

@Component({
  selector: 'app-SignUp',
  templateUrl: './SignUp.component.html',
  styleUrls: ['./SignUp.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm:FormGroup
  message:string|null
  constructor(private signup_useCase$ : Signup_usecaseService) { }

  ngOnInit() {

    this.signUpForm=new FormGroup({
      'name': new FormControl(null, [Validators.minLength(3),Validators.maxLength(16),Validators.required]),
      'email': new FormControl(null , [Validators.required, Validators.email]),
      'phone': new FormControl(null,[Validators.pattern(/^01[0125][0-9]{8}$/gm),Validators.required]),
      'password': new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*\d)[\s\S]{6,16}$/)]),
      'rePassword': new FormControl(null,[Validators.required]),
    }, {
      validators: this.passwordMatchValidator
    })

  }

  passwordMatchValidator( control : AbstractControl){
    return control.get("password")?.value=== control.get('rePassword')?.value?null : {mismatch:true}
  }

  onSubmit(){
    if(this.signUpForm.valid){
      this.signup_useCase$.execute(this.signUpForm.value).then().catch(error => this.message=error.error.message)
    }
    
    

  }

  errorMessage(type:string,error:string):string{
    let message:string = errors[type][error]
    return message
  }
  

}
