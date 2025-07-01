# Build Steps for MERN RealTrust Project

## 1. Project Initialization
- Created `client` (React) and `server` (Node.js/Express) directories for frontend and backend.
- Initialized React app in `client` and set up Tailwind CSS for styling and responsiveness.
- Initialized Node.js project in `server` and installed dependencies: express, mongoose, cors, dotenv, multer, sharp.

## 2. Backend Setup
- Created `index.js` in `server` as the main entry point for the Express server.
- Configured CORS and JSON middleware.
- Set up MongoDB connection using Mongoose and environment variables (see `.env` file).
- Added a basic route to verify the server is running.

## Next Steps
- Create Mongoose models for Project, Client, Contact, and Newsletter.
- Set up RESTful API routes for each model.
- Build frontend components and connect to backend APIs. 