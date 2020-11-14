# web-projects

Web projects are all my current web projects:

- ### A design system.
- ### A blog.
- ### And my portfolio.

### If there is something you like, just use it 😄.

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

[https://ulisessg.com/design-system](https://ulisessg.com/design-system)

# Methodologies

- ## Atomic design ⚛

# Develop: 👷‍♀️

## Scripts 🏃‍♀️

All pages has his own script and config file to work with them individually and one to run all pages.

## All develop scripts have this structure:

    npm run dev-nameOfPage

## Actual scripts

### **Start the local server to develop in all pages 🈵**

    npm run dev-all:

### **Start the local server to develop in the portfolio 🕴**

    npm run dev-main

### **Start the local server to develop in the blog 🗒**

    npm run dev-blog

### **Start the eslint verification ✔**

    npm run lint

# Continuous integration 👷‍♂️

## The continuous integration process run at [TravisCi](https://travis-ci.org/) following the next steps

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
