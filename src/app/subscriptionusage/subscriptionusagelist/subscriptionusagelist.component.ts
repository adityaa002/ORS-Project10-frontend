import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from 'src/app/base-list.component';
import { ServiceLocatorService } from 'src/app/service-locator.service';

@Component({
  selector: 'app-subscriptionusagelist',
  templateUrl: './subscriptionusagelist.component.html',
  styleUrls: ['./subscriptionusagelist.component.css']
})
export class SubscriptionusagelistComponent extends BaseListCtl {
  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.SUBSCRIPTIONUSAGE, locator, route)
  }
}
