# myRetail

A frontend case study for an online store "myRetail" utilizing [Vue.js](https://vuejs.org/). Initialized using the [vue-gulp-template](https://github.com/rmknecht/vue-gulp-template) for [vue-cli](https://github.com/vuejs/vue-cli).

#####  Application Features:
* Responsive layout
* Product information and images populated from JSON
* "Add to Cart" and "Pickup In Store" button display logic
* Product image carousel
* Example functional tests
* Develop and Build workflows with NPM and Gulp

Asset and Directory Structure
---------------
* **docs** (Application documentation)
* **gulp-tasks** (Collection of Gulp related task scripts)
* **node_modules** (Node dependencies installed with NPM)
* **public** (Public document root)
	* **assets** (static assets)
		* **fonts** (fonts files)
		* **img** (static images)
	* **dist** (Distributable, comipiled, code)
		* **css** (CSS files compiled by Gulp)
		* **app** (App-related Javascript compiled by Gulp)
		* **rev-manifest.json** (Generated manifest of revisioned files)
	* **index.html** (Compiled index.html)
* **src** (Source code and assets)
	* **app** (App-related  Javascript)
		* **components** (Single file Vue components)
		* **json** (Static json data)
		* **store** (Vuex store)
		* **main.js** (Main entry point for the application js)
	* **html** (Uncompiled html)
	* **scss** (SCSS)
		* **modules** (Site specific styling)
* **test** (Functional tests)
* **.babelrc** (Babel config)
* **.gitignore** (Untracked files)
* **gulpfile.babel.js** (Main Gulp file)
* **karma.conf.js** (Karma test runner config)
* **package.json** (NPM packages manifest)
* **README.md** (Project README file)


Frontend Toolset
---------------

This project uses [Sass](http://sass-lang.com) to process and compile CSS. [Gulp](http://gulpjs.com/) is used to watch files, run node-sass, minify css, compile javascript, and enable BrowserSync.

## Getting started with Gulp for the first time.
1. Install [Node](http://nodejs.org/download/) if you don't already have it.
2. Install the [Gulp](http://gulpjs.com/) package globally.

	````
	$ npm install gulp -g
	````

3. Clone this repo locally.
4. CD to the project root.
5. Run `$ npm install` to install each node package as defined in the project's packages.json dependency list.
6. Now, just run `$ npm run gulp` to start watch tasks (defined in [./gulpfile.babel.js](gulpfile.babel.js)).


Installation & Setup
---------------

``` bash
# install dependencies
npm install

# build, and serve with hot reload at http://localhost:3000/
# Opened browsers may require refresh.
npm run dev
```

Build for Production
---------------
```
npm run build
```

Testing
---------------
Example tests are located within the `test` directory.
Run tests with:

````
$ npm test
````

Continuous Delivery
---------------

![Diagram](docs/continuous-delivery.png?raw=true "Diagram")


Application Specifics
--------------------------
### Include any additional documentation here
