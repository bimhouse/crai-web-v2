import { Injectable } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class CustomIconService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) { }

  init () {
    this.matIconRegistry.addSvgIcon(
      "crai_logo_dark",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/CRAi_Logo_Square_Dark.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "github_brands",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/github_brands.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "instagram_brands",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/instagram_brands.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "linkedin_brands",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/linkedin_brands.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "twitter_brands",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/twitter_brands.svg")
    );
  }
}
