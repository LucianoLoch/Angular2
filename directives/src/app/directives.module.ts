import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DirectivesAppComponent } from './directives.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    DirectivesAppComponent,
    HighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [DirectivesAppComponent]
})
export class AppModule { }
