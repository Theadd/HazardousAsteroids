# **HAZARDOUS ASTEROIDS**

## **REQUESTED PROJECT** <sub><sub> </sub></sub> 

### **PROJECT REQUIREMENTS** <sub><sub> </sub></sub> 

Create an `ASP.NET Core Web Application` composed of, at least, <mark>two separate projects</mark> inside a single `VS Solution`, a `ASP.NET Core Web API` within a `./Backend/` directory at the root of the solution and an `ASP.NET Core MVC Web App` within a `./Frontend` directory, with the following restrictions: <sub><sub> </sub></sub> 

<blockquote>

* Use some of the __technologies listed below__:<sub><sub> </sub></sub><sup><sup><sup> </sup></sup></sup>
  * `.NET Core` / `.NET 5.0` / `.NET 6.0`, `ASP.NET Web API`
  * `HTML5`, `CSS3`, `jQuery` / `Typescript` / `React`
  * `xUnit` / `NUnit` / `MsTest`, `Moq`
* Add __unit tests__.<sub><sub> </sub></sub><sup><sup><sup> </sup></sup></sup>
* __SOLID Principles__ and __Clean Code__.<sub><sub> </sub></sub><sup><sup><sup> </sup></sup></sup>
* Caring for __CSS styles__.<sub><sub> </sub></sub><sup><sup><sup> </sup></sup></sup>
* __Responsive__ Web Design <sup><sub><var>(**BONUS**, **OPTIONAL**)</var></sub></sup> <sub><sub> </sub></sub><sup><sup><sup> </sup></sup></sup>
<hr />

* __Input filters__ <sup><sub><var>(**BONUS**, **OPTIONAL**)</var></sub></sup> _TLDR: Date range picker for up to 7 days max._<sub><sub> </sub></sub><sup><sup><sup> </sup></sup></sup>
* __Pagination__ <sup><sub><var>(**BONUS**, **OPTIONAL**)</var></sub></sup> <sub><sub> </sub></sub><sup><sup><sup> </sup></sup></sup>

</blockquote>

<br/>

## **RESULTING PROJECT** <sub><sub> </sub></sub> 

### **PROJECTS IN THIS SOLUTION/REPO** <sub><sub> </sub></sub> 


```py
`HazardousAsteroids`
 ├─ 'Backend'
 │   ├─ HazardousAsteroidsApi  -> # C# ASP.NET Core Web API microservice (.NET 6)
 │   │   
 │   └─ HazardousAsteroidsApiTests  -> # Tests for the Web API project above.
 │ 
 └─ 'Frontend'
     ├─ HazardousAsteroidsUI   -> # ** PROJECT EXCLUDED FROM THE SOLUTION**
     │                            # Based on the ASP.NET Core with React.js
     │                            # template and modified to add Typescript
     │                            # support, being kept as it contains the 
     │                            # unit tests of a react component as a
     │                            # complete component test example. Can 
     │                            # be used for fast UI development due to
     │                            # instant hot-reloading on save.
     │                               
     └─ UI   -> # An ASP.NET Core Web App (MVC) project based on the ReactJS.NET
                # `reactnet-webpack` (.NET Core 3.1) template being progressively 
                # migrated to .NET 6.0 (i.e., optional migration steps to use the 
                # new `minimal hosting model` are not done yet.) and some MVC's
                # strengths/features are not being exploited yet, intentionally,
                # in order to use previous TS/React UI implementation seamlessly.

```

<br/>

### **FEATURES** <sub><sub> </sub></sub> 

* __BACKEND__ <sub><sub> </sub></sub> 
  * `// TODO`

* __FRONTEND__ <sub><sub> </sub></sub> 
  * `// TODO`



<br/>

## **GETTING STARTED**

<sup><sup><sup> </sup></sup></sup>

<br/>

### **REQUIREMENTS** <sub><sub> </sub></sub> 

* `Visual Studio 2022` w/ the `ASP.NET` workload installed <sup><sup><sup> </sup></sup></sup>

* `Node.js >=16` ― *16.16.0 if possible*

<br />

### **INSTALL INSTRUCTIONS** <sub><sub> </sub></sub> 


* __Clone the repo:__ <sup><sup><sup> </sup></sup></sup>

    ```bash
    git clone https://github.com/Theadd/HazardousAsteroids.git
    ```

* __Open it and build solution:__ _― Same as `Build` > `Build Solution` in VS ―_

    ```bash
    cd HazardousAsteroids
    dotnet build
    ```

* __In two separate terminals, run:__ _― Can also be done configuring `multiple startup projects` in VS or by `Start without debugging` the first one ―_

    ```bash
    dotnet run --project Backend/HazardousAsteroidsApi/
    ```

    ```bash
    dotnet run --project Frontend/UI/
    ```

* __Open it in your browser:__

    **[http://localhost:9457](http://localhost:9457)**


<br />

### **MISC: HOT RELOADING UI** <sub><sub> </sub></sub> 

* __In a command prompt, go to `./Frontend/HazardousAsteroidsUI/client-app/` and run:__ <sup><sup><sup> </sup></sup></sup>

    ```bash
    npm install
    npm start
    ```


