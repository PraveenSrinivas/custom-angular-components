import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoCompleteDropdownComponent } from './components/auto-complete-dropdown/auto-complete-dropdown.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel/expansion-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteDropdownComponent,
    ExpansionPanelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
