import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { TestGuard } from './guard/test.guard';
import { TestChildGuard } from './guard/test-child.guard';
import { EmployeeModule } from './employee/employee.module';
import { TestLazyGuard } from './guard/test-lazy.guard';
import { TestComponent } from './test/test.component';
import { InternTestGuard } from './guard/intern-test.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeChild1Component } from './home/home-child1/home-child1.component';
import { HomeChild2Component } from './home/home-child2/home-child2.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    PageNotFoundComponent,
    AppComponent,
    TestComponent,
    HomeChild1Component,
    HomeChild2Component
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    //--------------- for the Template Driven form
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AppService,
    TestGuard,
    TestChildGuard,
    TestLazyGuard,
    InternTestGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
