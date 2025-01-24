import { Component } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CoursesService } from '../../../../services/courses.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UsersService } from '../../../../services/users.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private router: Router, private fb: FormBuilder, private serv: UsersService, private toastr: ToastrService) {
    this.createForm();
  }

  registerForm!: FormGroup;
  createForm() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }



  onSubmit() {
    this.serv.create(this.registerForm.value).subscribe((data) => {
      this.toastr.success("success", "Register Account Successfully", {
        timeOut: 2000,
        closeButton: true,
        positionClass: "toast-top-center",
      });
      this.router.navigateByUrl('/admin/login');
    });

  }
}
