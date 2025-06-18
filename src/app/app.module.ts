import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './components/sample/sample.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './core/auth.interceptor';
import { TasksModule } from './modules/tasks/tasks.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Under18Component } from './components/tasks/under18/under18.component';
import { DialogboxContentComponent } from './components/tasks/dialogbox-content/dialogbox-content.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TabViewComponent } from './components/tasks/tab-view/tab-view.component';
import { ChartComponent } from './components/chart/chart.component';
// import { HighchartsChartModule } from 'highcharts-angular';
import { HighchartsChartModule } from 'highcharts-angular';
import { ApiCallsComponent } from './components/api-calls/api-calls.component';
import { DynamicformComponent } from './components/dynamicform/dynamicform.component';
import { QuatationListComponent } from './components/quatation-list/quatation-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    UnauthorizedComponent,
    NavbarComponent,
    LoginComponent,
    Under18Component,
    DialogboxContentComponent,
    ChartComponent,
    ApiCallsComponent,
    DynamicformComponent,
    QuatationListComponent,
    // TableComponent,
    // FormComponent,
    
   
    
    
    
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TasksModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    HighchartsChartModule,
    MatCardModule,
    MatProgressSpinnerModule
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
