# Real Estate Fullstack Project

> **Note:** See the setup, installation, and environment file setup instructions very carefully.

---

## Table of Contents

- [Assignment Completion Summary](#assignment-completion-summary)
- [Accessing the Admin Panel](#accessing-the-admin-panel)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Development Approach](#development-approach)

---

## Assignment Completion Summary

All required tasks for the assignment have been completed:

### Landing Page Features
- **Our Project Section:** Displays all projects fetched from the backend, including image, name, description, and a dummy Read More button.
- **Happy Clients Section:** Displays all clients fetched from the backend, including image, description, name, and designation.
- **Contact Form:** Allows users to submit their details (Full Name, Email, Mobile Number, City) to the backend. These are viewable in the admin panel.
- **Newsletter Subscription:** Users can subscribe with their email, which is sent to the backend and viewable in the admin panel.

### Admin Panel Features
- **Project Management:** Admin can add, view, update, and delete projects (image, name, description).
- **Client Management:** Admin can add, view, update, and delete clients (image, name, description, designation).
- **Contact Form Details:** Admin can view all contact form submissions.
- **Subscribed Email Addresses:** Admin can view all newsletter subscribers.

---

## Accessing the Admin Panel

- Go to: `/admin` route on the frontend (e.g., [http://localhost:3000/admin](http://localhost:3000/admin) or your deployed frontend URL + `/admin`).
- Use the sidebar to manage Projects, Clients, Contacts, and Subscribers.
- Use the **Logout** button to return to the landing page.

---

## API Endpoints

### Projects
- `GET /api/projects` — List all projects
- `POST /api/projects` — Add a new project (admin)
- `DELETE /api/projects/:id` — Delete a project (admin)

### Clients
- `GET /api/clients` — List all clients
- `POST /api/clients` — Add a new client (admin)
- `DELETE /api/clients/:id` — Delete a client (admin)

### Contacts
- `GET /api/contacts` — List all contact form submissions (admin)
- `POST /api/contacts` — Submit a contact form
- `DELETE /api/contacts/:id` — Delete a contact (admin)

### Newsletter
- `GET /api/newsletter` — List all subscribers (admin)
- `POST /api/newsletter` — Subscribe to newsletter
- `DELETE /api/newsletter/:id` — Delete a subscriber (admin)

---

## Project Structure

```
FullStack Task/
  client/         # React frontend
  server/         # Express backend
  package.json    # Root dependencies
  .gitignore
  README.md
```

---

## Setup & Installation

### 1. **Clone the Repository**
```sh
git clone https://github.com/mayank-nihare/real-estate-fullstack.git
cd real-estate-fullstack
```

### 2. **Install Dependencies**

#### Backend
```sh
cd server
npm install
```

#### Frontend
```sh
cd ../client
npm install
```
---

## Environment Variables

Create a `.env` file in the `client` directory with the following content:

```
REACT_APP_API_URL=https://real-estate-fullstack-olur.onrender.com
```

This ensures the frontend will use the deployed backend for all API requests.

---

## Running the Application

The backend is hosted and its link is already configured in the frontend. You only need to start the frontend; all API calls will work automatically.

### Start the Frontend
```sh
cd client
npm start
```
The frontend will run on [http://localhost:3000](http://localhost:3000).

---

## Development Approach

This section outlines the step-by-step approach and key decisions made during the development of this MERN stack project:

1. **Project Structure:**
   - Used a monorepo with separate `client` (React + Tailwind CSS) and `server` (Node.js/Express) directories for clear separation of frontend and backend.
   - Organized assets in `client/src/assets/` with subfolders for images, icons, and shapes for maintainability.

2. **Backend Development:**
   - Set up an Express server and connected to MongoDB (Atlas recommended for deployment).
   - Created Mongoose models for Project, Client, Contact, and Newsletter.
   - Implemented RESTful API routes for CRUD operations and data fetching.
   - Used controllers for clean code separation and maintainability.
   - Enabled CORS for frontend-backend communication.

3. **Frontend Development:**
   - Built modular React components for each landing page and admin panel section, styled with Tailwind CSS for responsiveness.
   - Fetched projects and clients from the backend and displayed them dynamically.
   - Implemented contact form and newsletter subscription with API integration.
   - Built the admin panel with forms and tables for managing all resources.
   - Used Axios for API calls and React Router for navigation.

4. **Integration & Deployment:**
   - Configured the frontend to use the hosted backend API endpoints.
   - Ensured all environment variables are managed securely and not committed to version control.
   - Deployed the backend and frontend to cloud platforms as required.

This approach ensured a clean, maintainable, and scalable codebase, with all assignment requirements met and a modern, responsive user experience delivered.

---

