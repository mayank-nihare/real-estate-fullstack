# Real Estate Fullstack Project

> **Note:** Both the frontend (React) and backend (Express) can run concurrently for local development. See the setup instructions below.Completed all the requirements that are asked in the assignment from taking data from the backend to he initialising the backend . Use nmp start in the root directory FullStack Task> npm start . Access the admin panel by localhost:3000/admin

A fullstack MERN (MongoDB, Express, React, Node.js) application featuring a modern real estate landing page and a robust admin panel.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Quick Start](#quick-start)
- [Running Backend and Frontend Concurrently](#running-backend-and-frontend-concurrently)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Development Process](#development-process)
- [Accessing the Admin Panel](#accessing-the-admin-panel)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [License](#license)

---

## Features

### Landing Page
- **Hero Section**: Eye-catching intro with a contact form (name, email, mobile, city).
- **Not Your Average Realtor**: Modern, styled info section.
- **Why Choose Us**: Highlights unique selling points.
- **About Us**: Company background and mission.
- **Our Projects**: Displays all projects (image, name, description) fetched from the backend.
- **Happy Clients**: Shows client testimonials (image, name, description, designation) fetched from the backend.
- **Newsletter**: Users can subscribe with their email (sent to backend).
- **Footer**: Modern, multi-part footer with navigation, newsletter, and social icons.

### Admin Panel
- **Project Management**: Add/view/delete projects (image, name, description).
- **Client Management**: Add/view/delete clients (image, name, description, designation).
- **Contact Form Details**: View/delete all contact form submissions.
- **Subscribed Emails**: View/delete all newsletter subscribers.
- **Logout**: Securely log out and return to the landing page.

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

## Quick Start

A sample environment file is provided for easy setup. To get started:

1. Copy the example environment file:
   ```sh
   cp server/.env.example server/.env
   ```
2. (Optional) Edit `server/.env` to use your own MongoDB URI if you do not want to use the provided one.

---

## Running Backend and Frontend Concurrently

To run both the backend and frontend at the same time during development:

1. **Open two terminal windows/tabs.**
2. In the first terminal, start the backend:
   ```sh
   cd server
   npm start
   ```
   The backend will run on [http://localhost:5000](http://localhost:5000).
3. In the second terminal, start the frontend:
   ```sh
   cd client
   npm start
   ```
   The frontend will run on [http://localhost:3000](http://localhost:3000).

> **Tip:** You can also use tools like [`concurrently`](https://www.npmjs.com/package/concurrently) or npm workspaces to run both with a single command, but the above method is the simplest and most reliable for most setups.

---

## Environment Variables

### Backend (`server/.env`)
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
BASE_URL=http://localhost:5000
```

> **Note:** You must create your own `.env` file in the `server` directory, or use the provided `.env.example` as shown above.

---

## Running the Application

### 1. **Start the Backend**
```sh
cd server
npm start
```
The backend will run on [http://localhost:5000](http://localhost:5000).

### 2. **Start the Frontend**
```sh
cd ../client
npm start
```
The frontend will run on [http://localhost:3000](http://localhost:3000).

---

## Development Process

1. **Project Setup**: Initialized with separate client (React) and server (Express) folders. Set up MongoDB models and RESTful API endpoints.
2. **Landing Page**: Built modular React components for each section, styled with Tailwind CSS, and connected to backend APIs for dynamic data.
3. **Admin Panel**: Created a protected admin route with sidebar navigation. Implemented CRUD for projects, clients, contacts, and subscribers.
4. **Image Handling**: Used `multer` for backend image uploads, serving images from the backend's public directory.
5. **Newsletter & Contact**: Implemented forms that POST to backend and display data in the admin panel.
6. **Cleanup & Optimization**: Removed unused files, added `.gitignore`, and formatted codebase with Prettier.
7. **Deployment**: (Add your deployment steps here if deployed)

---

## Accessing the Admin Panel

- Go to: [http://localhost:3000/admin](http://localhost:3000/admin)
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

## Screenshots

(Add screenshots here if available)

---

## License

(Add license information here)

