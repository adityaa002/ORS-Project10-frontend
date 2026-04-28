import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from 'src/app/base-list.component';
import { ServiceLocatorService } from 'src/app/service-locator.service';

@Component({
  selector: 'app-rulelist',
  templateUrl: './rulelist.component.html',
  styleUrls: ['./rulelist.component.css']
})
export class RulelistComponent extends BaseListCtl {
  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.RULE, locator, route)
  }
}
