# 🚀Frontend of UD, website that will be focused on sharing knowledge, mainly about technology and a design system.

## If there is something you like, just use it 😄.

# Start with 👩‍🚀

Execute in your terminal

    git clone git@github.com:Ulisessg/web-projects.git

# Instalation 🔧

Execute in your terminal

    npm i

# Technologies used 👨‍💻

- ### [React](https://github.com/facebook/react)
- ### [Stylus](https://stylus-lang.com/)
- ### [Redux](https://github.com/reduxjs/redux)
- ### [Webpack](https://github.com/webpack/webpack)
- ### [Husky](https://github.com/typicode/husky)
- ### [Eslint](https://github.com/eslint/eslint)
- ### [Lighthouse](https://github.com/GoogleChrome/lighthouse-ci)
- ### [Firebase (Deploy)](https://github.com/firebase/firebase-tools)

# Deploy 🚀

[https://ulisessg.com](https://ulisessg.com)

# Methodologies

- ## Atomic design ⚛

# Develop: 👷‍♀️

## Scripts 🏃‍♀️

_Start the develop server of one page_ (DON'T add the extension file)

    npm run dev nameOfPage

_Start the develop server for all pages_

    npm run dev-all

_New pages_

(For the moment in production you need to add the new pages in the entries of production file)

For add new pages just add the .js file in the folder **./src/react/pages** and the .html file at the folder **./public**

# Build

_Build all pages_

    npm run build

# Continuous integration 👷‍♂️

## The continuous integration process runs on Github Actions following the next steps

### 1. All dependencies are installed.

### 2. Run the eslint test.

### 3. Webpack build an dll with the common dependencies to improve performance.

### 4. Webpack build the rest of the app.

### 5. Webpack compress all the files.

### 6. Lighthouse run the test of:

- Accesibility.
- Performance.
- Good practices.
- PWA.

### **If all tests are successful:**

### 7. Firebase deploy the app at [ulisessg.com](https://ulisessg.com/design-system)

# Continuous testing

- ## In local, Husky run the eslint verification to prevent errors in production

# License

## [MIT License](./LICENSE)
