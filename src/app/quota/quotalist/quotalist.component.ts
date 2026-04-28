import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from 'src/app/base-list.component';
import { ServiceLocatorService } from 'src/app/service-locator.service';

@Component({
  selector: 'app-quotalist',
  templateUrl: './quotalist.component.html',
  styleUrls: ['./quotalist.component.css']
})
export class QuotalistComponent extends BaseListCtl {
  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.QUOTA, locator, route)
  }
}
