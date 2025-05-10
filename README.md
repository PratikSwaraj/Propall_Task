# GLB Model Viewer with View Capture and Save to MongoDB

This project is a web application that allows users to upload and view GLB (3D model) files. Users can capture different camera views of the model, save them to MongoDB, and load saved views back into the application.

The project is built using the MERN stack:
- **Frontend**: React, Three.js
- **Backend**: Express.js
- **Database**: MongoDB Atlas (Cloud) 

---

## Features

- **Upload GLB file**: Allows users to upload a `.glb` file to view a 3D model.
- **Capture Views**: Capture camera views of the model (position, rotation, quaternion).
- **View Panel**: Display a panel with all saved views, allowing users to jump to a specific view.
- **Save Views to MongoDB Atlas**: Save the captured views to MongoDB Atlas using a REST API.
- **Load Views from MongoDB Atlas**: Load saved views from MongoDB and display them.

---

## Prerequisite
- npm should be installed.
- [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) database shoul be created.

## Application Configuration
- This application can be deployed in 3 environments: dev, preprod and prod.
- The environment based configurations can be done in the .env.<environment> files respectively.
- The configuration contains the `DATABASE_URL` variable and should be configured with MongoDB Atlas database URL.

## Setup Backend
Follow the below instructions to setup the backend service:
- Run `cd propall_backend`
- Run `npm install`
- Run `npm run start:dev` for dev environment (`DATABASE_URL` is set by default with dev MongoDB Atlas database URL in .env.dev file)
- Configure `DATABASE_URL` in .env.preprod file and run `npm run start:preprod` for preprod environment
- Configure `DATABASE_URL` in .env.prod file and run `npm run start:prod` for prod environment

## Setup Frontend
Follow the below instructions to setup the frontend service:
- Run `cd propall`
- Run `npm install`
- Set the `REACT_APP_API_URL` in .env file with the deployed backend url (By default it is set to `http://localhost:8080`)
- Run `npm start`
