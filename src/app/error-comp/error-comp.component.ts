import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-comp',
  templateUrl: './error-comp.component.html',
  styleUrls: ['./error-comp.component.css']
})
export class ErrorCompComponent implements OnInit {

  message : any;

  ngOnInit(): void {
          this.message = history.state.message;

  }

  reload() {
  window.location.reload()
   

}

}
