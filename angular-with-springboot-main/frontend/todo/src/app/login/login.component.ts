import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  username:string=''
  password=''
  errorMessage='Invalid Credentials'
  invalidLogin=false


  constructor(private router:Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService ){
  
  }

  ngOnInit(): void {
    
  }
  login(){
    
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['welcome',this.username])
      this.invalidLogin=false
      console.log('user logged in')
    }
    else{
      this.invalidLogin=true
      console.log('log in failed')
    }
    console.log(this.username)

  }

}
