import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SampleComponent } from './components/sample/sample.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { AuthguardGuard } from './core/authguard.guard';
import { ChartComponent } from './components/chart/chart.component';
import { ApiCallsComponent } from './components/api-calls/api-calls.component';
import { DynamicformComponent } from './components/dynamicform/dynamicform.component';
import { QuatationListComponent } from './components/quatation-list/quatation-list.component';
import { PaginationComponent } from './components/pagination/pagination.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:'home',component:SampleComponent , canActivate:[AuthguardGuard]},
  {path:'unauthorized',component:UnauthorizedComponent},
  {path:'Chart1',component:ChartComponent},
  {path:'Chart1',component:ChartComponent},
  {path:'Apicalls',component:ApiCallsComponent},
  {path:'dynamicform',component:DynamicformComponent},
  {path:'QuotationList/:id',component:QuatationListComponent},
  {path:'pagination',component:PaginationComponent},
  { path: 'tasks', loadChildren: () => import('./modules/tasks/tasks.module').then(m => m.TasksModule) } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
