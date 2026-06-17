
# Sehar Fiaz Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Node.js backend.

## Features

- Contact form with email notifications
- Resume download functionality
- Project showcase
- Skills section
- Responsive design
- Modern UI/UX

## Tech Stack

**Frontend:**
- React
- Tailwind CSS
- Vite
- Framer Motion

**Backend:**
- Node.js
- Express
- Nodemailer

## Getting Started

### Prerequisites
- Node.js installed
- npm or yarn

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/seharchattha226-creator/Portfolio.git
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. Set up environment variables in `backend/.env`:
   ```
   PORT=5001
   MONGO_URI=your_mongodb_uri
   EMAIL_USER=your_email
   EMAIL_PASS=your_app_password
   ```

5. Run the app:

   Backend:
   ```bash
   cd backend
   npm run dev
   ```

   Frontend (in new terminal):
   ```bash
   npm run dev
   ```

## Usage

- The portfolio will be available at `http://localhost:5173`
- Backend API will be available at `http://localhost:5001`
