import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { UserService } from '../user.service';

interface UserDetails {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  public loginForm!: FormGroup

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router, private userService: UserService,) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['', Validators.required]
    })


  }
  login(loginForm: any) {
    this.http.get<any>("http://localhost:3000/userIds")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
        });
        this.userService.login(loginForm.email, loginForm.password);
        console.log(loginForm.email, loginForm.password)


        if (user) {
          // alert('Login Succesful');
          const sessionId = '12';

          localStorage.setItem('sessionId', sessionId);
          console.log('sessionId in login' + localStorage.getItem('sessionId'));
          if (localStorage.getItem('sessionId') != null) {

            this.router.navigate(['/attendance']);

          } else {
            this.router.navigate(['/login']);
          }
          // this.loginForm.reset()
          // this.router.navigate(["attendance"])
        } else {
          alert("Username or Password is incorrect")
        }
      }, err => {
        alert("Something went wrong")
      })
  }

  
}