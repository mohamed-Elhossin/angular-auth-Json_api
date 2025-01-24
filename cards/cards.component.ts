import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../services/courses.service';
import { CardService } from '../../../services/card.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  courses: any[] = [];
  cards: any[] = [];
  displayedCourses: any[] = [];

  constructor(
    private courseServices: CoursesService,
    private cardServices: CardService,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
    this.getCoursesData();
    this.getCardData();
  }

  getCoursesData() {
    this.courseServices.get().subscribe((data: any) => {
      this.courses = data;
      console.log(this.courses);


      this.mapCoursesToCards();
    });
  }

  getCardData() {
    this.cardServices.get().subscribe((res: any[]) => {
      this.cards = res;

      console.log(this.cards);

      this.mapCoursesToCards();
    });
  }

  mapCoursesToCards() {
    if (this.courses.length > 0 && this.cards.length > 0) {
      this.displayedCourses = this.cards
        .map(card => {
          return this.courses.find(course => course.id === card.course_id);
        })
        .filter(course => course); // لاستبعاد الكورسات غير الموجودة
    }
  }
}
