import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';
import { Trainer } from '../models/trainer';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TrainersService extends ApiFunctionService<Trainer> {

  constructor(public override http: HttpClient, public override router: Router) {
    super("http://localhost:3000/trainer", http, router)
  }
}
