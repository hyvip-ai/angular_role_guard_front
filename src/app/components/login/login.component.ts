import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:AuthService,private router:Router) { }
  loginForm = new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.minLength(4)])
  })
  ngOnInit(): void {
  }
  temp:any =null
  submitform(){
    console.log(this.loginForm.value)
    this.service.login(this.loginForm.value).subscribe(res=>{
      console.log(res) 
      this.temp = res
      localStorage.setItem('Role',this.temp.user.role)
      localStorage.setItem('Token',this.temp.token)
      console.log(localStorage.getItem('Role'))
      console.log(localStorage.getItem('Token'))
      this.router.navigate([`/${this.temp.user.role}`])
    },err=>alert('error occureed'))
  }

}
