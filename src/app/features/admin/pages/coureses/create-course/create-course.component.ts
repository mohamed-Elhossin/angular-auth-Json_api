import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CoursesService } from '../../../../../services/courses.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-course',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.css'
})
export class CreateCourseComponent {

  constructor(private router: Router, private fb: FormBuilder, private serv: CoursesService, private toastr: ToastrService) {
    this.createForm();
    this.serv.auth();
  }

  courseForm!: FormGroup;
  createForm() {
    this.courseForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      department: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      img: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required]],
      instructor: ['', [Validators.required, Validators.minLength(3)]],
    });
  }



  onSubmit() {
    this.serv.create(this.courseForm.value).subscribe((data) => {
      this.toastr.success("success", "Inser Data Successfully", {
        timeOut: 2000,
        closeButton: true,
        positionClass: "toast-top-center",
      });
      this.router.navigateByUrl('/admin/lc');
    });

  }
}
