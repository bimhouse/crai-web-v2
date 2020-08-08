import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../core/services/theme.service';
import { Observable } from 'rxjs';
import { CustomIconService } from '../services/custom-icon.service';


@Component({
  selector: 'app-crai-nav',
  templateUrl: './crai-nav.component.html',
  styleUrls: ['./crai-nav.component.scss']
})

export class CraiNavComponent implements OnInit {
  showFiller = false;
  isDarkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService,
  private customIconService: CustomIconService) {
    this.customIconService.init();
  }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
