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

