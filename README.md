# Star Wars Portal

## How to launch the application
### To inicialize this project
run **npm i** inside the backend folder, and **npm i** inside frontend folder, to install all dependecies.

### To start the project
You can start the backend and the frontend, running **npm start** inside *backend folder* and **ng serve** inside *frontend folder*. 

### Dependencies
Besides, you need to have the *Mongodb*, *Nodejs* and the *Angular CLI* installed in your local machine.

## Project folders explication
The application is divided in two folders.

### *backend*, which is subdivided in:
- api folder: It contains the files responsible to access the MongoDB database and inject the data received with some validations.
- config folder: It contains the files responsible to configurate the parsers and the MongoDB connection.
- index.js: File responsible to start the back-end server.

### *frontend*, which is has the following structure:
- src > components : All the created angular components that compose the front-end aplication.
- src > components > character: The character components, responsibles to the CRUD interface.
- src > components > template: All the page template components, as well as the header, content and footer.
- src > components > views: Page components, that are showed in the main content component.