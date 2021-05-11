# AegonCalculator

The Aegon calculator is an assessment given by Aegon. This repo is contains the front-end required to run the
calculator.

## Info

Port: 4200  
swagger url: http://localhost:8080/swagger-ui/

## How to run

First install the required packages using `npm install`  
Then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Tests

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deadline issues :)

Due to the deadline I was not able to finish the unit tests for the front-end. For that reason I am going to describe
what I should have done when I had more time. First I would mock the httpclient and make sure that the results match the
back-end.  

Also I would have like to write unit tests for all the interaction with the components. Verifying the binding etc. Only 1 tests exists for this case (Calculator.component.spec.ts:35)

