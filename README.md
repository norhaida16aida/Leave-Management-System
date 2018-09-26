Assigment: On-Leave Management System Application
==================================================


Quick Start
------------

```bash
$ cd `this-assignment-folder`
$ npm install
$ npm start
```

Steps (with branch-name)
========================

master (master branch)
-----------------------

```bash
create-react-app `this-assignment-folder`
cd `this-assignment-folder`
git init 
git add .
git commit -m"original version"
```

Step 1 (step1 branch)
----------------------

**Implement `todoApp` from `reactjs.org`**

```bash
git checkout -b step1

// add and update new codes
// check in localhost:3000

git diff --name-only
git add .
git commit -m"step1: done todoApp from reactjs.org."
```


Step 2
------

ajax call from other URI in lifecycle componentDidMount

```bash

git checkout -b step2

// componentWillMount -> render -> componentDidMount (REST call, Ajax, Promise) ... componentWillUnMount -> componentDidUnMount
```

Step 3
-------

add simplest redux

```bash
git checkout -b step3
//create folder src/step3
//create js src/step3/App.js

npm install --save redux react-redux prop-types
//or:
yarn add redux react-redux prop-types
```

Step 4
-------

Implement Redux/ TodoMVC example

```bash
npm install --save classnames 

```

Step 5
------

Implement Navigation:
- Layout multiple-pages to navigate
- Login redirect works
- add `bootstrap` CSS-style, and `font-awesome`, custom css style.

```bash
npm install --save react-router-dom react-bootstrap font-awesome

```

Step 6
------

- add CSS-style, fix warning of button class
- copy Form, Table into `step6/` folder

```bash

```

Step 7
------

```bash
npm install --save react-calendar
```

Step 8
------

```bash
npm install --save react-data-export react-pdf

```

Step 9
-------

```bash

```


Reference
-----------

[How to fetch data in React](https://www.robinwieruch.de/react-fetching-data/)
