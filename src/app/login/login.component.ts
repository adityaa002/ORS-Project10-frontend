import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  endpoint = "http://localhost:8080/Auth/login";

  form: any = {
    error: false,
    message: '',
    data: { id: null },
    inputerror: {},

  };

  constructor(private httpService: HttpServiceService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {

      if (params['successMessage']) {
        this.form.message = params['successMessage'];
        this.form.error = false;
      }

      if (params['errorMessage']) {
        this.form.message = params['errorMessage'];
        this.form.error = true;
      }
    });
  }

  signIn() {
    var _self = this;
    this.httpService.post(this.endpoint, this.form.data, function (res: any) {

      _self.form.message = '';
      _self.form.inputerror = {};

      if (res.result.message) {
        _self.form.message = res.result.message;
      }

      _self.form.error = !res.success;
      if (_self.form.error && res.result.inputerror) {
        _self.form.inputerror = res.result.inputerror;
      }

      if (res.success) {



        localStorage.setItem("loginId", res.result.loginId);
        localStorage.setItem("role", res.result.role);
        localStorage.setItem("fname", res.result.fName);
        localStorage.setItem("lname", res.result.lName);
        localStorage.setItem("userId", res.result.data.id);
        localStorage.setItem('token', 'Bearer ' + res.result.token)
        console.log("token" + localStorage.getItem("token"))

        _self.router.navigateByUrl('dashboard');
      }
    });
  }

  signUp() {
    this.router.navigateByUrl('signup');
  }
}