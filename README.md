# Hazardous Asteroids

## Project Goals / Prerequisites

Create an `ASP.NET Core Web Application` composed of, at least, two separate projects inside a single `VS Solution`, a `ASP.NET Core Web API` within a `./Backend/` directory at the root of the solution and 

## Project Structure / Tech Stack

  - 

## Requirements

* `Visual Studio 2022` w/ the `ASP.NET` workload installed

* `Node.js >=16` ― *16.16.0 if possible*

<br />

## Installation


  1.  `git clone https://github.com/Theadd/HazardousAsteroids.git`

  2.  Open `HazardousAsteroids.sln` in VS 2022

  3.  Go to menu: `Build` > `Build Solution`.  
   <code>    *― This might take a few minutes ―*  </code>

  4.  Start using the multiple startup projects configuration by pressing <kbd>F5</kbd>

  5.  In a command prompt, go to `./Frontend/HazardousAsteroidsUI/client-app/` and run `npm start`  

<br />

<blockquote>

### **Why use the `npm start` workaround?**

<hr />
 
So far, **I was NOT able to find** a *neat* way to set up a `ASP.NET Core Web API` project and a `ASP.NET Core Web App` as two standalone projects within the same `VS Solution` **correctly configured** using `Typescript` and `React` in `.NET 6.0`. 

Just by replacing `Typescript` by `Javascript` from the setup above, it could be done as described in this tutorial from the official docs.

  [**Create an ASP.NET Core app with React in Visual Studio**](https://docs.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-react?view=vs-2022)

It could also be done with a **single project setup** for both the api backend and the web frontend or even in `.NET 5` but such setups are out of the goals of the project.

**And while our setup is not being supported, step number <kbd>5.</kbd> of the Installation instructions from above serves as a workaround.**

</blockquote>

