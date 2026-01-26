# MVC Inventory Project

## Branch: `master11`

This branch includes new UI and safety features added manually on top of the existing MVC Inventory system.

---

## ✨ Features Added

### 🗑️ Delete Confirmation Feature
A delete confirmation system is implemented to prevent accidental deletions.

**Implementation details:**
- A `public` folder is created manually.
- Inside `public`:
  - `main.js` → Handles delete confirmation logic
  - `css/` → Contains styling files
- Confirmation is triggered before executing any delete operation.

---

### 🎨 Header Background Color Feature
Header background color is added using **manual CSS styling**.

**How it’s implemented:**
- Custom CSS files inside `public/css`
- No external UI frameworks
- Fully manual styling approach

---
## 📁 Project Structure
```
MVC INVENTORY PROJECT
│
├── public/
│ ├── css/
│ │ └── headers.css
│ ├── images/
│ └── main.js
│
├── src/
│ ├── controllers/
│ │ └── product.controller.js
│ ├── middlewares/
│ │ └── validation.middleware.js
│ ├── models/
│ └── views/
│ ├── layout.ejs
│ ├── products.ejs
│ ├── new-product.ejs
│ ├── update-product.ejs
│ └── products.css
│
├── index.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

## ⚙️ Technologies Used

- Node.js
- Express.js
- MVC Architecture
- EJS (Template Engine)
- Vanilla JavaScript
- Manual CSS Styling

---

## 📌 Notes

- No frontend frameworks used
- Manual UI styling
- Client-side delete confirmation logic
- Clean MVC separation
- Public folder used for static assets

---

## 🚀 Setup & Run

```bash
npm install
node index.js
```
# 👨‍💻 Author

Mrutunjaya Panda
## 📁 Project Structure

