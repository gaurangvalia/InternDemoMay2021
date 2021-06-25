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
import { TestLazyGuard } from './guard/test-lazy.guard';
import { TestComponent } from './test/test.component';
import { InternTestGuard } from './guard/intern-test.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeChild1Component } from './home/home-child1/home-child1.component';
import { HomeChild2Component } from './home/home-child2/home-child2.component';
import { ResorcesComponent } from './resorces/resorces.component';
import { ListComponent } from './resorces/list/list.component';
import { AddComponent } from './resorces/add/add.component';
import { EditComponent } from './resorces/edit/edit.component';
import { TestDataGuard } from './guard/test-data.guard';
import { ResorcesService } from './resorces/resorces.service';
import { ReactiveFormAddComponent } from './resorces/reactive-form-add/reactive-form-add.component';
import { XyzService } from './resorces/xyz.service';
import { AddStudnetComponent } from './resorces/add-studnet/add-studnet.component';
import { RxjsOparatorsComponent } from './rxjs-oparators/rxjs-oparators.component';
import { SwitchMapComponent } from './rxjs-oparators/switch-map/switch-map.component';
import { ConcatMapComponent } from './rxjs-oparators/concat-map/concat-map.component';
import { CombineLatestComponent } from './rxjs-oparators/combine-latest/combine-latest.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    PageNotFoundComponent,
    AppComponent,
    TestComponent,
    HomeChild1Component,
    HomeChild2Component,
    ResorcesComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    ReactiveFormAddComponent,
    AddStudnetComponent,
    RxjsOparatorsComponent,
    SwitchMapComponent,
    ConcatMapComponent,
    CombineLatestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    //--------------- for the Template Driven form
    FormsModule,
    //--------------- for the Reactive form
    ReactiveFormsModule
  ],
  providers: [
    AppService,
    TestGuard,
    TestChildGuard,
    TestLazyGuard,
    InternTestGuard,
    TestDataGuard,
    ResorcesService,
    XyzService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
