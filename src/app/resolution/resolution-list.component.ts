import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolution-list',
  templateUrl: './resolution-list.component.html',
  styleUrls: ['./resolution-list.component.css']
})
export class ResolutionListComponent extends BaseListCtl {
constructor(public locator:ServiceLocatorService , route:ActivatedRoute){
  super(locator.endpoints.RESOLUTION , locator , route)
}
}
