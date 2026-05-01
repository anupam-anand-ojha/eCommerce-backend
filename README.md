# 🛒 E-Commerce Backend API

A scalable and secure **E-Commerce Backend** built using modern technologies to handle product management, user authentication, orders, and payments.

---

## 🚀 Features

### 🔐 Authentication & Authorization

* User registration & login (JWT based)
* Role-based access (Admin / User)
* Secure password hashing

### 🛍️ Product Management

* Create, update, delete products (Admin)
* View all products with filters & search
* Product categories support

### 🧾 Order Management

* Place orders
* View user order history
* Admin can manage all orders
* Order status updates (Pending, Shipped, Delivered)

### 💳 Payment Integration

* Payment gateway support (Stripe / Razorpay ready)
* Secure transactions

### 📦 Cart System

* Add to cart
* Remove items
* Update quantity

---

## 🏗️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JWT
* **Others:** bcrypt, dotenv, cors

---

## 📁 Project Structure

```
ecommerce-backend/
│── controllers/
│── models/
│── routes/
│── middleware/
│── config/
│── utils/
│── .env
│── server.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo

```bash
git clone https://github.com/your-username/ecommerce-backend.git
cd ecommerce-backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the server

```bash
npm run dev
```

---

## 📡 API Endpoints (Sample)

### Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

### Products

* `GET /api/products`
* `POST /api/products` (Admin)
* `PUT /api/products/:id`
* `DELETE /api/products/:id`

### Orders

* `POST /api/orders`
* `GET /api/orders/my`
* `GET /api/orders` (Admin)

---

## 🧪 Testing

Use tools like:

* Postman
* Thunder Client

---

## 📌 Future Improvements

* Wishlist feature
* Reviews & ratings
* Advanced analytics dashboard
* Microservices architecture

---

## 👨‍💻 Author

Developed by **Anand Anupam**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
