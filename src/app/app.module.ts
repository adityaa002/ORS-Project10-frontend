import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpServiceService } from './http-service.service';
import { EndpointServiceService } from './endpoint-service.service';
import { AuthServiceService } from './auth.service.service';
import { RoleComponent } from './role/role.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { CollegeComponent } from './college/college.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { TimetableComponent } from './timetable/timetable.component';
import { FooterComponent } from './footer/footer.component';
import { UserListComponent } from './user/user-list.component';
import { RoleListComponent } from './role/role-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { CourseListComponent } from './course/course-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { StudentListComponent } from './student/student-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { TimetableListComponent } from './timetable/timetable-list.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LoginComponent } from './login/login.component';
import { MyprofileComponent } from './user/myprofile.component';
import { SignupComponent } from './login/signup.component';
import { ForgotpasswordComponent } from './login/forgotpassword.component';
import { MarksheetmeritlistComponent } from './marksheet/marksheetmeritlist.component';
import { JasperReportComponent } from './jasper-report/jasper-report.component';
import { AuditComponent } from './audit/audit.component';
import { AuditlistComponent } from './audit/auditlist/auditlist.component';
import { ChangepasswordComponent } from './user/changepassword/changepassword.component';
import { ResolutionComponent } from './resolution/resolution.component';
import { ResolutionListComponent } from './resolution/resolution-list.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { PrescriptionListComponent } from './prescription/prescription-list.component';
import { QuotaComponent } from './quota/quota.component';
import { QuotalistComponent } from './quota/quotalist/quotalist.component';
import { DecryptionComponent } from './decryption/decryption.component';
import { DecryptionlistComponent } from './decryption/decryptionlist/decryptionlist.component';
import { ErrorCompComponent } from './error-comp/error-comp.component';
import { BlocklistComponent } from './blocklist/blocklist.component';
import { BlocklistlistComponent } from './blocklist/blocklistlist/blocklistlist.component';
import { RuleComponent } from './rule/rule.component';
import { RulelistComponent } from './rule/rulelist/rulelist.component';
import { SubscriptionusageComponent } from './subscriptionusage/subscriptionusage.component';
import { SubscriptionusagelistComponent } from './subscriptionusage/subscriptionusagelist/subscriptionusagelist.component';
import { CacheComponent } from './cache/cache.component';
import { CachelistComponent } from './cache/cachelist/cachelist.component';
import { HistoryComponent } from './history/history.component';
import { HistorylistComponent } from './history/historylist/historylist.component';
  
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RoleComponent,
    NavbarComponent,
    UserComponent,
    CollegeComponent,
    CourseComponent,
    SubjectComponent,
    StudentComponent,
    FacultyComponent,
    MarksheetComponent,
    TimetableComponent,
    FooterComponent,
    UserListComponent,
    RoleListComponent,
    CollegeListComponent,
    CourseListComponent,
    SubjectListComponent,
    StudentListComponent,
    FacultyListComponent,
    MarksheetListComponent,
    TimetableListComponent,
    LoginComponent,
    MyprofileComponent,
    SignupComponent,
    ForgotpasswordComponent,
    MarksheetmeritlistComponent,
    JasperReportComponent,
    AuditComponent,
    AuditlistComponent,
    ChangepasswordComponent,
    ResolutionComponent,
    ResolutionListComponent,
    PrescriptionComponent,
    PrescriptionListComponent,
    QuotaComponent,
    QuotalistComponent,
    DecryptionComponent,
    DecryptionlistComponent,
    ErrorCompComponent,
    BlocklistComponent,
    BlocklistlistComponent,
    RuleComponent,
    RulelistComponent,
    SubscriptionusageComponent,
    SubscriptionusagelistComponent,
    CacheComponent,
    CachelistComponent,
    HistoryComponent,
    HistorylistComponent
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
         defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, 
    useClass: AuthServiceService,
     multi: true
  },
    HttpServiceService,
    EndpointServiceService,
    AuthServiceService,
    HttpServiceService
  ],
  bootstrap: [AppComponent   ]
})
export class AppModule { }