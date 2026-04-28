import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from 'src/app/base.component';
import { HttpServiceService } from 'src/app/http-service.service';
import { ServiceLocatorService } from 'src/app/service-locator.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent extends BaseCtl {

  constructor(
    public locator: ServiceLocatorService,
    route: ActivatedRoute,
    public httpService: HttpServiceService
  ) {
    super(locator.endpoints.USER, locator, route);
  }

  // ✅ use form1 instead of form
  public form1: any = {
  error: false,
  message: '',
  inputerror: {},
  data: {
    id: '',
    loginId: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  }
};

  // ✅ validation
  validateForm(data: any) {

    let errors: any = {};

    if (!data.oldPassword || data.oldPassword.trim() === '') {
      errors.oldPassword = "Old password is required";
    }

    if (!data.newPassword || data.newPassword.trim() === '') {
      errors.newPassword = "New password is required";
    } else if (data.newPassword.length < 6) {
      errors.newPassword = "Password must be at least 6 characters";
    }

    if (!data.confirmPassword || data.confirmPassword.trim() === '') {
      errors.confirmPassword = "Confirm password is required";
    } else if (data.newPassword !== data.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (data.oldPassword && data.newPassword && data.oldPassword === data.newPassword) {
      errors.newPassword = "New password must be different from old password";
    }

    return errors;
  }

  // ✅ submit
  changePassword() {
    console.log("inside changePassword function()")

    // reset message
    this.form1.message = '';
    this.form1.error = false;

    // validate
    let errors = this.validateForm(this.form1.data);

    this.form1.inputerror = errors;

    // 🔥 stop if invalid
    if (Object.keys(errors).length > 0) {
      return;
    }

    // set loginId
this.form1.data.loginId = localStorage.getItem("loginId") || '';
    let _self = this;

    // API call
    this.httpService.post(
      "http://localhost:8080/User/changePassword",
      this.form1.data,
      function (res: any) {

        if (res.success) {
          _self.form1.error = false;
          _self.form1.message = res.result.message;

          // reset form
          _self.form1.data.oldPassword = '';
          _self.form1.data.newPassword = '';
          _self.form1.data.confirmPassword = '';

        } else {
          _self.form1.error = true;
          _self.form1.message = res.result.message;
        }
      }
    );
  }
}