import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscriptionusage',
  templateUrl: './subscriptionusage.component.html',
  styleUrls: ['./subscriptionusage.component.css']
})
export class SubscriptionusageComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.SUBSCRIPTIONUSAGE, locator, route)
  }

}
