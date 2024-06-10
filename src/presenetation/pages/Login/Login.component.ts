import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { errors } from 'src/core/constant/errors';
import { Signin_usecaseService } from 'src/domain/usecases/auth/signin_usecase.service';
import { Signup_usecaseService } from 'src/domain/usecases/auth/signup_usecase.service';


@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm:FormGroup
  message:string|null


  constructor(
    private signIn_useCase$:Signin_usecaseService
  ){

  }

  ngOnInit() {
    this.signInForm= new FormGroup({
      email: new FormControl(null,[Validators.email,Validators.required]),
      password: new FormControl(null,[Validators.required])
    })
  }

  errorMessage(type:string,error:string):string{
    let message:string = errors[type][error]

    return message
  }

  onSubmit(){
    if(this.signInForm.valid){
      this.signIn_useCase$.execute(this.signInForm.value).then()
      .catch(error => this.message=error.error.message)
    }
  }

  onChange(){
    this.message=null;
  }

  

}
