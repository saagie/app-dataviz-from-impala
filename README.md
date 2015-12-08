Sprinb Boot Template + AngularJS + Gulp
====


PRODUCTION MODE :
---
 
Simply run : 

`
mvn spring-boot:run  
`

And the application will : 

 - Install `node` and `npm` locally (not interfere with your local install and config)
 - Do a `npm install`
 - Do a `bower install`
 - Do a `gulp` and export `dist` package to `/src/main/resources/static`
 - Compile Java sources
 - Compile Java tests and execute them 
 - Package all 
 - Start packaging application on port 8080 
 
Open the page : http://localhost:8080 and the AngularJS is displayed (available on http://localhost:8080/app//index.html)

All backend resources are available on this http://localhost:8080/api

The documentation interface (using swagger2) is available here : http://localhost:8080/swagger/index.html

DEV MODE :
---
 
You need to launch backend and frontend separately : 

__API (Backend)__

    - Run the demo.DemoApplication.main and the API should be available on port 8080

__UI (Frontend)__

Go on this package : src/main/webapp : 

    - Do a `npm install`
    - Do a `bower install`
    - Do a `gulp serve`. The UI is available and serve using Bowersync on port 3000 and all localhost:3000/api is redirect to localhost:8080/api (using the proxymiddleware)
     
 

