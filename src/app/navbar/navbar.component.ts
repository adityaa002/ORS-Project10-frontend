import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { ServiceLocatorService } from '../service-locator.service';
import { TranslateService } from '@ngx-translate/core';
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  userid: any;

  endpoint = "http://localhost:8080/Auth/";

  form: any = {
    data: {},
    message: ""
  }

  constructor(private translate: TranslateService, private httpService: HttpServiceService, private router: Router, private servicelocator: ServiceLocatorService) {


    const locale = localStorage.getItem("locale") || 'en';
    translate.setDefaultLang(locale);
    translate.use(locale);


  }

  changeLocale(locale: string) {
    localStorage.setItem("locale", locale);
    this.translate.use(locale);
  }

  ngOnInit(): void {

  }

forward() {
  this.userid = localStorage.getItem("userId");  // ✅ capital I
  this.servicelocator.forward("/myprofile/" + this.userid);
}


  isLogin() {
    let check = localStorage.getItem('fname');
    if (check != "null" && check != null) {
      this.form.data.fname = localStorage.getItem("fname");
      this.form.data.role = localStorage.getItem("role");
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.clear();

    this.router.navigate(['/login'], {
      queryParams: { successMessage: 'Logout Successfully...!' }
    });
  }

    goToDoc() {
    window.open('assets/doc/index.html', '_blank');

  }

  handleImage(event: any) {
    event.target.src = 'https://i.pinimg.com/736x/9e/83/75/9e837528f01cf3f42119c5aeeed1b336.jpg'
  }

  isAdmin(): boolean {
    return localStorage.getItem('role') === 'ADMIN';
  }

  isFaculty(): boolean {
    return localStorage.getItem('role') === 'FACULTY';
  }

  isStudent(): boolean {
    return localStorage.getItem('role') === 'STUDENT';
  }


}