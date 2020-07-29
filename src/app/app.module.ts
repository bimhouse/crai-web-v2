import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule} from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';
import { CraiWorkService } from './services/crai-work.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//CRAi Components
import { CraiNavComponent } from './crai-nav/crai-nav.component';
import { CraiPeopleComponent } from './crai-people/crai-people.component';
import { CraiContactComponent } from './crai-contact/crai-contact.component';
import { CraiHomeComponent } from './crai-home/crai-home.component';
import { CraiWorkComponent } from './crai-work/crai-work.component';
import { CraiFooterComponent } from './crai-footer/crai-footer.component';
import { ProjectTypeFilterPipe } from './crai-work/crai-work.pipe';
import { CraiWorkDetailComponent } from './crai-work/crai-work-detail.component';
import { CraiLogoComponent } from './crai-logo/crai-logo.component';
import { CraiEmailsigComponent } from './crai-emailsig/crai-emailsig.component';

@NgModule({
  declarations: [
    AppComponent,
    CraiNavComponent,
    CraiPeopleComponent,
    CraiContactComponent,
    CraiHomeComponent,
    CraiWorkComponent,
    CraiFooterComponent,
    ProjectTypeFilterPipe,
    CraiWorkDetailComponent,
    CraiLogoComponent,
    CraiEmailsigComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    CoreModule,
    ReactiveFormsModule
  ],
  providers: [CraiWorkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
