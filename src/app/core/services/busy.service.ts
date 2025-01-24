import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {

  busyRequest = 0;

  constructor(private spinnerServices: NgxSpinnerService) { }
  busy() {
    this.busyRequest++;
    this.spinnerServices;
    this.spinnerServices.show();
  }

  hide() {
    this.busyRequest--;
    this.spinnerServices.hide();
  }
}
