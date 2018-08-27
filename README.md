# TO RUN


-> npm i

Go to projects

-> ng build library1

-> npm serve app1 | app2
# AngularCliMonorepo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.5.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## About Project
It has a library component that is exported and used in 2 Apps i.e App1 & App2.
It also represents service as an interface approach.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Generate library,app

ng generate library library1

ng generate application app1

## Structure

projects -> app1,app2,library1

src -> Base Angular Code

## Commands

-> ng serve | build app1 | app2

For using library, needs to be build


-> ng build library1


to install as an NPM dependency in Application


-> npm install library1


import { ANYEXPORTEDITEM } from library1

