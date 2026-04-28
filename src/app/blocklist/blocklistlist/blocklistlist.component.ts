import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from 'src/app/base-list.component';
import { ServiceLocatorService } from 'src/app/service-locator.service';

@Component({
  selector: 'app-blocklistlist',
  templateUrl: './blocklistlist.component.html',
  styleUrls: ['./blocklistlist.component.css']
})
export class BlocklistlistComponent extends BaseListCtl {
  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.BLOCKLIST, locator, route)
  }
}
