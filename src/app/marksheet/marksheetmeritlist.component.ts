import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-marksheetmeritlist',
  templateUrl: './marksheetmeritlist.component.html',
  styleUrls: ['./marksheetmeritlist.component.css']
})
export class MarksheetmeritlistComponent extends BaseListCtl {
  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.MARKSHEET, locator, route);
  }

}
