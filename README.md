# NLP-app - Lance Stasinski

## Table of contents

* [Description](#Description)
* [Instructions](#Instructions)
* [Resources](#Resources)

## Description

### Summary

This application assesses the affect and subjectivity of a website's text using meaningcloud's natural language processor (NLP) API. This project was build to practice:

* Working with webpack
* Using SASS
* Setting up Service Workers
* Testing with Jest

### Working parts

Specifically, this app makes a post request containing a URL input by the user to a local server. The server then sends that URL to the meaningcloud API via another post request. Upon receiving the information from meaningcloud, the server will send the results of the NLP back to the client, and the UI will update with information regarding the sentiment of the input website.

### Challenges

I found it challenging to correctly impliment a custom library and then test functions that rely on other functions in the library. I overcame this by decreasing the complexity of the functions to ensure that the basic utilities were working. For example, I reduced the complexity of the constructEntry function to test that that it updated the UI given some information. I also found some webpack configurations suggested for the project to be outdated, so I relied on documentation to bring those configurations up to today's standards. For instance, the optimize-css-assets-webpack-plugin is now deprecated and the css-minimizer-webpack-plugin should be used instead.

## Instructions

### Install Dependencies

First, fork and clone this repository. From there, navigate to the directory and install dependencies via the following code:

```bash

cd <directory>
npm install

```

### Get an API key

Second, you'll need an API key for meaningcloud. You can sign up for a free key [here](https://www.meaningcloud.com/developer/login). Next, add a `.env` file to the root of the directory containing the following text using your new key.

```bash

API_KEY = <your key here>

```

### Start the app

#### Start the server

Use `npm run start` to start the Express server.

#### Production Mode

Use these commands if you want to view the project in production mode (recommended):

```bash

npm run build-prod

```

Then, navigate to [http://localhost:3030](http://localhost:3030) in your browser.

#### Developer Mode

Use the following command if you want to run this app in the webpack dev server:

```bash

npm run build-dev

```

## Resources

* [Jest](https://jestjs.io/)
* [Webpack](https://webpack.js.org/)
* [SASS](https://sass-lang.com/guide)
* [Workbox](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin)
* [css-minimizer-webpack-plugin](https://github.com/webpack-contrib/css-minimizer-webpack-plugin)
* [Stackoverflow-gurvinder372](https://stackoverflow.com/questions/36996698/how-do-i-lowercase-any-string-then-capitalize-only-the-first-letter-of-the-word)
* [Meangingcloud](https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/what-is-sentiment-analysis)
* [jsdom](https://github.com/jsdom/jsdom)
