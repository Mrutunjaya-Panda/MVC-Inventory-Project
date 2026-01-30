# 🏬 MVC Inventory Project

A full‑stack **MVC-based Inventory Management System** built using **Node.js, Express, EJS, Middleware, File Uploads, Authentication, and Sessions**.
This project demonstrates a complete real‑world backend architecture with authentication, product management, middleware pipelines, validation, file uploads, and session-based security.

> This repository contains **14 branches**, each representing progressive feature development and learning stages.

---

## 🚀 Features

### 🔐 Authentication System

* User Registration
* User Login
* Session-based Authentication
* Protected Routes
* Secure Logout

---

### 📦 Product Management (CRUD)

* ➕ Add New Product
* 📄 View All Products
* ✏️ Update Product
* ❌ Delete Product

---

### 🖼️ File Upload System

* Image upload using middleware
* File validation
* Single file upload handling
* Image preview in product list

---

### 🧩 Middleware Architecture

Custom middlewares used:

* `auth.middleware.js` → Route protection
* `file-upload.middleware.js` → File handling
* `validation.middleware.js` → Server-side validation
* `lastVisit.middleware.js` → User activity tracking

---

### 🕒 User Activity Tracking

* Last visit time stored
* Displayed on UI after login

---

### 🧱 MVC Architecture

* **Models** → Business logic & data handling
* **Views** → EJS templates
* **Controllers** → Request handling
* **Middlewares** → Request pipeline processing

---

### 🧠 Validation System

* Server-side validation
* Middleware-based validation pipeline
* Safe request processing

---

### 🎨 UI Features

* EJS Layouts
* Shared layout system
* Dynamic navbar
* Conditional navigation
* Responsive UI using Bootstrap
* Structured product table
* Image previews

---

## 🧩 Tech Stack

* **Node.js**
* **Express.js**
* **EJS**
* **express-session**
* **Multer (File Uploads)**
* **Bootstrap 5**
* **MVC Architecture**
* **Custom Middleware Pipeline**

---

## 📁 Project Structure

```
MVC-INVENTORY-PROJECT/
│
├── public/
│
├── src/
│   ├── controllers/
│   │   ├── product.controller.js
│   │   └── user.controller.js
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   ├── file-upload.middleware.js
│   │   ├── lastVisit.middleware.js
│   │   └── validation.middleware.js
│   │
│   ├── models/
│   │   ├── product.model.js
│   │   └── user.model.js
│   │
│   └── views/
│       ├── layout.ejs
│       ├── login.ejs
│       ├── register.ejs
│       ├── products.ejs
│       ├── new-product.ejs
│       └── update-product.ejs
│
├── index.js
├── server.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

## 🔐 Authentication Flow

1. User registers
2. User logs in
3. Session is created
4. Protected routes unlocked
5. Middleware validates access
6. User can manage inventory

---

## 🧪 Application Flow

```txt
Client Request
   ↓
Route
   ↓
Auth Middleware
   ↓
Validation Middleware
   ↓
File Upload Middleware
   ↓
Controller
   ↓
Model
   ↓
View Rendering
```

---

## 🛡️ Security Design

* Session-based auth
* Middleware route protection
* Backend validation
* Controlled file uploads
* Input sanitization
* Auth guards
* Protected routes

---

## 🧠 Learning Outcomes

* Real MVC implementation
* Express middleware pipelines
* File upload handling
* Auth system design
* Session management
* EJS layouts
* Backend validation
* Modular architecture
* Scalable project structure

---

## 🌱 Branch Strategy

This repository contains **14 branches**, each representing:

* Feature additions
* Architecture improvements
* Middleware implementations
* Refactors
* Learning stages
* Progressive enhancements

---

## ▶️ How to Run Locally

```bash
# Clone repo
git clone https://github.com/Mrutunjaya-Panda/MVC-Inventory-Project

# Go to project folder
cd MVC-Inventory-Project

# Install dependencies
npm install

# Start server
npm start
```

Open in browser:

```
http://localhost:3000
```

---

## ✨ Future Enhancements

* Database integration (MongoDB / PostgreSQL)
* Role-based access control (Admin/User)
* Product categories
* Search & filters
* Pagination
* REST API version
* JWT auth
* Admin dashboard
* Cloud image storage (S3 / Cloudinary)
* Dockerization

---

## 👨‍💻 Author

**Mrutunjaya Panda**
GitHub: [https://github.com/Mrutunjaya-Panda](https://github.com/Mrutunjaya-Panda)

---

## 📜 License

This project is for educational and learning purposes.

---

⭐ If you like this project, give it a star on GitHub!
