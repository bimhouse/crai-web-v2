import { Component, OnInit } from '@angular/core';
import { CraiWorkService } from '../services/crai-work.service';
import { Portfolio, Media } from './Portfolio';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmbedVideoService } from 'ngx-embed-video';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-crai-work-detail',
  templateUrl: './crai-work-detail.component.html',
  styleUrls: ['./crai-work-detail.component.scss']
})
export class CraiWorkDetailComponent implements OnInit {

  id: any;
  portfolio: Portfolio;
  media: Media[];
  videos: string[];
  iframe_html: any;

  constructor(
    private workService: CraiWorkService,
    private route: ActivatedRoute,
    private embedService: EmbedVideoService,
    private sanitizer: DomSanitizer ) { }

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
    this.portfolio = result;
    });
  }

  getMediaForProject(id) {
  this.workService.getMediaForProject(this.id).subscribe(result => {
    if(result != null){
      this.media = result;
    } else {
      this.media = null;
    }

    if(this.media != null) {
      if (!this.videos) {
        let _videos = this.media.map(item => this.embedService.embed(item.fields.link));
        this.videos = _videos;
        console.log(this.videos);
      };
    }
  });

  }
}
