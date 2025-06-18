import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from '../components/tasks/child/child.component';
import { ParentComponent } from '../components/tasks/parent/parent.component';
import { DashboardComponent } from '../components/tasks/dashboard/dashboard.component';
import { DateOperationComponent } from '../components/tasks/date-operation/date-operation.component';
import { DateFutureComponent } from '../components/tasks/date-future/date-future.component';
import { Under18Component } from '../components/tasks/under18/under18.component';
import { DialogboxComponent } from '../components/tasks/dialogbox/dialogbox.component';
import { TabViewComponent } from '../components/tasks/tab-view/tab-view.component';
import { FormComponent } from '../components/tasks/form/form.component';
import { TableComponent } from '../components/tasks/table/table.component';

// import { ServicesComponent } from '../components/tasks/services/services.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,children: 
    [
    {
      path: 'parent',
      component: ParentComponent
    },
    {
      path: 'child',
      component: ChildComponent
    },
    {
      path:'date',
      component:DateOperationComponent
    },
    {
      path:'datefuture',
      component:DateFutureComponent
    },
    {
      path:'below18',
      component:Under18Component
    },
    {
      path:'dialog',
      component:DialogboxComponent
    },
    {
      path:'TabView',
      component:TabViewComponent
    },
    {
      path:'Form',
      component:FormComponent
    },
    {
      path:'table',
      component:TableComponent
    },
    {
      path: '',
      redirectTo: '/parent', 
      pathMatch: 'full'
    }
  ]
},
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule
  ],
  exports: [RouterModule] 
})
export class TasksRoutingModule { }
