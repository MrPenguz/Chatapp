# 💬 Pengu Chat

A real-time chat application with authentication, messaging, and image sharing capabilities. Built using **React, Express, Socket.io, and MongoDB**.
![Chat Interface](https://i.imgur.com/L9pmJtk.png)

## 🚀 Features

- 🔐 **User Authentication** (Sign up, Login with JWT & Cookies)
- 💬 **Real-time Messaging** (Socket.io-powered)
- 📸 **Image Upload Support** (Sends large images)
- 🗂️ **Chat History** (Stored in MongoDB)
- 🔔 **Online Status Indicators**
- 🌍 **Cross-Origin Communication** (CORS-enabled backend)

## 🛠️ Tech Stack

- **Frontend:** React (Vite) + Tailwind CSS
- **Backend:** Node.js + Express.js + Socket.io
- **Database:** MongoDB + Mongoose
- **Authentication:** JWT + Cookies

## 🔧 Installation & Setup

This project requires several environment variables to be set up in the `.env` file for the backend.

## 🧰 Required Environment Variables

Below are the variables you need to add to your `.env` file make one in /Backend:

### **Database Configuration**

```env
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
JWT_SECRET=your_jwt_secret_key
PORT=5001
NODE_ENV=development
```

### **Build The App**

```
npm run build
```

### **Start The App (for production)**

```
npm start
```

### **Start The App (for development)**

```
npm run dev
```
