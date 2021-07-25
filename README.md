# Picbook

A full stack project using React + Firebase. An application to upload , and perform operations on Images.

# Picbook 🖼📕 : Adding life to moments.

## About

Picbook is an application that let's you store the most precious moments of your life in the clouds, miles away from getting deleted(by mistake, ofcourse!)

## Stacks

- React , in the frontend.
- Firebase , in the backend as the service.

**Introduction**

- This is a relatively easy and a fun way to getting started with hands on application with cloud services and integrating them with the view.
- Seamless full stack experience , without the hassles of creating your own server, controllers or data model.
- Why not? Becuase Firebase takes care of all those for us. It is a quite popular backend as a service platform, and experience w/ firebase gives you a competetive edge, in the cloud-driven tech space. ☁

_Note_ : A Prior understanding of React is necessary to move forward, with this one.

## Guide

### 1. Contribution / Issues

_Anyone can contribute to this open source project. Also please feel free to raise any issues that you want to include , get solved or even to hang out online w/ us.💻_

- Fork this github repo onto your own github profile.
- Create a spearate branch , in the forked repo,
- Clone the forked project onto your local machine.
- Change directory to the project root directory and run `npm i ` to install all the project dependancies.
- Crush some codes ,preview them as well. 👩‍💻
- Once you have made the desired changes, push it to your origin, and create a PR. 🤝

### 2. Getting started w/ picbook codebase

**_Project Dependancies_**

- create-react-app : _CRA template to auto generate a react codebase_
- firebase : _to be able to use firebase services_ `npm i firebase`
- framer-motion : _for adding quirk and fun animation_ `npm i framer-motion`
- Docs : [framer-motion](https://www.framer.com/motion/) , [firebase](https://firebase.google.com/docs) , [React](https://reactjs.org/docs/getting-started.html)

**_Services used from firebase_**

- Firestore : _Like a database to store all the urls of the uploaded images. 🔥_
- Storage : _to store the uploaded images and get their URLS before adding the images to the firestore collection 💥_

**_Initialising firebase services, after configuring firebase config with the sdk from firebase_**

_Importing services we would use_

- `import firebase from 'firebase'`
- `import 'firebase/storage' `
- `import firebase/firestore'`

_Intiliasing the services_

- `let projectStorage(any name) = firebase.storage()`
- `let projectFirestore = firebase.firestore()`
- `export { projectStorage , projectFirestore}` : to be able to use the services, we need to export the variables which stores the invoked/initialised services
