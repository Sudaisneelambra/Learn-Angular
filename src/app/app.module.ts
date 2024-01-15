import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { HighlightDirective } from './customdirective/highlight.Directive';
import { pipe } from './pipes.pipe';
import { CustomModule } from './modules/custommodule/custommodule.module';
import { HostbindingDirective } from './customdirective/hostbinding.directive';
import { SampleDirective } from './customdirective/sample.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    HighlightDirective,
    pipe,
    HostbindingDirective,
    SampleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
