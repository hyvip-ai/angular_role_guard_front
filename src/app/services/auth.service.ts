import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  register(data:any){
    return this.http.post('http://localhost:3000/Register',data,{
      headers:new HttpHeaders({
        "ACCESS-CONTROL-ALLOW-ORIGIN":"*",
        "content-type":'Application/json'
      })
    })
  }
  login(data:any){
    return this.http.post('http://localhost:3000/Login',data,{
      headers:new HttpHeaders({
        'ACCESS-CONTROL-ALLOW-ORIGIN':'*',
        'content-type':'Application/json'
      })
    })
  }
}
