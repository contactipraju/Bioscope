# Bioscope
Media Compilation and Management

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Run on a specific port: `ng serve --open --port 4300`

## Deploying to Firebase
To deploy from terminal using firebase-cli: firebase deploy --only hosting

To deploy to a Preview: Issue a PR into Master Branch
Once successful, Github provides the URL of the preview build for the PR like: https://bioscope-360--pr194-210727-misc-x1kpfjtb.web.app

Prod release: Merge the PR
App will be deployed at: https://bioscope-360.web.app and https://bioscope-360.firebaseapp.com


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

For more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
