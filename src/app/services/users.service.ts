import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ApiFunctionService<User> {

  constructor(public override http: HttpClient, public override router: Router) {
    super("http://localhost:3000/users", http, router);
  }
}
