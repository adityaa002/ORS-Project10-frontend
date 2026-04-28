import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blocklist',
  templateUrl: './blocklist.component.html',
  styleUrls: ['./blocklist.component.css']
})
export class BlocklistComponent extends BaseCtl{
constructor(public locator:ServiceLocatorService , route:ActivatedRoute){
  super(locator.endpoints.BLOCKLIST,locator,route);
}
}
