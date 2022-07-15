# Metricks, a Vue Application

> This application is created as part of the frontend coding challenge by ELC Ltd. I Reproduced the coming soon design prototype in VueX, SCSS and Bootstrap and also implement a github repo searcher where you can fetch the most starred Github repos that were created in the last 30 days with Github's REST API

<p align="center">
  <img src="./Project Screenshots/Screenshot2.png"/>
  <br>
</p>

# Table of Contents
  * [Getting Started](#getting-started)
    * [Prerequisite](#prerequisite)
    * [Installation](#installation)
    * [Build Setup](#build-setup)
  * [Built With](#built-with)
  * [Specification](#specification)
  * [Practices](#practices)
    * [General guidelines](#general-guidelines)
    * [1. Use Vuex](#1-use-vuex)
    * [2. Seperate Components](#2-seperate-components)
    * [3. Routers](#3-routers)
    
  * [Todo](#todo)

##  Getting Started
####  Prerequisite
  * You will need [!Node.js](https://nodejs.org) version 6.0 or greater installed on your system and.
  * npm
  ``` bash
  # install npm
  npm install npm@latest -g
  ```
  
####  Installation
Get the code by either cloning this repository using git
``` bash
  > git clone https://github.com/harkanni/paddle-frontend-assessment.git
```
... or [downloading source code](https://github.com/harkanni/paddle-frontend-assessment/archive/master.zip) as a zip archive.

Once downloaded, open the terminal in the project directory, and continue with:

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

##  Built With
  * HTML
  * CSS
  * SCSS
  * BOOTSTRAP
  * VUE

##  Specification
  * Reproduced the coming soon design prototype with Vue and css.
  * List the most starred Github repos that were created in the last 30 days.
  * Each field on display consists of: 
    * Repository name,
    * Repository description.
    * Number of stars for the repo.
    * Number of issues for the repo.
    * Username and avatar of the repo owner.
  * Implemented data pagination

## Practices
#### General guidelines

### 1. Use Vuex
As it's very easy to integrate and it provides a clear and simple architecture to your application, Vuex should be used for simple projects as well without thinking too much.

### 2. Seperate Components
Components are reusable Vue instances with custom HTML elements. Components can be reused as many times as you want or used in another component, making it a child component. Components allow us to split the UI into independent and reusable pieces, and think about each piece in isolation

### 3. Routers
Just like in most Modern single-page apps, transitions from page to page on the client-side (without requesting the server) were done using Vue Routers

 

## TODO

- [ ] E2E Tests, eg. Cypress or Testcafe
- [ ] Improve Pagination logic
- [ ] Add Skeleton preloaders to improve UX
- [ ] Display a Loading animation while waiting on result from Github API
- [ ] Activate The Timer on the Contact page
