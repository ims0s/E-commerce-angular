import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-SignUp',
  templateUrl: './SignUp.component.html',
  styleUrls: ['./SignUp.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm:FormGroup


  constructor() { }

  ngOnInit() {

    this.signUpForm=new FormGroup({
      'name': new FormControl(null, [Validators.minLength(3),Validators.maxLength(16),Validators.required]),
      'email': new FormControl(null , [Validators.required, Validators.email]),
      'phone': new FormControl(null,[Validators.pattern(/^01[0125][0-9]{8}$/gm),Validators.required]),
      'password': new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*\d)[\s\S]{6,16}$/)]),
      're-password': new FormControl(null,[Validators.required]),
    }, {
      validators: this.passwordMatchValidator
    })

  }

  passwordMatchValidator( control : AbstractControl){
    return control.get("password")?.value=== control.get('re-password')?.value?null : {mismatch:true}
  }

  onSubmit(){
    console.log(this.signUpForm)
  }

  

}
