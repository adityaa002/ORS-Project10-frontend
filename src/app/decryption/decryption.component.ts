import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-decryption',
  templateUrl: './decryption.component.html',
  styleUrls: ['./decryption.component.css']
})
export class DecryptionComponent extends BaseCtl {
constructor(public locator:ServiceLocatorService , route: ActivatedRoute){
  super(locator.endpoints.DECRYPTION, locator,route)
}
}
