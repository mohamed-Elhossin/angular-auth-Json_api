import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxSpinnerModule],
  // imports: [UpperCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private Spinner: NgxSpinnerService) {
 
  }

}
