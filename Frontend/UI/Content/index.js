// All JavaScript in here will be loaded server-side
// Expose components globally so ReactJS.NET can use them
import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
// import { AbortController, abortableFetch } from 'abortcontroller-polyfill/dist/cjs-ponyfill';

import App from './App'

// Needed when we want to bundle React ourselves, also make sure to use SetLoadReact(false) in the ReactConfig.cs file
global.React = React;
global.ReactDOM = ReactDOM;
global.ReactDOMServer = ReactDOMServer;
global.globalThis = global;
// global.AbortController = AbortController;
// global.fetch = abortableFetch(fetch);

// Components to expose
global.App = App;
