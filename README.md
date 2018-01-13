## Project Bookshop

This is repository with application that shows my experimentals creations of angular application. This is frontend part of application, for *BookshopFE* repository is *java* backend. This project has been crated ratrer for learning purpouses.

## Description

Project has typical tools for shop. It comunicates with backend using angular *resource* service. Aplication according with good practicles have one main module to which are pinned rest elements like frameworks, controllers, services etc.

## Motivation

My motivation to create this project is ability to learn.

## Code style

Regarding best practicles I try use them in any aspect of project
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/standard)

## Technology/Frameworks/Tools used

- [angularjs](https://angularjs.org/): main framework
- [nodejs](https://nodejs.org/): javascript runtime build
- [gulp](https://gulpjs.com/): framework using to build and run project
- [bower](https://bower.io/): framework that manage project dependencies
- [eclipse](https://www.eclipse.org/): ide that I use to developing

## On what I am currently working

Currently I am working on establish loging and registering users.

## What next

In feature I plan to upgrade project to next versions of angular. But first of all I need provide all elementary show features.

## Instalation

#### Tools to install

Download [nodejs](https://nodejs.org/en/download/) and install it

After it install globally via nodejs gulp and bower like below

```code
npm install -g gulp
npm install -g bower
```

Also need ide like [eclipse](https://spring.io/tools) or another and install it

#### Prepare environment

First of all create folder and name it for example *RealProjects* and clone this project from github

```code
git clone https://github.com/grkopiec/BookshopFE.git
```

After clone project is time to do setup by install locally all necessary tools, run this commands in project folder

```code
npm install 
bower install
```
After this command all tools should be installed then time to download required dependencies

```code
npm update
bower update
```
When all commands passed then project should be done and project can be open in preffered ide

#### Run project

To run project in command protompt run this command

```code
gulp
```

This command should build project and run it in browser, for properly project working is required running backend part on local environment

## Run tests

Test are not prepare yet, but will be ;)
