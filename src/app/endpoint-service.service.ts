import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointServiceService {

  constructor() { }

  public SERVER_URL = "http://localhost:8080";
  public USER = this.SERVER_URL + "/User";
  public ROLE = this.SERVER_URL + "/Role";
  public COLLEGE = this.SERVER_URL + "/College";
  public MARKSHEET = this.SERVER_URL + "/Marksheet";
  public STUDENT = this.SERVER_URL + "/Student";
  public SUBJECT = this.SERVER_URL + "/Subject";
  public COURSE = this.SERVER_URL + "/Course";
  public TIMETABLE = this.SERVER_URL + "/TimeTable";
  public FACULTY = this.SERVER_URL + "/Faculty";
  public AUDIT = this.SERVER_URL + "/Audit";


  //USE_CASES
  public RESOLUTION = this.SERVER_URL + "/Resolution";
  public PRESCRIPTION = this.SERVER_URL + "/Prescription";
  public QUOTA = this.SERVER_URL + "/Quota";
  public DECRYPTION = this.SERVER_URL + "/Decryption";
  public BLOCKLIST = this.SERVER_URL + "/BlockList";
  public RULE = this.SERVER_URL + "/Rule";
  public SUBSCRIPTIONUSAGE = this.SERVER_URL + "/SubscriptionUsage";
  public CACHE = this.SERVER_URL + "/Cache";
 

  public JASPERREPORT = this.SERVER_URL + "/Jasper";
}