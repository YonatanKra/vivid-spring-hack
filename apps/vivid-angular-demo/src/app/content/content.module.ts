import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ApplicationsComponent } from './applications/applications.component';
import { AnalyticsComponent } from './analytics/analytics.component';

import '@vonage/vwc-layout';
import '@vonage/vwc-card';

@NgModule({
  declarations: [
    ProfileComponent,
    ApplicationsComponent,
    AnalyticsComponent,
  ],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContentModule {}
