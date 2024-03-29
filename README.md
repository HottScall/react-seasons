  <h1 align="center"> Seasons App </h1>
<h3 align="center"> An app which uses a Geolocation API to return whether it's winter or summer in your location</h3>

<h3 align="center"> Tech Stack </h3>
  <ul>
    <li>Language - Javascript</li>
    <li>Library - React</li>
    <li>UI - Semantic-ui</li>
    <li>API - Geolocation API</li>
    <li>Css Framework - Bootstrap</li>
    <li>Linter - Eslint (in console)</li>
  </ul>
  
 This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<h3 align="center"> Learning Covered </h3>

<h5 align="center">Difference between functional and class based components.</h5>

A functional component is just plain JS function which accepts props as an argument and returns a React Element. E.g SeasonDisplay.js takes in seasonConfig, getSeason and seasonDisplay and then returns React elements by way of string interpolation. Config & Helper functions at the top of the file and the functional components at the bottom. 

<h5 align="center">Rules of State</h5>

<ul>
  <li>Only useable with Class Based Components (other than with hooks)</li>
  <li>Don’t confuse props with state!</li>
  <li>State is a JS object that contains data relevant to the component</li>
  <li>Updating state on a component causes the component to (almost) instantly re-render.</li>
  <li>State must be initialised when a component is created</li>
  <li>State can only be updated using the function setState</li>
</ul>

<h5 align="center">Rules of Class Based Components</h5>

<ul>
  <li>Must be a Javascript Class</li> 
  <li>Must extend (subclass) of React.Component</li>
  <li>Must define a render method that returns some form of JSX.</li>
</ul>

<h5 align="center">Component Lifecycle</h5>

A list of the main life cycle methods used in React projects, these run in lineal order. Note: There are other lifycycle methods, but these are rarely used. 

<ul>
  <li>constructor function</li>
  <li>render</li>
  <li>componentDidMount (is called once when content is first rendered to the screen)</li>
  <li>componentDidUpdate (sits and waits for updates)</li>
  <li>componentWillUnmount (sits and waits until the component is no longer shown)</li>
<ul>


<h3 align="center">Scripts</h3>


In the project directory, you can run:

npm start - Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

npm test - Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

npm run build - Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.  The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

npm run eject - **Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.  Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.  Learn More - You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started). To learn React, check out the [React documentation](https://reactjs.org/).

Code Splitting - This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size - This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App - This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration - This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment - This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

npm run build - fails to minify. This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
