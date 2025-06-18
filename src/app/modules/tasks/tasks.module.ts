import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Angular Material modules
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';

// Components
import { TasksRoutingModule } from 'src/app/routes/tasks-routing.module';
import { ChildComponent } from 'src/app/components/tasks/child/child.component';
import { ParentComponent } from 'src/app/components/tasks/parent/parent.component';
import { DashboardComponent } from 'src/app/components/tasks/dashboard/dashboard.component';
import { DateOperationComponent } from 'src/app/components/tasks/date-operation/date-operation.component';
import { DateFutureComponent } from 'src/app/components/tasks/date-future/date-future.component';
import { DialogboxComponent } from 'src/app/components/tasks/dialogbox/dialogbox.component';
import { TabViewComponent } from 'src/app/components/tasks/tab-view/tab-view.component';
import { FormComponent } from 'src/app/components/tasks/form/form.component';
import { TableComponent } from 'src/app/components/tasks/table/table.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

// Custom Date Format
// import { MY_DATE_FORMATS } from 'src/environments/Dateformat';

@NgModule({
  declarations: [
    ChildComponent,
    ParentComponent,
    DashboardComponent,
    DateOperationComponent,
    DateFutureComponent,
    DialogboxComponent,
    TabViewComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    TasksRoutingModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTableModule,
    ZXingScannerModule 
  ],
  // providers: [
  //   { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  // ]
})
export class TasksModule { }
