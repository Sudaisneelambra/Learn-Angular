import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { HighlightDirective } from './highlight.Directive';
import { pipe } from './pipes.pipe';
import { CustomModule } from './modules/custommodule/custommodule.module';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    HighlightDirective,
    pipe
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
