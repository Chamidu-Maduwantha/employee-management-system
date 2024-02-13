import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{

  employees: any[] | undefined

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001')
      .subscribe(data => {
        this.employees = data;
      });
  }

}
