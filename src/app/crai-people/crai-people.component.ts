import { Component, OnInit } from '@angular/core';
import employeeData from '../../assets/employees.json';

@Component({
  selector: 'app-crai-people',
  templateUrl: './crai-people.component.html',
  styleUrls: ['./crai-people.component.scss']
})
export class CraiPeopleComponent implements OnInit {

  employees: any = employeeData;

  constructor() { }

  ngOnInit(): void {
  }

}
