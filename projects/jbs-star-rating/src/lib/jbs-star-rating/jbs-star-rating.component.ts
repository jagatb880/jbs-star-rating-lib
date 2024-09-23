import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'lib-jbs-star-rating',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './jbs-star-rating.component.html',
  styleUrls: ['./jbs-star-rating.component.scss']
})
export class JbsStarRatingComponent implements OnChanges {
  @Input() rating: number = 0;             // Input for current rating value
  @Input() starCount: number = 5;           // Input for total number of stars
  @Input() color: string = 'yellow';        // Input for star color
  @Input() starSize: number = 30;           // Input for star size
  @Input() starSpacing: number = 5;         // Input for space between stars
  @Input() allowHalfStars: boolean = false; // Input to allow half-stars or not

  @Output() ratingUpdated = new EventEmitter<number>(); // Event emitter for updated rating
  
  ratingArr: number[] = [];                 // Array for generating stars

  ngOnChanges(changes: SimpleChanges): void {
    this.createRatingArray();
  }

  // Create an array representing stars
  createRatingArray() {
    this.ratingArr = Array.from({ length: this.starCount }, (_, index) => index + 1);
  }

  // Determines whether to display full, half, or empty star
  showIcon(index: number): string {
    if (this.allowHalfStars && this.rating >= index - 0.5 && this.rating < index) {
      return '★';  // Half Star - Return appropriate half star icon or style if needed
    } else if (this.rating >= index) {
      return '★';  // Full Star
    } else {
      return '☆';  // Empty Star
    }
  }

  // Click event to capture the rating (handles full and half stars)
  onClick(starValue: number) {
    if (this.allowHalfStars) {
      this.rating = starValue - 0.5 === this.rating ? starValue : starValue - 0.5;
    } else {
      this.rating = starValue;
    }
    this.ratingUpdated.emit(this.rating); // Emit the updated rating
  }
}