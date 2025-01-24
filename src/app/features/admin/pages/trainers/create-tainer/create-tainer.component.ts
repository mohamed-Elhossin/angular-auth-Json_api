import { Component } from '@angular/core';
import { TrainersService } from '../../../../../services/trainers.service';

@Component({
  selector: 'app-create-tainer',
  standalone: true,
  imports: [],
  templateUrl: './create-tainer.component.html',
  styleUrl: './create-tainer.component.css'
})
export class CreateTainerComponent {

  constructor(private serv: TrainersService) {
    // this.serv.
  }

  // CART ,Login, CV
}
