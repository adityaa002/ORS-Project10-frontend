import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from 'src/app/base-list.component';
import { ServiceLocatorService } from 'src/app/service-locator.service';

@Component({
  selector: 'app-auditlist',
  templateUrl: './auditlist.component.html',
  styleUrls: ['./auditlist.component.css']
})
export class AuditlistComponent extends BaseListCtl {
  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.AUDIT, locator, route);
  }
}
