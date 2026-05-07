import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from 'src/app/base-list.component';
import { ServiceLocatorService } from 'src/app/service-locator.service';

@Component({
  selector: 'app-passwordlist',
  templateUrl: './passwordlist.component.html',
  styleUrls: ['./passwordlist.component.css']
})
export class PasswordlistComponent extends BaseListCtl{
 constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.PASSWORD, locator, route);
  }
}
