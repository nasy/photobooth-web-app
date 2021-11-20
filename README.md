## Introduction

This is a simple React App that consumes the Pexels public API and displays a list of images.
You can click on load more images once you reach the bottom and you can click on a certain image to see the details.

## Project structure
The project structure is very simple. We are using react router and we have 2 main routes, the image list and the image details.

As we also have a react native app we are using git submodules tu share some code between the two projects.

As a bonus I have added Lottie animations as a dependency to show some loading effects.

## Project Scope

I kept the project simple for this demo as the end goal is to demonstrate my react skills.
If you want to see more functionalities please check my side project called Rizo App in the following link that I build all by myself:
https://apps.apple.com/app/id1494981202

## Life demo

You can check a life demo of the app here:
https://photobooth-fwkz57aqga-uc.a.run.app/

It has been deployed on Google cloud run reusing an apache server docker image I already had (probably there are better docker images to use to deploy a single page app but for this demo I used one I already had available).

## Project setup

Start by setting the right nodeJs version to run the project
### `nvm use`

Install the dependencies
### `yarn install`

Pull the common repository submodule
### `cd common && git pull`

Run the project on your local machine
### `yarn start`

## Submodules

This repository depends on this other one as a submodule.
https://github.com/nasy/photobooth-common

To create the submodule I've used:
git submodule add git@github.com:nasy/photobooth-common.git common

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



