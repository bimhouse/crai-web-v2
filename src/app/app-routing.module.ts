import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//CRAi Components
import { CraiNavComponent } from './crai-nav/crai-nav.component';
import { CraiPeopleComponent } from './crai-people/crai-people.component';
import { CraiContactComponent } from './crai-contact/crai-contact.component';
import { CraiHomeComponent } from './crai-home/crai-home.component';
import { CraiWorkComponent } from './crai-work/crai-work.component';

const routes: Routes = [
  { path: '', component: CraiHomeComponent, pathMatch: 'full' },
  { path: 'work', component: CraiWorkComponent },
//  { path: 'work/:id', component: CraiWorkDetailComponent },
  { path: 'people', component: CraiPeopleComponent },
  { path: 'contact', component: CraiContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
