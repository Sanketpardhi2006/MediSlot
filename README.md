# 🏥 MediSlot – Doctor Appointment Management System

MediSlot is a full-stack **Doctor Appointment Management System** built using the MERN stack. It provides separate interfaces for **patients/users** and **administrators**, allowing users to find doctors and manage appointments while administrators can manage doctors, users, appointments, and other system data.

## 🚀 Live Demo

### 👤 User Application

**Live Website:**
https://medi-slot-cyaqqd5tn-sanketpardhi2006s-projects.vercel.app

Patients/users can:

* Register and login
* Browse doctors
* View doctor information
* Book appointments
* View their appointments
* Manage their profile

### 🛠️ Admin Panel

**Admin Dashboard:**
https://medi-slot-w38e.vercel.app

Administrators can:

* Login to the admin dashboard
* Manage doctors
* Manage users
* View and manage appointments
* Manage application data

### ⚙️ Backend API

**Backend:**
https://medislot-backend-hz9o.onrender.com

The backend provides REST APIs for:

* Authentication
* Users
* Doctors
* Appointments
* Web messages

---

## 🧩 Project Architecture

```text
                    ┌──────────────────────┐
                    │    User Frontend     │
                    │       Vercel         │
                    └──────────┬───────────┘
                               │
                               │ REST API
                               ▼
                    ┌──────────────────────┐
                    │    Node.js Backend   │
                    │       Render         │
                    └──────────┬───────────┘
                               │
                               │ Mongoose
                               ▼
                    ┌──────────────────────┐
                    │    MongoDB Atlas     │
                    │      Database        │
                    └──────────────────────┘
                               ▲
                               │
                               │ REST API
                    ┌──────────┴───────────┐
                    │    Admin Panel       │
                    │       Vercel         │
                    └──────────────────────┘
```

---

## ✨ Features

### 👤 User Features

* User registration and login
* JWT-based authentication
* Doctor listing
* Doctor details
* Appointment booking
* Appointment history
* User profile management
* Profile update
* Secure API communication

### 🛠️ Admin Features

* Admin authentication
* Doctor management
* User management
* Appointment management
* Appointment status management
* Dashboard management
* Web message management

### ⚙️ Backend Features

* RESTful APIs
* Express.js server
* MongoDB database
* Mongoose ODM
* JWT authentication
* Password hashing using bcrypt
* CORS configuration
* Environment variable configuration
* API logging using Morgan

---

## 🛠️ Technologies Used

### Frontend

* React.js
* Vite
* JavaScript
* HTML5
* CSS3
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* Morgan
* CORS

### Deployment

* **Vercel** – User Frontend
* **Vercel** – Admin Panel
* **Render** – Backend/API
* **MongoDB Atlas** – Database

### Development Tools

* VS Code
* Git
* GitHub
* Postman
* MongoDB Atlas

---

## 📁 Project Structure

```text
MediSlot/
│
├── admin-panel/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .env
│
├── server-with-client/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── ckient/
│   │   ├── src/
│   │   ├── public/
│   │   ├── package.json
│   │   └── vercel.json
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🔐 Authentication

MediSlot uses **JWT-based authentication**.

The authentication flow is:

```text
User
 ↓
Login / Register
 ↓
Backend API
 ↓
JWT Token
 ↓
Token stored on client
 ↓
Authenticated API Requests
```

The frontend sends the authentication token with protected API requests.

---

## 📅 Appointment Flow

```text
User Login
    ↓
Browse Doctors
    ↓
Select Doctor
    ↓
Choose Appointment
    ↓
Book Appointment
    ↓
Appointment Stored in MongoDB
    ↓
Admin Can Manage Appointment
```

---

## 🌐 API Routes

The backend API base URL is:

```text
https://medislot-backend-hz9o.onrender.com/api/v1
```

Main API modules include:

```text
/api/v1/user
/api/v1/doctor
/api/v1/appointment
/api/v1/webmessage
/api/v1/test
```

---

## 💻 Run Project Locally

### 1. Clone Repository

```bash
git clone https://github.com/Sanketpardhi2006/MediSlot.git
cd MediSlot
```

### 2. Backend

```bash
cd server-with-client
npm install
npm start
```

### 3. User Frontend

Open another terminal:

```bash
cd server-with-client/ckient
npm install
npm run dev
```

### 4. Admin Panel

Open another terminal:

```bash
cd admin-panel
npm install
npm run dev
```

---

## 🔑 Environment Variables

### User Frontend

```env
VITE_BASEURL=https://medislot-backend-hz9o.onrender.com/api/v1
```

### Admin Panel

```env
VITE_BASEURL=https://medislot-backend-hz9o.onrender.com/api/v1
```

### Backend

Backend environment variables should contain the MongoDB connection string and authentication secrets.

**Never commit `.env` files or passwords to GitHub.**

---

## 📌 Important Links

| Resource             | Link                                                              |
| -------------------- | ----------------------------------------------------------------- |
| 👤 User Application  | https://medi-slot-cyaqqd5tn-sanketpardhi2006s-projects.vercel.app |
| 🛠️ Admin Panel      | https://medi-slot-w38e.vercel.app                                 |
| ⚙️ Backend API       | https://medislot-backend-hz9o.onrender.com                        |
| 💻 GitHub Repository | https://github.com/Sanketpardhi2006/MediSlot                      |

---

## 🎯 What I Learned From This Project

Through this project, I worked with:

* MERN stack development
* React component development
* React Router
* REST API integration
* Axios
* Node.js and Express.js
* MongoDB and Mongoose
* JWT authentication
* Password hashing
* CRUD operations
* Role-based application structure
* Git and GitHub
* Environment variables
* Vercel deployment
* Render deployment
* MongoDB Atlas
* Connecting frontend, backend and database in a production environment

---

## 👨‍💻 Developer

**Sanket Pardhi**

GitHub:
https://github.com/Sanketpardhi2006

LinkedIn:
https://linkedin.com/in/sanket-pardhi-256a042b4

---

## ⭐ Project

If you find this project useful, consider giving the repository a ⭐ on GitHub.
