// import { Component,OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-attendance',
//   templateUrl: './attendance.component.html',
//   styleUrl: './attendance.component.scss'
// })
// export class AttendanceComponent implements OnInit{
//   dateCalculatorForm: FormGroup;
//   result: string = '';
//   isCheckIn: boolean = true;
//   timerRunning: boolean = false;
//   timerInterval: any;
//   elapsedTime: number = 0;
//   checkedOutTime: number = 0;
 
//   constructor(private fb: FormBuilder) {
//     console.log('sessionId in dashboard'+localStorage.getItem('sessionId'));
//     this.dateCalculatorForm = this.fb.group({
//       startDate: [''],
//       endDate: ['']
//     });
//   }
 
//   ngOnInit() {}
 
//   toggleCheckInOut() {
//     if (this.isCheckIn) {
//       console.log('Check In!');
//       this.startTimer();
//     } else {
//       console.log('Check Out!');
//       this.checkedOutTime = this.elapsedTime;
//       this.pauseTimer();
//     }
 
//     this.isCheckIn = !this.isCheckIn;
//     this.result = '';
//   }
 
//   startTimer() {
//     if (!this.timerRunning) {
//       this.timerRunning = true;
//       this.timerInterval = setInterval(() => {
//         this.elapsedTime++;
//         console.log('Timer is running...', this.elapsedTime);
//       }, 1000);
//     }
//   }
 
//   pauseTimer() {
//     if (this.timerRunning) {
//       clearInterval(this.timerInterval);
//       this.timerRunning = false;
//     }
//   }
 
//   resumeTimer() {
//     if (!this.timerRunning) {
//       this.timerRunning = true;
//       this.timerInterval = setInterval(() => {
//         this.elapsedTime++;
//         console.log('Timer is running...', this.elapsedTime);
//       }, 1000);
//     }
//   }
 
//   formatTime(seconds: number): string {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
//     const remainingSeconds = seconds % 60;
//     return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(remainingSeconds)}`;
//   }
 
//   pad(num: number): string {
//     return num < 10 ? `0${num}` : num.toString();
//   }
 
//   calculateDateDifference() {
//   }

  
// }







import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AttendenceDataService } from '../model/attendence-data.service';

