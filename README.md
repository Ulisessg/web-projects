# 🚀Frontend of UD, website that will be focused on sharing knowledge, mainly about technology and a design system.

## If there is something you like, just use it 😄.

## Start with 👩‍🚀

Execute in your terminal

    git clone git@github.com:Ulisessg/web-projects.git

## Instalation 🔧

Execute in your terminal

    npm i

## Technologies used 👨‍💻

- ### [React](https://github.com/facebook/react)
- ### [Stylus](https://stylus-lang.com/)
- ### [Redux](https://github.com/reduxjs/redux)
- ### [Webpack](https://github.com/webpack/webpack)
- ### [Husky](https://github.com/typicode/husky)
- ### [Eslint](https://github.com/eslint/eslint)
- ### [Lighthouse](https://github.com/GoogleChrome/lighthouse-ci)
- ### [Firebase (Deploy)](https://github.com/firebase/firebase-tools)

## Deploy 🚀

[https://ulisessg.com](https://ulisessg.com)

## Methodologies

- ## Atomic design ⚛

# #Develop: 👷‍♀️

## Scripts 🏃‍♀️

_Start the develop server of one page_ (DON'T add the extension file)

    npm run dev nameOfPage

_New pages_

For add new pages just add the .tsx file in the folder **./src/react/pages** and the .html file at the folder **./public**

## Build

_Execute in your terminal_:

    node ./build.js

## Continuous integration 👷‍♂️

## The continuous integration process runs on Github Actions following the next steps

1.  Instalation of dependencies.

2.  Run the eslint test.

3.  Webpack build a dll with the common dependencies to improve performance.

4.  Node runs a webpack build for each page

5.  Webpack compress all the files.

6.  Node builds my blog posts

7.  Lighthouse runs mobile test of:

- Accesibility.
- Performance.
- Best practices.

### **If all tests are successful:**

8.  Firebase deploy the app at [ulisessg.com](https://ulisessg.com)

# Continuous testing

- ## In local, Husky run the eslint verification to prevent errors in production

# License

## [MIT License](./LICENSE)
