// import { Component } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { OnInit } from '@angular/core';
// import { Validators } from '@angular/forms';


// @Component({
//   selector: 'app-apply-leave',
//   templateUrl: './apply-leave.component.html',
//   styleUrl: './apply-leave.component.scss'
// })
// export class ApplyLeaveComponent implements OnInit{
//   FormData: FormGroup | undefined;
//   constructor(private builder: FormBuilder) { }
//   ngOnInit() {
//     this.FormData = this.builder.group({
//     employeeId: new FormControl('', [Validators.required]),
//     leavetype: new FormControl('', [Validators.required]),
//     date: new FormControl('', [Validators.required]),
//     email:new FormControl('',[Validators.required, Validators.email]),
//     reason:new FormControl('',[Validators.required])
//     })
//     }

// }





import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrl: './apply-leave.component.scss'
})
export class ApplyLeaveComponent {
  private apiUrl = 'http://localhost:3002';
 
  constructor(private http: HttpClient) {}
 
  onSubmit(formData: any) {
    this.http.post(`${this.apiUrl}/submit-leave`, formData).subscribe(
      (response) => {
        console.log('Form submitted successfully', response);
      },
      (error) => {
        console.error('Error submitting form', error);
      }
    );
  }
 
}
 