import { Attendance } from '../model/attendance.model';
import { formatDate } from '@angular/common';
 
 
 
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit{
  dateCalculatorForm: FormGroup;
  result: string = '';
  isCheckIn: boolean = true;
  timerRunning: boolean = false;
  timerInterval: any;
  elapsedTime: number = 0;
  checkedOutTime: number = 0;
  dataStored: boolean = false;
 
  constructor(private fb: FormBuilder, private attendanceService: AttendenceDataService) {
    this.dateCalculatorForm = this.fb.group({
      startDate: [''],
      endDate: ['']
    });
    this.dateCalculatorForm = this.fb.group({
      startDate: [this.getCurrentDate()]
    });
  }
 
  ngOnInit() {}
 
  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = this.pad(today.getMonth() + 1);
    const day = this.pad(today.getDate());
    return `${year}-${month}-${day}`;
  }
 
  pad(num: number): string {
    return num < 10 ? `0${num}` : num.toString();
  }
 
  // toggleCheckInOut() {
  //   if (this.isCheckIn) {
  //     console.log('Check In!');
  //     this.startTimer();
  //   } else {
  //     console.log('Check Out!');
  //     this.checkedOutTime = this.elapsedTime;
  //     this.pauseTimer();
  //   }
 
  //   this.isCheckIn = !this.isCheckIn;
  //   this.result = '';
  //   this.toggleCheckInOut1();
  // }
 
  startTimer() {
    if (!this.timerRunning) {
      this.timerRunning = true;
      this.timerInterval = setInterval(() => {
        this.elapsedTime++;
        console.log('Timer is running...', this.elapsedTime);
      }, 1000);
    }
  }
 
  pauseTimer() {
    if (this.timerRunning) {
      clearInterval(this.timerInterval);
      this.timerRunning = false;
    }
  }
 
  resumeTimer() {
    if (!this.timerRunning) {
      this.timerRunning = true;
      this.timerInterval = setInterval(() => {
        this.elapsedTime++;
        console.log('Timer is running...', this.elapsedTime);
      }, 1000);
    }
  }
 
  formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(remainingSeconds)}`;
  }
 
  // pad(num: number): string {
  //   return num < 10 ? `0${num}` : num.toString();
  // }
 
  calculateDateDifference() {
  }
 
  // toggleCheckInOut1() {
  //   const currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  //   const checkInTime = formatDate(new Date(), 'hh:mm a', 'en-US');
  //   // Simulate check-out time and total check-in hours for the example
  //   const checkOutTime = formatDate(
  //     new Date(new Date().setHours(new Date().getHours() + 8)),
  //     'hh:mm a',
  //     'en-US'
  //   );
  //   const totalCheckInHours = '08:00';
 
  //   const attendanceData: Attendance = {
  //     date: currentDate,
  //     checkInTime: checkInTime,
  //     checkOutTime: checkOutTime,
  //     totalCheckInHours: totalCheckInHours,
  //   };
 
  //   this.attendanceService.addAttendance(attendanceData).subscribe(
  //     (response) => {
  //       console.log('Attendance data added successfully', response);
  //     },
  //     (error) => {
  //       console.error('Error adding attendance data', error);
  //     }
  //   );
  // }
  // toggleCheckInOut1() {
  //   const currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  //   const checkInTime = formatDate(new Date(), 'hh:mm a', 'en-US');
 
  //   let checkOutTime;
  //   let totalCheckInHours;
 
  //   if (!this.isCheckIn) {
  //     checkOutTime = formatDate(
  //       new Date(new Date().setHours(new Date().getHours())),
  //       'hh:mm a',
  //       'en-US'
  //     );
 
  //     const timeDiffInSeconds = this.elapsedTime;
  //     totalCheckInHours = this.formatTime(timeDiffInSeconds);
  //   }
 
  //   const attendanceData: Attendance = {
  //     date: currentDate,
  //     checkInTime: checkInTime,
  //     checkOutTime: checkOutTime || '',
  //     totalCheckInHours: totalCheckInHours || '',
  //   };
 
  //   this.attendanceService.addAttendance(attendanceData).subscribe(
  //     (response) => {
  //       console.log('Attendance data added successfully', response);
  //     },
  //     (error) => {
  //       console.error('Error adding attendance data', error);
  //     }
  //   );
  // }
 
  toggleCheckInOut() {
    const currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
    const currentTime = formatDate(new Date(), 'hh:mm a', 'en-US');
 
    if (this.isCheckIn) {
      console.log('Check In!');
      this.startTimer();
      // No need to assign the result to any variable here
    } else {
      console.log('Check Out!');
      this.checkedOutTime = this.elapsedTime;
      this.pauseTimer();
      this.result = `Checked out at ${currentTime}`;
    }
 
    this.isCheckIn = !this.isCheckIn;
    this.toggleCheckInOut1(currentDate, currentTime);
  }
 
 
 
  toggleCheckInOut1(date: string, checkInTime: string) {
    let checkOutTime = '';
    let totalCheckInHours = '';
 
    if (!this.isCheckIn) {
      checkOutTime = formatDate(new Date(), 'hh:mm a', 'en-US');
      console.log(checkOutTime);
 
      const timeDiffInSeconds = this.elapsedTime;
      totalCheckInHours = this.formatTime(timeDiffInSeconds);
    }
 
    const attendanceData: Attendance = {
      date: date,
      checkInTime: checkInTime,
      checkOutTime: checkOutTime,
      totalCheckInHours: totalCheckInHours,
    };
 
    this.attendanceService.addAttendance(attendanceData).subscribe(
      (response) => {
        console.log('Attendance data added successfully', response);
      },
      (error) => {
        console.error('Error adding attendance data', error);
      }
    );
  }
 
 
  // dateCalculatorForm: FormGroup;
  // result: string = '';
  // isCheckIn: boolean = true;
  // timerRunning: boolean = false;
  // timerInterval: any;
  // checkInTime: Date | null = null; // Variable to store check-in time
  // elapsedTime: number = 0;
  // checkedOutTime: number = 0;
  // dataStored: boolean = false;
 
  // constructor(private fb: FormBuilder, private attendanceService: AttendenceDataService) {
  //   this.dateCalculatorForm = this.fb.group({
  //     startDate: [this.getCurrentDate()]
  //   });
  // }
 
  // ngOnInit() {}
 
  // getCurrentDate(): string {
  //   const today = new Date();
  //   const year = today.getFullYear();
  //   const month = this.pad(today.getMonth() + 1);
  //   const day = this.pad(today.getDate());
  //   return `${year}-${month}-${day}`;
  // }
  // pad(arg0: number) {
  //   throw new Error('Method not implemented.');
  // }
 
  // startTimer() {
  //   if (!this.timerRunning) {
  //     this.timerRunning = true;
  //     this.checkInTime = new Date(); // Record check-in time
  //     this.timerInterval = setInterval(() => {
  //       this.elapsedTime++;
  //       console.log('Timer is running...', this.elapsedTime);
  //     }, 1000);
  //   }
  // }
 
  // pauseTimer() {
  //   if (this.timerRunning) {
  //     clearInterval(this.timerInterval);
  //     this.timerRunning = false;
  //     return this.elapsedTime; // Return the total elapsed time
  //   }
  //   return 0; // Return 0 if the timer is not running
  // }
 
  // toggleCheckInOut() {
  //   const currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  //   const currentTime = formatDate(new Date(), 'hh:mm a', 'en-US');
 
  //   if (this.isCheckIn) {
  //     console.log('Check In!');
  //     this.startTimer();
  //     this.result = '';
  //   } else {
  //     console.log('Check Out!');
  //     this.checkedOutTime = this.pauseTimer();
  //     this.result = `Checked out at ${currentTime}`;
  //   }
 
  //   this.isCheckIn = !this.isCheckIn;
  //   this.toggleCheckInOut1(currentDate, currentTime);
  // }
 
  // toggleCheckInOut1(date: string, checkInTime: string) {
  //   let checkOutTime = '';
  //   let totalCheckInHours = '';
 
  //   if (!this.isCheckIn) {
  //     checkOutTime = formatDate(new Date(), 'hh:mm a', 'en-US');
 
  //     const timeDiffInSeconds = this.checkedOutTime;
  //     totalCheckInHours = this.formatTime(timeDiffInSeconds);
  //   }
 
  //   const attendanceData: Attendance = {
  //     date: date,
  //     checkInTime: this.checkInTime ? formatDate(this.checkInTime, 'hh:mm a', 'en-US') : '',
  //     checkOutTime: checkOutTime,
  //     totalCheckInHours: totalCheckInHours,
  //   };
 
  //   if (!this.dataStored) {
  //     this.attendanceService.addAttendance(attendanceData).subscribe(
  //       (response: any) => {
  //         console.log('Attendance data added successfully', response);
  //         this.dataStored = true;
  //       },
  //       (error: any) => {
  //         console.error('Error adding attendance data', error);
  //       }
  //     );
  //   } else {
  //     console.log('Data already stored for this session');
  //   }
  // }
  // formatTime(timeDiffInSeconds: number): string {
  //   throw new Error('Method not implemented.');
  // }
 
}