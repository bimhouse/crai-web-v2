import { Component, OnInit } from '@angular/core';
import { CraiWorkService } from '../services/crai-work.service';
import { Portfolio, Media } from './Portfolio';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-crai-work-detail',
  templateUrl: './crai-work-detail.component.html',
  styleUrls: ['./crai-work-detail.component.scss']
})
export class CraiWorkDetailComponent implements OnInit {

  id: any;
  item: Portfolio;
  media: Media[];
  vimeos: any;
  projectRole: any;

  constructor(
    private workService: CraiWorkService,
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.id = this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      this.getDetail(this.id);
      this.getMediaForProject(this.id);
    });
  }

  getDetail(id) {
  this.workService.getDetail(this.id).subscribe(result => {
    console.log(result);
    this.item = result;
    });
  }

  getMediaForProject(id) {
  this.workService.getMediaForProject(this.id).subscribe(result => {
    console.log(result);
    this.media = result;
    });
  }

  getProjectRole() {
    return this.id.fields.projectRole;
    console.log('test');
  }
}
