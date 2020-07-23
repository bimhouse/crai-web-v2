import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import{ Router, NavigationEnd } from '@angular/router';

import { ThemeService } from './core/services/theme.service';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crai-web-v2';
  isDarkTheme: Observable<boolean>;

  constructor(public router: Router, private themeService: ThemeService) {
    this.router.events.subscribe(event => {
       if(event instanceof NavigationEnd){
          gtag('config', 'UA-169724085-1',
                 {
                   'page_path': event.urlAfterRedirects
                 }
                );
        }
     }
  )}

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }
}
