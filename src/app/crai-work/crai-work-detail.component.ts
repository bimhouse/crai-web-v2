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
  videoMedia: Media[];
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
    if(result != null && result.length > 0){
      console.log(result);
      this.media = result;
      this.videoMedia = result.filter(x => x.fields.mediaType == "VimeoVideo");
      console.log(this.videoMedia);

      if (this.videoMedia.length > 0) {
        let _videos = this.videoMedia.map(item => this.embedService.embed(item.fields.link));
        console.log(_videos);
        this.videos = _videos;
      } else { console.log("CONDITION NO VIDEOS");}
    } else { console.log("CONDITION NO MEDIA");};
  });
  }
}
