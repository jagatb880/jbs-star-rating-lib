import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JbsStarRatingComponent } from 'jbs-star-rating'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JbsStarRatingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'star-rating-workspace';
  onRatingUpdated(rating: number) {
    console.log('Rating selected: ', rating);
  }
}
