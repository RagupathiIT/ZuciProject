// import { Component } from '@angular/core';
// import { Input } from '@angular/core';
// import { Router } from '@angular/router';
// import { RestApiService } from '../shared/rest-api.service';
// import { FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-register-page',
//   templateUrl: './register-page.component.html',
//   styleUrl: './register-page.component.scss'
// })
// export class RegisterPageComponent {
//   @Input() userDetails = {email:'',password:''};
//   registrationForm: FormGroup | undefined;
//   constructor(public restApi: RestApiService,public router: Router,private formBuilder: FormBuilder){}
//   ngOnInit(){}
//   addUser(dataUser: any){
      
//     console.log("vhjkl")
//     this.restApi.createUser(this.userDetails).subscribe((data:{}) => {
//   });
// }

// }


// // import { Component, OnInit } from '@angular/core';
// // import { Input } from '@angular/core';
// // import { Router } from '@angular/router';
// // import { RestApiService } from '../shared/rest-api.service';
// // import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// // @Component({
// //   selector: 'app-register-page',
// //   templateUrl: './register-page.component.html',
// //   styleUrl: './register-page.component.scss'
// // })
// // export class RegisterPageComponent {
// //   @Input() userDetails = {email:'',password:''};
// //   registrationForm: FormGroup | undefined;
// //   constructor(public restApi: RestApiService,public router: Router,private formBuilder: FormBuilder ){}
// //   ngOnInit(): void(
// //     this: any[],registrationForm = this.formBuilder.group({
// //       email: ['', [Validators.required, Validators.email]],
// //       password: ['', [Validators.required, Validators.minLength(8)]],
// //       cpassword: ['', [Validators.required]]
// //     });
// //     this.registrationForm.get('cpassword').setValidators(this.confirmPasswordValidator.bind(this));
    
// //     // Listen for value changes and update validity of cpassword
// //     this.registrationForm.get('password').valueChanges.subscribe(() => {
// //       this.registrationForm.get('cpassword').updateValueAndValidity();
// //     });
    
// //   ){}
// //   confirmPasswordValidator(control) {
// //     const password = this.registrationForm.get('password').value;
// //     const confirmPassword = control.value;
// //     return password === confirmPassword ? null : { 'passwordMismatch': true };
// //   }
// //   addUser(dataUser: any[]){
      
// //     console.log("vhjkl")
// //     this.restApi.createUser(this.userDetails).subscribe((data:{}) => {
// //   });
// // }

// // }
// import { Component } from '@angular/core';
// import { Input } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importing necessary validators
// import { RestApiService } from '../shared/rest-api.service';

// @Component({
//   selector: 'app-register-page',
//   templateUrl: './register-page.component.html',
//   styleUrls: ['./register-page.component.scss'] // Fixed the typo here
// })
// export class RegisterPageComponent {
//   userDetails = { email: '', password: '' };
//   registrationForm: FormGroup | null = null;
//  // Define a FormGroup to hold the form controls
//   constructor(
//     private formBuilder: FormBuilder,
//     public restApi: RestApiService,
//     public router: Router
//   ){}

//   ngOnInit() {
//     this.registrationForm = this.formBuilder.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(8)]],
//       cpassword: ['', [Validators.required]]
//     }, {
//       validators: this.passwordMatchValidator // Custom validator for matching passwords
//     });
//   }

//   passwordMatchValidator(group: FormGroup) {
//     const password = group.get('password')!.value;
//     const confirmPassword = group.get('cpassword')!.value;

//     return password === confirmPassword ? null : { passwordMismatch: true };
//   }

//   addUser(dataUser: any) {
//     const userDetails = this.userDetails;
//     if (this.registrationForm && this.registrationForm.valid) {
//       console.log('Form submitted successfully!');
//     } else {
//       console.log('Form contains validation errors!');
//     }
//   }
// }










import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestApiService } from '../shared/rest-api.service';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  @Input() userDetails = { email: '', password: '' };
  registrationForm: FormGroup = new FormGroup({});

 submitted:boolean=false;
  constructor(
    private formBuilder: FormBuilder,
    public restApi: RestApiService,
    public router: Router
  ) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      cpassword: ['', [Validators.required]]
    }, 
    
    );
  }

  passwordMatchValidator(group: FormGroup) {
    console.log('group', group);
    const passwords = group.get('password')!.value; 
    const confirmPassword = group.get('cpassword')!.value;
    return passwords === confirmPassword ? null : { passwordMismatch: false };
}



public handleError=(controlName:string,errorName:string)=>{
  return this.registrationForm.controls[controlName].hasError(errorName);
};
  addUser() {
   this.submitted=true; 
    if (this.registrationForm && this.registrationForm.valid) {
      console.log('Form submitted successfully!');
      this.restApi.createUser(this.userDetails).subscribe((data: {}) => {
      });
    } else {
      console.log('Form contains validation errors!');
      return
    }
  }

}

