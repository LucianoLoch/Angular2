import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import { ReactiveFormsModule,  } from '@angular/forms'; 
//import { ReactiveFormDirectives } from '@angular/forms';





import { AppComponent }   from './app.component';
import { DataDrivenComponent } from "./data-driven/data-driven.component";
import { TemplateDrivenComponent } from "./template-driven/template-driven.component";


@NgModule({
    declarations: [AppComponent, DataDrivenComponent, TemplateDrivenComponent],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {}