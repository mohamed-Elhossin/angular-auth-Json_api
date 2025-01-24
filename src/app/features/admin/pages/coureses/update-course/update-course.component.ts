import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../../../../services/courses.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-course',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-course.component.html',
  styleUrl: './update-course.component.css'
})
export class UpdateCourseComponent {
  id!: any;
  constructor(private router: Router, private fb: FormBuilder, private serv: CoursesService, private toastr: ToastrService,
    private ActivedRoute: ActivatedRoute
  ) {
    this.id = this.ActivedRoute.snapshot.paramMap.get("id");
    this.createForm();

    this.serv.getById(this.id).subscribe((data: any) => {
      console.log(data);
      this.courseForm.patchValue(data);
    })
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
    this.serv.update(this.id, this.courseForm.value).subscribe((data) => {
      this.toastr.success("success", "Update Data Successfully", {
        timeOut: 2000,
        closeButton: true,
        positionClass: "toast-top-center",
      });
      this.router.navigateByUrl('/admin/lc');
    });

  }
}
