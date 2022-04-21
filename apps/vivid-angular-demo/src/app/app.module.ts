import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

import '@vonage/vwc-button';
import '@vonage/vwc-side-drawer';
import '@vonage/vwc-text';
import '@vonage/vwc-layout';
import '@vonage/vwc-list';
import '@vonage/vwc-list/vwc-list-item';

import { AppRoutingModule } from './app-routing.module';
import { ContentModule } from './content/content.module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule, ContentModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
