import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MonthService } from '../shared/month.service';
// import { Month } from '../shared/month';
 
@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrl: './linechart.component.scss'
})
export class LinechartComponent implements OnInit {
  monthData: any;
  selectedMonth: string = '';
  month!: any[];
  constructor(private monthService: MonthService, private http: HttpClient) { }
  ngOnInit(): void {
    this.loadMonthData('January');
    this.monthService.getMonth().subscribe((data) => {
      this.month = data;
    });
  }
  loadMonthData(month?: string) {
    const selectedMonth = month || 'January';
    const filePath = `/assets/${selectedMonth.toLowerCase()}.json`;
    this.http.get(filePath).subscribe((data: any) => {
      const selectedMonthData = data.month.find((m: any) => m.name === selectedMonth);
      this.monthData = selectedMonthData;
    });
  }
    onMonthChange() {
    // Load data for the selected month when the dropdown value changes
    this.loadMonthData();
  }
}