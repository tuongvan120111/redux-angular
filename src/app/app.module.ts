import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';

@NgModule({
  declarations: [
    AppComponent,
     ToDoComponent,
    DashboardComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
