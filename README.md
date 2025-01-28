# Task Manager

A simple web-based Task Manager application that allows users to **Create, Read, Update, and Delete (CRUD) tasks**. This application has a **frontend (HTML, CSS, JavaScript)** and a **backend (Node.js, Express, MySQL)**.

## Features
- ✅ Add new tasks
- ✅ Edit existing tasks with a **popup modal**
- ✅ Delete tasks
- ✅ Real-time UI updates with **notifications**
- ✅ Backend API with **Express & MySQL**
- ✅ Clean **folder structure**

---

## 🚀 Tech Stack

### **Frontend**
- HTML, CSS, JavaScript (Vanilla)
- Responsive UI
- Notifications & Modals for better UX

### **Backend**
- Node.js & Express.js
- MySQL Database
- RESTful API

---

## 📂 Project Structure
```sh
task-manager/
│── client/               # Frontend
│   ├── index.html        # Main UI
│   ├── styles.css        # Styling
│   ├── script.js         # Frontend logic
│
│── server/               # Backend
│   ├── config/           # Database config
│   ├── controllers/      # Route logic
│   ├── routes/           # API routes
│   ├── node_modules/     # Node dependencies
│   ├── package.json      # Node package file
│   ├── package-lock.json # Package lock file
│   ├── server.js         # Main Express Server
│
│── README.md             # Documentation
```

---

## ⚙️ Setup Instructions

### **1️⃣ Prerequisites**
Make sure you have the following installed:
- **Node.js** (v14+)
- **MySQL Database**
- **Git** (optional)

### **2️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/task-manager.git
cd task-manager
```

### **3️⃣ Install Backend Dependencies**
```sh
cd server
npm install
```

### **4️⃣ Set Up MySQL Database**
```sh
mysql -u root -p
CREATE DATABASE task_manager_db;
USE task_manager_db;
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

Update `server/config/db.config.js` with your MySQL credentials.

---

## ▶️ Running the Application

### **5️⃣ Start the Backend Server**
```sh
cd server
npm start
```
The backend runs on: `http://localhost:3000`

### **6️⃣ Start the Frontend**
Simply open `client/index.html` in your browser.

OR, if using **Live Server Extension** (VSCode):
```sh
code client
# Open index.html and launch Live Server
```

---

## 🔗 API Endpoints
```sh
GET    /tasks        # Get all tasks
POST   /tasks        # Add a new task
PUT    /tasks/:id    # Update a task
DELETE /tasks/:id    # Delete a task
```

---

## 📌 Deployment (Optional)

### **🌎 Deploy Backend**
```sh
git push heroku main
```
Set up a **MySQL Database on AWS, Supabase, or PlanetScale**.

### **🌍 Deploy Frontend**
```sh
git push origin main
```
Use **Netlify, Vercel, or GitHub Pages**.
Ensure `script.js` points to the **deployed backend URL**.

---

## 🎥 Submission Instructions
```sh
git add .
git commit -m "Initial commit"
git push origin main
```
Record a **Video Demo** *(using Loom or OBS)* and submit to `hr@theexpertscloud.com` with **GitHub link + Video walkthrough**.

---

## 🎯 Future Enhancements
- 🔒 **Authentication** (Login/Signup)
- 📅 **Due Dates** for tasks
- 🔍 **Search & Filters**
- 📱 **Mobile Responsive UI**

---

## 🙌 Contributing
Contributions are welcome! Feel free to **fork** and submit a **pull request**. 😊

---

## 📝 License
This project is open-source and available under the **MIT License**.

---

**💡 Need Help?**
If you have any issues, feel free to **open an issue** or **contact me** at `meharjamil47@gmail.com`.
Happy coding! 🚀

