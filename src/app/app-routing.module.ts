import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestGuard } from './guard/test.guard';
import { TestChildGuard } from './guard/test-child.guard';
import { TestLazyGuard } from './guard/test-lazy.guard';
import { TestComponent } from './test/test.component';
import { InternTestGuard } from './guard/intern-test.guard';
import { ResorcesComponent } from './resorces/resorces.component';
import { ListComponent } from './resorces/list/list.component';
import { AddComponent } from './resorces/add/add.component';
import { EditComponent } from './resorces/edit/edit.component';
import { ReactiveFormAddComponent } from './resorces/reactive-form-add/reactive-form-add.component';
import { AddStudnetComponent } from './resorces/add-studnet/add-studnet.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    // ------------------ canActivate (check component)
    canActivate:[TestGuard]
    // canActivate: [InternTestGuard]
  },
  {
    path: 'resources',
    // ------------------ canActivate (check all the child component)
    canActivateChild: [TestChildGuard],
    children: [
      {
        path: '',
        component: ResorcesComponent
      },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'add',
        component: AddComponent,
      },
      {
        path: 'reactive-form-add',
        component: ReactiveFormAddComponent,
      },
      {
        path: 'student-add',
        component: AddStudnetComponent,
      },
      {
        path: 'student-edit/:id',
        component: AddStudnetComponent,
      },
      {
        path: 'edit/:id',
        component: EditComponent
      },
    ]
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
    // loadChildren: 'src/app/employee/employee.module#EmployeeModule',
    // "src/app/employee/employee.module#EmployeeModule"
    // ------------------ canActivate (check lazy loaded module)
    // canLoad:[TestLazyGuard]
  },
  { path: 'product', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'coustomer', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'cdk-example', loadChildren: () => import('./cdk-example/cdk-example.module').then(m => m.CdkExampleModule) },
  { path: 'dynamic-templating', loadChildren: () => import('./dynamic-templating/dynamic-templating.module').then(m => m.DynamicTemplatingModule) },
  { path: 'performance-opt-techniques', loadChildren: () => import('./performance-opt-techniques/performance-opt-techniques.module').then(m => m.PerformanceOptTechniquesModule) },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

// const routesData:Routes = [
//   {
//     // localhost:4200/home
//     // localhost:4200/custome-detail
//     path:'home1',
//     component:HomeComponent
//   }

// ]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        // useHash: true,
        // enableTracing: true
      })],
  exports: [RouterModule]
})
export class AppRoutingModule { }



