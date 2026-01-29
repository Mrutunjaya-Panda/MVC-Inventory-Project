# MVC-Inventory-Project (master13 branch)

This branch focuses on **securing the application using session-based authentication** and improving user access control across the app.

---

## 🔐 Security Features

### ✅ Session-Based Authentication

* Implemented authentication using **session-id**
* User session is created after login
* Protected routes are accessible **only after authentication**

---

## 🚪 Logout Feature

```js
req.session.destroy()
```

* Proper logout implemented using session destruction
* Clears user session securely
* Prevents unauthorized access after logout

---

## 🧠 EJS Conditional Rendering

Layout logic added in `layout.ejs`:

### 🔹 If user is logged in:

* ❌ Register button hidden
* ❌ Login button hidden

### 🔹 If user is not logged in:

* ✅ Register button visible
* ✅ Login button visible

---

## 🔒 Access Control Behavior

* 🚫 Products page **cannot be accessed without login**
* 🚫 Users must **register + login first**
* 🔓 After authentication → products page becomes accessible

---

## 🎯 Purpose of This Branch

* Implement session security
* Apply authentication flow
* Secure routes
* Control UI based on login state
* Practice real-world MVC authentication

---

## 🧱 Tech Stack

* Node.js
* Express.js
* express-session
* EJS
* MVC Architecture

---

## 👤 Author

**Mrutunjaya Panda**

---

> This branch demonstrates real-world session security, protected routing, and dynamic UI rendering based on authentication state.
