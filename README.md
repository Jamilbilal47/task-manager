# Task Manager

A simple web-based Task Manager application that allows users to **Create, Read, Update, and Delete (CRUD) tasks**. This application has a **frontend (HTML, CSS, JavaScript)** and a **backend (Node.js, Express, MySQL)** deployed on **Railway and Netlify**.

## **🚀 Live Demo**
- **Frontend:** [Task Manager UI](https://transcendent-starlight-b0fa02.netlify.app/)
- **Backend API:** [Task Manager API](https://task-manager-production-1d83.up.railway.app/tasks)

---

## **📌 Features**
✅ **Add new tasks**
✅ **Edit tasks using a popup modal**
✅ **Delete tasks**
✅ **Mark tasks as completed/incomplete**
✅ **Real-time UI updates with notifications**
✅ **Mobile Responsive Design**
✅ **Backend API with Express & MySQL (Aiven)**

---

## **🚀 Tech Stack**
### **Frontend**
- HTML, CSS, JavaScript
- Responsive UI with CSS Media Queries
- Toast notifications for better UX

### **Backend**
- Node.js & Express.js
- MySQL Database (Hosted on Aiven)
- RESTful API deployed on Railway

---

## **📂 Project Structure**
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
│   ├── server.js         # Main Express Server
│
│── README.md             # Documentation
```

---

## **⚙️ Setup Instructions**

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

### **4️⃣ Set Up MySQL Database** (For Local Development)
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

Update `server/.env` with your MySQL credentials:
```env
DB_HOST=localhost
DB_USER=root
DB_PASS=root
DB_NAME=task_manager_db
DB_PORT=3306
```

---

## **▶️ Running the Application**

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

## **🔗 API Endpoints**
```sh
GET    /tasks        # Get all tasks
POST   /tasks        # Add a new task
PUT    /tasks/:id    # Update a task
DELETE /tasks/:id    # Delete a task
```

---

## **📌 Deployment Details**
### **🌎 Backend (Railway + Aiven MySQL)**
- Hosted on [Railway](https://railway.app/)
- Database hosted on [Aiven MySQL](https://aiven.io/)

### **🌍 Frontend (Netlify)**
- Hosted on [Netlify](https://www.netlify.com/)
- Updated API URL in `script.js` to use live backend

---

## **🎥 Submission Instructions**
```sh
git add .
git commit -m "Updated README and final deployment details"
git push origin main
```
Record a **Video Demo** *(using Loom or OBS)* and submit to `hr@theexpertscloud.com` with **GitHub link + Video walkthrough**.

---

## **🎯 Future Enhancements**
- 🔒 **Authentication** (User login/signup)
- 📅 **Due Dates for tasks**
- 🔍 **Search & Filters**
- 📱 **More UI Improvements**

---

## **🙌 Contributing**
Contributions are welcome! Feel free to **fork** and submit a **pull request**. 😊

---

## **📝 License**
This project is open-source and available under the **MIT License**.

---

**💡 Need Help?**
If you have any issues, feel free to **open an issue** or **contact me** at `meharjamil47@gmail.com`.
Happy coding! 🚀

