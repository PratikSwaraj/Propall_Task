# GLB Model Viewer with View Capture and Save to MongoDB

This project is a web application that allows users to upload and view GLB (3D model) files. Users can capture different camera views of the model, save them to MongoDB, and load saved views back into the application.

The project is built using the MERN stack:
- **Frontend**: React, Three.js
- **Backend**: Express.js
- **Database**: MongoDB

---

## Features

- **Upload GLB file**: Allows users to upload a `.glb` file to view a 3D model.
- **Capture Views**: Capture camera views of the model (position, rotation, quaternion).
- **View Panel**: Display a panel with all saved views, allowing users to jump to a specific view.
- **Save Views to MongoDB**: Save the captured views to MongoDB using a REST API.
- **Load Views from MongoDB**: Load saved views from MongoDB and display them.

---

### Prerequisites

- **Node.js** and **npm** (or **yarn**) installed on your machine.
- **MongoDB** instance running locally or remotely.

---

**Frontend Components**
App.js
Handles uploading the GLB file, capturing views, saving/loading views from MongoDB, and rendering the ModelViewer and ViewPanel components.

ModelViewer.js
Displays the GLB model and captures the camera view (position, rotation, quaternion).

ViewPanel.js
Displays the list of saved views and provides buttons to jump to or save/load views.

---

**API Routes**
Post/view
Description: Saves the captured views to MongoDB.

Get/views
Description: Retrieves saved views from MongoDB.

----

To run the **frontend**:
cd propall
npm install (install all the required dependencies)
npm start

To start the **backend server**:
cd propall_backend
npm install (install all the required dependencies)
npx nodemon server.js
