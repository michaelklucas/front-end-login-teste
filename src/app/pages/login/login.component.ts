import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/Login.Model';
import { LoginService } from 'src/app/service/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;
  errorMessage!: string;

  constructor(private formBuilder: FormBuilder, private router: Router, public loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }

  submitLogin() {
    var dadosLogin = this.loginForm.getRawValue() as LoginModel;

    this.loginService.LoginUsuario(dadosLogin)
      .subscribe(
        token => {
          var UserToken = token
          localStorage.setItem('token', UserToken);
          this.router.navigate(["/painel"]);
        },
        error => {
          this.errorMessage = 'Login ou Senha Incorretos.';
        })

  }
}
