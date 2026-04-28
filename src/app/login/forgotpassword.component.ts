import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {

 
  form: any = {
    error: false,
    message: '',
    data: { id: null },
    inputerror: {},
  };
  constructor(private httpService: HttpServiceService, private router: Router) {

  }
  submit() {
    var _self = this;
    this.httpService.get("http://localhost:8080/Auth/forgetPassword/" + this.form.data.loginId,function (res: any) {

      _self.form.message = '';
      _self.form.inputerror = {};

      if (res.result.message) {
        _self.form.message = res.result.message;
      }

      _self.form.error = !res.success;
      if (_self.form.error && res.result.inputerror) {
        _self.form.inputerror = res.result.inputerror;
      }
    });
  }
}
