import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from 'src/app/base-list.component';
import { ServiceLocatorService } from 'src/app/service-locator.service';
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-cachelist',
  templateUrl: './cachelist.component.html',
  styleUrls: ['./cachelist.component.css'],
 })
export class CachelistComponent extends BaseListCtl {
  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.CACHE, locator, route)
  }

}
