## Musica: An online music library web app
Live Demo: 
https://musica-web.netlify.com

![alt text](https://firebasestorage.googleapis.com/v0/b/musica-d35e9.appspot.com/o/Project%20Screenshots%2Fhome.png?alt=media&token=fd60144d-5178-4b0c-a7f7-57940b12e687)

## How To Use: 

1. The user can browse all the songs and play them online for free

2. To purchase the song for getting the download link, the user will have to sign up or log in and then he/she can make the purchase

## Features:

1.Authentication: Implemented using firebase authentication service

![alt text](https://firebasestorage.googleapis.com/v0/b/musica-d35e9.appspot.com/o/Project%20Screenshots%2Fauthentication.png?alt=media&token=1e8613e5-9b94-4362-b3e2-f5dfe712ad31)

![alt text](https://firebasestorage.googleapis.com/v0/b/musica-d35e9.appspot.com/o/Project%20Screenshots%2Fauthentication%202.png?alt=media&token=1cbd7dc8-7b08-468b-8550-0d961fc407d4)

2.Cart (or Wishlist): Where user can add songs he/she wishes to purchase

![alt text](https://firebasestorage.googleapis.com/v0/b/musica-d35e9.appspot.com/o/Project%20Screenshots%2Fcart.png?alt=media&token=0aa6e7e4-c421-491b-9923-405915f65a9c)

![alt text](https://firebasestorage.googleapis.com/v0/b/musica-d35e9.appspot.com/o/Project%20Screenshots%2Fcheckout.png?alt=media&token=ddfc324a-77b0-4667-bb44-03c7d3ec9f04)

3.Audio Player: The user can navigate through the playlist, seek to a specific timestamp in a song using the progress bar cum slider and       control the volume

![alt text](https://firebasestorage.googleapis.com/v0/b/musica-d35e9.appspot.com/o/Project%20Screenshots%2Faudioplayer.png?alt=media&token=78a32b9b-44cf-4982-a5f3-63d3e3b8464a)

![alt text](https://firebasestorage.googleapis.com/v0/b/musica-d35e9.appspot.com/o/Project%20Screenshots%2Faudioplayer-responsive.png?alt=media&token=52b25c43-7f05-4eb9-9aed-c6cfb95c10c1)

4.Payment gateway: Implemented using the React binding of Stripe Payment API (note: only frontend has been implemented, it doesn't process real payments)

![alt text](https://firebasestorage.googleapis.com/v0/b/musica-d35e9.appspot.com/o/Project%20Screenshots%2Fstripe.png?alt=media&token=cd6810f9-1c51-4efd-bb72-1ed98bb95dbf)

5.Account Page: Where user can view his/her information

![alt text](https://firebasestorage.googleapis.com/v0/b/musica-d35e9.appspot.com/o/Project%20Screenshots%2Faccount.png?alt=media&token=8cc22886-56e5-4ff7-a320-bde1cd46c561)

## Tech Stack:

Frontend: Reactjs, Redux (for state management) and React-Router (for routing)

Backend: It's a serverless CRUD web app, backend not required

Database: Firebase

Deployed on: Netlify


## Instructions to run this project locally:

NOTE: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Make sure you have Node 12.13.0 and Yarn 1.19.1 installed in your computer.


In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
