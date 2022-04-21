import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ApplicationsComponent} from "./content/applications/applications.component";
import {ProfileComponent} from "./content/profile/profile.component";
import {AnalyticsComponent} from "./content/analytics/analytics.component";

const routes: Routes = [
  { path: 'applications', component: ApplicationsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: '', component: ApplicationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
