import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegistrationForm = new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.email,Validators.required]),
    password:new FormControl('',[Validators.minLength(4),Validators.required]),
    role:new FormControl('',Validators.required)
  }) 
  constructor(private service:AuthService,private router:Router){}

  ngOnInit(): void {
  }
  temp:any = null
  submitform(){
    console.log(this.RegistrationForm.value)
    this.service.register(this.RegistrationForm.value).subscribe(res=>{
      console.log(res)
      this.temp = res 
      if(this.temp.messege == 'Registered'){
        this.router.navigate(['/Login'])
      }
    }) 
  }

}
