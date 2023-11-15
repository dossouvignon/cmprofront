import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CmproService } from '../cmpro.service';
import { SigninRequest } from '../SigninRequest';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  request: SigninRequest = 
    {
      email : '',
      password: ''
    };
  

  constructor(private cmproService : CmproService, private tokenService : TokenService, private router : Router) { }

  signin(request : SigninRequest) : void {
    this.request =  request;

    console.log(this.request);

   this.cmproService.signin(this.request).subscribe(jwtAuthenticationResponse => {

    //sauvegarde du token dans le local storage apres authentication
    this.tokenService.saveData("token", jwtAuthenticationResponse.token);
    this.router.navigate(['/contact']);
  });


  }



}
