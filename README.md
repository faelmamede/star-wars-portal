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

## Application screenshots

### Initial page
![screen1](https://user-images.githubusercontent.com/56761639/107982954-bd3a5080-6fa3-11eb-9f9f-3059b98372ee.png)

### Character listing page
![screen2](https://user-images.githubusercontent.com/56761639/107983067-f4a8fd00-6fa3-11eb-9532-34e2e6110b1c.png)

### Character adding page
![screen3](https://user-images.githubusercontent.com/56761639/107983087-fd99ce80-6fa3-11eb-9b2c-c376921e1f4c.png)

### Character updating page
![screen4](https://user-images.githubusercontent.com/56761639/107983106-05597300-6fa4-11eb-978e-31b9cf6070d3.png)

### Character deleting page
![screen5](https://user-images.githubusercontent.com/56761639/107983140-11453500-6fa4-11eb-84f4-2422255cac42.png)
