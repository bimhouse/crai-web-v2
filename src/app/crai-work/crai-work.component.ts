import { Component, OnInit } from '@angular/core';
import { CraiWorkService } from '../services/crai-work.service';
import { Portfolio } from './Portfolio';

@Component({
  selector: 'app-crai-work',
  templateUrl: './crai-work.component.html',
  styleUrls: ['./crai-work.component.scss']
})
export class CraiWorkComponent implements OnInit {

  portfolios: Portfolio[];
  projectTypes: string[];
  filterForProjectType: string = '';

  constructor(private workService: CraiWorkService) { }

  ngOnInit(): void {
    this.getAll();
  }

  filterRecords(filter: string) {
    this.filterForProjectType = filter;
  }

  getAll() {
  this.workService.getData().subscribe(result => {
    console.log(result);
    this.portfolios = result;

    if (!this.projectTypes) {
      let distinctProjectTypes = this.portfolios.filter(
        (project, i, arr) => arr.findIndex(t => t.fields.projectType === project.fields.projectType) === i
      ).map(item => item.fields.projectType).sort();
      console.log(distinctProjectTypes);
      this.projectTypes = distinctProjectTypes;
      }
    });
  }

}
