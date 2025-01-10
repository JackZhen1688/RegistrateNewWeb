import { Component } from '@angular/core';
import { Router } from "@angular/router"
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RestfulService } from './.././../services/restful.service';
import { DataShareService } from './../../services/data-share.service';
import { MethodService } from './../../services/method.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';     
import { MatFormFieldModule } from '@angular/material/form-field';     
import { MatInputModule } from '@angular/material/input';              
import { MatTableModule } from '@angular/material/table' 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatTableModule],

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({});

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private dataShareService: DataShareService,
              private restService: RestfulService,
              private methodsService: MethodService) { }

  ngOnInit() {

    this.constructLoginForm();
  }

  constructLoginForm() {
    this.loginForm = this.formBuilder.group({
      userId: this.formBuilder.control('', [Validators.required]),
      password: this.formBuilder.control('', [Validators.required]),
      //password1: this.formBuilder.control(''),
    });
  }

  //get passwordInput() { return this.loginForm.get('password'); }  
  get userId() { 
    return this.loginForm.get('userId'); 
  }  

  get password() { 
    return this.loginForm.get('password'); 
  }  

  getPersonByUidandPwd(uid: any, pwd: any) {
    this.restService.getPersonByUidandPwd(uid, pwd)
    .subscribe({
      next: value => {
        //console.log("data=="+JSON.stringify(value));
        if (value.ssn === null || value.ssn ==="")
            this.methodsService.openMegsDialog("500px", "Login Failure!")
        else {
            this.dataShareService.loginFlag.next('true')
            this.router.navigate(['personList']);
        }
      },
      error: error => console.error('Error:', error),
      complete: () => console.log('Complete')
    });     
  }

  /*
  getPersonByUidandPwd(uid: any, pwd: any) {
   
    this.dataShareService.isLogin.next(true);
    this.dataShareService.loginFlag.next('true')
  }*/

  onSubmit() {
    console.log("Form Value: "+JSON.stringify(this.loginForm.value));
  
    this.getPersonByUidandPwd(this.userId!.value, this.password!.value);

  } 
}
