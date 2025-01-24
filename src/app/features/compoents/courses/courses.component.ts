import { Component } from '@angular/core';
import { CoursesService } from '../../../services/courses.service';
import { CardService } from '../../../services/card.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  allData!: any[];
  constructor(private courseServices: CoursesService, private cardServices: CardService, private toaster: ToastrService) {

    this.courseServices.get().subscribe((data: any) => {
      this.allData = data;
      console.log(data);
    });
  }

  addToCard(id: any) {
    this.cardServices.create({
      course_id: id
    }).subscribe((res) => {
      this.toaster.success("succcess", "Add Your Course in Your Card",{
      
      });


    })
  }
}

