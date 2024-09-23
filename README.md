# StarRatingWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Steps to create Create a New Angular Project

ng new star-rating-workspace
cd star-rating-workspace

## Create an Angular Library

ng generate library jbs-star-rating

## Create the Star Rating Component

ng generate component jbs-star-rating --project=jbs-star-rating

## Export the Standalone Component from the Library

export * from './lib/jbs-star-rating/jbs-star-rating.component';

## Build the Library

ng build jbs-star-rating

## Publish the Library to NPM

npm login
cd dist/jbs-star-rating
npm publish --access public

-----------------------------------------------------------

1. Installation
To use the Star Rating Component in your Angular project, follow the steps below:
Install the component via npm (assuming you've published it as a library on npm):
npm install jbs-star-rating@0.0.4

Once installed, import the component into your Angular application.
2. Import and Configure the Component
In an Angular Standalone Component:
In your standalone component, you can directly import the Star Rating Component.
import { JbsStarRatingComponent } from 'jbs-star-rating';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  standalone: true,
  imports: [JbsStarRatingComponent]
})
export class ProductDetailComponent {
  // Your logic here
}


3. Usage
You can use the Star Rating Component by adding it to your template with customizable inputs for rating, number of stars, star size, color, and spacing.
Example Template:
<lib-jbs-star-rating 
  [rating]="4"            <!-- Rating value (4 stars) -->
  [starCount]="5"           <!-- Number of stars (default: 5) -->
  [color]="'#f39c12'"       <!-- Color of stars (e.g., orange) -->
  [starSize]="40"           <!-- Size of each star in pixels -->
  [starSpacing]="10"        <!-- Spacing between stars -->
  [allowHalfStars]="true"   <!-- Allow half stars -->
  (ratingUpdated)="onRatingUpdated($event)"> <!-- Output event for rating click -->
</lib-jbs-star-rating>


4. Example Usage in a Parent Component
In your parent component, you can manage the rating logic and handle the output event.
Parent Component TypeScript (product-detail.component.ts):

export class ProductDetailComponent {
  currentRating = 4.5; // Default rating

  // Handles when a user clicks on a star to update the rating
  onRatingUpdated(newRating: number) {
    this.currentRating = newRating;
    console.log('Updated Rating:', newRating);
  }
}

Parent Component HTML (product-detail.component.html):
<lib-jbs-star-rating 
  [rating]="currentRating"
  [starCount]="5"
  [color]="'#ffcc00'"
  [starSize]="40"
  [starSpacing]="8"
  (ratingUpdated)="onRatingUpdated($event)">
</lib-jbs-star-rating>


