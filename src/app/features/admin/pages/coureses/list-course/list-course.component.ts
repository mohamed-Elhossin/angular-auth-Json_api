import { Component } from '@angular/core';
import { CoursesService } from '../../../../../services/courses.service';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-course',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list-course.component.html',
  styleUrl: './list-course.component.css'
})
export class ListCourseComponent {

  allData!: any[];
  constructor(private courseServices: CoursesService, private toast: ToastrService) {
    this.showData();
    this.courseServices.auth();
  }

  showData() {
    this.courseServices.get().subscribe((data: any) => {
      this.allData = data;
    });
  }

  deleteCouse(id: any) {
    this.courseServices.delete(id).subscribe((data) => {
      this.toast.error("Delete Row successfully");
      this.showData();
    })
  }
}
