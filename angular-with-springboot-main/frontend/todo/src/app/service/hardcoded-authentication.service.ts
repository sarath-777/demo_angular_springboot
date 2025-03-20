import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username:string,password:string){
    console.log(`before authentication ${this.isUserLoggedIn()}`)
    if(username==='user' && password ==='user'){
      
      sessionStorage.setItem('authenticaterUser',username);
      console.log('after authentication '+this.isUserLoggedIn())
    return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticaterUser')
    return !(user===null)
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }
}
