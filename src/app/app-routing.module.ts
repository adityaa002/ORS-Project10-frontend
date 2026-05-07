import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { CollegeComponent } from './college/college.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { StudentComponent } from './student/student.component';
import { FactoryTarget } from '@angular/compiler';
import { FacultyComponent } from './faculty/faculty.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { TimetableComponent } from './timetable/timetable.component';
import { UserListComponent } from './user/user-list.component';
import { RoleListComponent } from './role/role-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { CourseListComponent } from './course/course-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { StudentListComponent } from './student/student-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup.component';
import { ForgotpasswordComponent } from './login/forgotpassword.component';
import { MarksheetmeritlistComponent } from './marksheet/marksheetmeritlist.component';
import { JasperReportComponent } from './jasper-report/jasper-report.component';
import { MyprofileComponent } from './user/myprofile.component';
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
import { PasswordComponent } from './password/password.component';
import { PasswordlistComponent } from './password/passwordlist/passwordlist.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: 'userlist',
    component: UserListComponent
  },
  {
    path: 'role',
    component: RoleComponent
  },
  {
    path: 'role/:id',
    component: RoleComponent
  },
  {
    path: 'rolelist',
    component: RoleListComponent
  },
  {
    path: 'college',
    component: CollegeComponent
  },
  {
    path: 'college/:id',
    component: CollegeComponent
  },
  {
    path: 'collegelist',
    component: CollegeListComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'student/:id',
    component: StudentComponent
  },
  {
    path: 'studentlist',
    component: StudentListComponent
  },
  {
    path: 'marksheet',
    component: MarksheetComponent
  },
  {
    path: 'marksheet/:id',
    component: MarksheetComponent
  },
  {
    path: 'marksheetlist',
    component: MarksheetListComponent
  },
  {
    path: 'course',
    component: CourseComponent
  },
  {
    path: 'course/:id',
    component: CourseComponent
  },
  {
    path: 'courselist',
    component: CourseListComponent
  },
  {
    path: 'subject',
    component: SubjectComponent
  },
  {
    path: 'subject/:id',
    component: SubjectComponent
  },
  {
    path: 'subjectlist',
    component: SubjectListComponent
  },
  {
    path: 'timetable',
    component: TimetableComponent
  },
  {
    path: 'timetable/:id',
    component: TimetableComponent
  },
  {
    path: 'timetablelist',
    component: TimetableListComponent
  },
  {
    path: 'faculty',
    component: FacultyComponent
  },
  {
    path: 'faculty/:id',
    component: FacultyComponent
  },
  {
    path: 'facultylist',
    component: FacultyListComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }, {
    path: 'forgotpassword',
    component: ForgotpasswordComponent
  },
  {
    path: 'marksheetmeritlist',
    component: MarksheetmeritlistComponent
  }, {
    path: 'jasper',
    component: JasperReportComponent
  }, {
    path: 'myprofile/:id',
    component: MyprofileComponent
  },
  {
    path: 'audit',
    component: AuditComponent
  },
  {
    path: 'audit/:id',
    component: AuditComponent
  },
  {
    path: 'auditlist',
    component: AuditlistComponent
  }, {
    path: 'changepassword',
    component: ChangepasswordComponent
  },
  {
    path: 'resolution',
    component: ResolutionComponent
  },

  {
    path: 'resolutionList',
    component: ResolutionListComponent
  },
  {
    path: 'resolution/:id',
    component: ResolutionComponent
  }
  ,
  {
    path: 'prescription',
    component: PrescriptionComponent
  },

  {
    path: 'prescriptionList',
    component: PrescriptionListComponent
  },
  {
    path: 'prescription/:id',
    component: PrescriptionComponent
  },

  {
    path: 'quota',
    component: QuotaComponent
  },

  {
    path: 'quotaList',
    component: QuotalistComponent
  },
  {
    path: 'quota/:id',
    component: QuotaComponent
  },

  {
    path: 'decryption',
    component: DecryptionComponent
  },

  {
    path: 'decryptionList',
    component: DecryptionlistComponent
  },
  {
    path: 'decryption/:id',
    component: DecryptionComponent
  },
  {
    path: 'blockList',
    component: BlocklistComponent
  },

  {
    path: 'blockListList',
    component: BlocklistlistComponent
  },
  {
    path: 'blockList/:id',
    component: BlocklistComponent
  },
  {
    path: 'rule',
    component: RuleComponent
  },

  {
    path: 'ruleList',
    component: RulelistComponent
  },
  {
    path: 'rule/:id',
    component: RuleComponent
  },
  {
    path: 'subscriptionUsage',
    component: SubscriptionusageComponent
  },

  {
    path: 'subscriptionUsageList',
    component: SubscriptionusagelistComponent
  },
  {
    path: 'subscriptionUsage/:id',
    component: SubscriptionusageComponent
  },


  {
    path: 'cache',
    component: CacheComponent
  },

  {
    path: 'cachelist',
    component: CachelistComponent
  },
  {
    path: 'cache/:id',
    component: CacheComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },

  {
    path: 'historyList',
    component: HistorylistComponent
  },
  {
    path: 'history/:id',
    component: HistoryComponent
  },
  {
    path: 'password',
    component: PasswordComponent
  },

  {
    path: 'passwordList',
    component: PasswordlistComponent
  },
  {
    path: 'password/:id',
    component: PasswordComponent
  },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: ErrorCompComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
