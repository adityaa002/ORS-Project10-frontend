import { Component } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { HttpServiceService } from '../http-service.service';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jasper-report',
  templateUrl: './jasper-report.component.html',
  styleUrls: ['./jasper-report.component.css']
})
export class JasperReportComponent extends BaseListCtl {


  constructor(public locator: ServiceLocatorService, route: ActivatedRoute, private httpservice: HttpServiceService, private httpclient: HttpClient) {
    super(locator.endpoints.JASPERREPORT, locator, route);

  }

  override ngOnInit(): void {
    this.generateReport();
  }
 

  generateReport() {
  var _self = this
    this.httpclient.get("http://localhost:8080/Jasper/report" , {
      responseType: 'blob',
      withCredentials: true
    }).subscribe((response: Blob) => {

      const fileURL = URL.createObjectURL(response);

      this.locator.router.navigate(['/marksheetmeritlist'])

      window.open(fileURL);



    });

  }
}


