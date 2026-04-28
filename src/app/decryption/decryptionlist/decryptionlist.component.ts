import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from 'src/app/base-list.component';
import { ServiceLocatorService } from 'src/app/service-locator.service';

@Component({
  selector: 'app-decryptionlist',
  templateUrl: './decryptionlist.component.html',
  styleUrls: ['./decryptionlist.component.css']
})
export class DecryptionlistComponent extends BaseListCtl {
constructor(public locator:ServiceLocatorService , route:ActivatedRoute){
  super(locator.endpoints.DECRYPTION , locator, route)
}
}
