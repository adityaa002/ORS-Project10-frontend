import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent extends BaseCtl {

  // ✅ consistent key name
userId: any = localStorage.getItem("userId");

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.USER, locator, route);
  }

  override ngOnInit(): void {
    this.display();
  }

  override display(): void {
    var _self = this;
    this.locator.httpService.get(
      "http://localhost:8080/User/get/" + this.userId,
      function (res: any) {
        if (res.success) {
          _self.form.data = res.result.data;  // ✅ fixed direction
        }
      }
    );
  }
 

  // myProfile() {
  //   var _self = this;
  //   this.serviceLocator.httpService.post('http://localhost:8080/User/myProfile', this.form.data.id, function (res: any) {
  //     _self.form.message = '';
  //     _self.form.inputerror = {};
  //     if (res.success) {
  //       _self.form.message = res.result.message;
  //       _self.form.data.id = res.result.data;
  //     } else {
  //       _self.form.error = true;
  //       if (res.result.inputerror) {
  //         _self.form.inputerror = res.result.inputerror;
  //       }
  //       _self.form.message = res.result.message;
  //     }
  //   });


 
}