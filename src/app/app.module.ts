import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule} from '@angular/flex-layout';

import { CoreModule } from './core/core.module';

//CRAi Components
import { CraiNavComponent } from './crai-nav/crai-nav.component';
import { CraiPeopleComponent } from './crai-people/crai-people.component';
import { CraiContactComponent } from './crai-contact/crai-contact.component';
import { CraiHomeComponent } from './crai-home/crai-home.component';
import { CraiWorkComponent } from './crai-work/crai-work.component';
import { CraiFooterComponent } from './crai-footer/crai-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CraiNavComponent,
    CraiPeopleComponent,
    CraiContactComponent,
    CraiHomeComponent,
    CraiWorkComponent,
    CraiFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
