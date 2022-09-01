import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';
import { MyButtonDirective } from './directives/my-button.directive';
import { MyHighlightDirective } from './directives/my-highlight.directive';
import { TestService } from './services/test.service';

@NgModule({
  declarations: [
    AppComponent,
    MyButtonDirective,
    MyHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
