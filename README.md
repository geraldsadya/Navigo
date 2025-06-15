# 🗂️ Navigo Board – Real-Time Kanban Task Manager

A **sleek and responsive** Single Page Application (SPA) built to help non-profits and small teams **organize tasks visually and in real-time**.  
Manage your workflow, assign tasks, and track progress — all with drag-and-drop ease.

---

## 📸 Screenshots & Demo

### 🖥️ Desktop View
![Desktop Dashboard](./screenshots/desktop-dashboard.png)
*Main kanban board with drag-and-drop functionality*

![Task Management](./screenshots/task-management.png)
*Creating and editing tasks with detailed forms*

### 📱 Mobile Experience
<div align="center">
  <img src="./screenshots/mobile-board.png" alt="Mobile Board View" width="300"/>
  <img src="./screenshots/mobile-task-edit.png" alt="Mobile Task Edit" width="300"/>
</div>
*Fully responsive design optimized for mobile devices*

### 🎬 Live Action Demo
![Drag and Drop Demo](./gifs/drag-drop-demo.gif)
*Smooth drag-and-drop task movement between columns*

![Real-time Sync](./gifs/realtime-sync.gif)
*Real-time updates across multiple browser sessions*

![Authentication Flow](./gifs/auth-flow.gif)
*Secure login and registration process*

---

## 🎯 Key Features

- 🖱 **Drag-and-Drop Kanban Board** – Move tasks between columns smoothly
- 🔥 **Real-Time Updates** – Powered by Firebase Firestore
- 🔐 **Authentication** – Secure login with Firebase Auth
- 🎨 **Modern UI** – Built using Material UI v5 for a clean, polished look
- 📱 **Mobile Responsive** – Optimized for both desktop and mobile users

---

## 🚀 Live Demo

🌍 [navigo-board.netlify.app](https://geraldsadya-navigo-board.netlify.app/)

> Login required – you can test using a dummy account or your own Firebase setup.

---

## 🛠 Installation & Setup

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/geraldsadya/your-repo-name.git
cd your-repo-name
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Add Firebase Config**
Create a `.env` file or directly add your Firebase config to the app (only for testing).

```js
// Example
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  ...
}
```

### **4️⃣ Run the App**
```bash
npm run dev
```

---

## 🧠 How It Works

- ✅ Tasks are stored in Firestore and synced across clients in real-time
- 🔐 Firebase Auth ensures only registered users can manage boards
- 🎨 UI dynamically updates as changes are made

---

## 🧰 Tech Stack

| Layer        | Tools Used                     |
|--------------|--------------------------------|
| Frontend     | React.js, Material UI (MUI v5) |
| Backend (Realtime) | Firebase (Auth + Firestore)        |
| Styling      | CSS, MUI Components            |

---

## 📱 UI/UX Highlights

### Color Scheme & Design
![Color Palette](./screenshots/color-palette.png)
*Carefully chosen colors for accessibility and visual appeal*

### Component Showcase
![Components Overview](./screenshots/components-showcase.png)
*Material UI components customized for the kanban workflow*

### Loading States & Animations
![Loading Demo](./gifs/loading-animations.gif)
*Smooth loading states and micro-interactions*

---

## 💡 Future Enhancements

- 📆 Add deadlines + due date reminders  
- 🧑‍🤝‍🧑 Team tagging & user-based access  
- 📈 Analytics dashboard for task progress  
- 🌐 Shareable board invite links  
- 🗃️ Task archiving + board history

---

## 🎖 Why Use This?

✔ Real-time sync, no refresh required  
✔ Drag-and-drop UI with intuitive controls  
✔ Firebase-secured and scalable  
✔ Great base project for portfolio or startup MVP

---

## 📁 Project Structure

```
navigo-board/
├── screenshots/          # 📸 UI screenshots
│   ├── desktop-dashboard.png
│   ├── mobile-board.png
│   └── task-management.png
├── gifs/                # 🎬 Demo animations
│   ├── drag-drop-demo.gif
│   ├── realtime-sync.gif
│   └── auth-flow.gif
├── src/
│   ├── components/
│   ├── firebase/
│   └── styles/
└── README.md
```

---

## 🧑‍💻 Built By

Crafted with precision by [Gerald Sadya](https://github.com/geraldsadya)  
🚀 Passionate about building tools that are both beautiful and functional.

---

## ⚖ License

📜 MIT License — Feel free to fork, clone, and enhance. Contributions welcome!

---

⭐ **If this helped you or inspired you, please star the repo and share.**  
Let's make productivity feel good.
