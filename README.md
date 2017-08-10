# String Calculator
[![CircleCI](https://circleci.com/gh/charlottebrf/js-string-calculator.svg?style=svg)](https://circleci.com/gh/charlottebrf/js-string-calculator)
[![Coverage Status](https://coveralls.io/repos/github/charlottebrf/js-string-calculator/badge.svg?branch=master)](https://coveralls.io/github/charlottebrf/js-string-calculator?branch=master)

String Calculator
======================
This repository contains a running application that offers a JS solution to the string calculator problem. Please see the [Requirements file](REQUIREMENTS.md) for full details of this problem.


## Table of contents

- [Getting started](#getting-started)
- [Usage](#usage)
- [Running tests](#running-tests)
- [Test suite](#test-suite)
- [My approach](#my-approach)
- [Future Improvements](#future-improvements)


## Getting Started

```
npm install
```

## Running Tests

```
npm test
```

## Test suite

```
Jasmine
```

## My Approach
I aimed at all times to do the smallest possible thing & to write the kata in a TDD way. I followed a Red, Green, Refactor cycle.

## Future Improvements
I had a limited amount of time to complete this kata. With more time I would continue to refactor my functions to make them leaner, and ensure they all have a single responsibility.

I would also get CircleCI & Coveralls running, at present although the tests pass the configuration isn't correct and so the application isn't building.

Finally, I experimented with installing Jasmine using Bower which created a different json file, which in hindsight has confused the later npm install I carried out. NPM test command needs to be fixed so a user can run the passing tests. Overall, I had some configuration difficulties with this project that I will improve on for the next one. 
