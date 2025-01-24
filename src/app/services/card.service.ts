import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiFunctionService } from './api-function.service';

@Injectable({
  providedIn: 'root'
})
export class CardService extends ApiFunctionService<any> {

  constructor(public override http: HttpClient, public override router: Router) {
    super("http://localhost:3000/cards", http, router);
  }
}
