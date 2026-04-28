import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { HttpServiceService } from '../http-service.service';
import { Route, Router } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  endpoint = "http://localhost:8080/Auth/signUp";

  form: any = {
    error: false,
    message: '',
    data: { id: null },
    inputerror: {},
    selectedFile: null


  };

  constructor(private httpService: HttpServiceService, private router: Router, public serviceLocator: ServiceLocatorService) {
  }
  onFileSelected(event: any) {
    this.form.selectedFile = event.target.files[0];
  }

  uploadPic() {
    var _self = this;
    if (!_self.form.selectedFile) return;

    const formData = new FormData();
    formData.append('file', _self.form.selectedFile);

    this.serviceLocator.httpService.post(
      'http://localhost:8080/User/profilePic/' + _self.form.data.id,
      formData,
      function (res: any) {
        console.log("Upload response:", res);
      }
    );
  }
  signUp() {
    var _self = this;
    this.serviceLocator.httpService.post(this.endpoint, this.form.data, function (res: any) {

      _self.form.message = '';
      _self.form.inputerror = {};

      if (res.success) {
        _self.form.message = res.result.message;
        _self.form.data.id = res.result.data;
        _self.uploadPic();
      }

      else {
        _self.form.error = true;
        if (res.result.inputerror) {
          _self.form.inputerror = res.result.inputerror;
        }
        _self.form.message = res.result.message;
      }
    });
  }

  reset() {
    location.reload();
  }
}