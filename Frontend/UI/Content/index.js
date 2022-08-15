// All JavaScript in here will be loaded server-side
// Expose components globally so ReactJS.NET can use them
import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";

import App from '../build/App.js'

// Needed when we want to bundle React ourselves, also make sure to use SetLoadReact(false) in the ReactConfig.cs file
global.React = React;
global.ReactDOM = ReactDOM;
global.ReactDOMServer = ReactDOMServer;

// Components to expose
global.App = App;
