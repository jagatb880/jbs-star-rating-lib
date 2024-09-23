# JbsStarRating

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.0.

## Code scaffolding

Run `ng generate component component-name --project jbs-star-rating` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project jbs-star-rating`.
> Note: Don't forget to add `--project jbs-star-rating` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build jbs-star-rating` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build jbs-star-rating`, go to the dist folder `cd dist/jbs-star-rating` and run `npm publish`.

## Running unit tests

Run `ng test jbs-star-rating` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Installation
To use the Star Rating Component in your Angular project, follow the steps below:
Install the component via npm (assuming you've published it as a library on npm):
npm install jbs-star-rating@0.0.5

Once installed, import the component into your Angular application.

## Import and Configure the Component
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


## Usage
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


## Example Usage in a Parent Component
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
  [allowHalfStars]="true"
  (ratingUpdated)="onRatingUpdated($event)">
</lib-jbs-star-rating>

