# 🗂️ Navigo Board – Real-Time Kanban Task Manager

A **sleek and responsive** Single Page Application (SPA) built to help non-profits and small teams **organize tasks visually and in real-time**.  
Manage your workflow, assign tasks, and track progress — all with drag-and-drop ease.

## 📸 Screenshot

![Screen Recording 2025-06-15 at 20 02 01 (1)](https://github.com/user-attachments/assets/b814f646-2c69-486d-bfe4-2ac0d0162661)


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

## 🧑‍💻 Built By

Crafted with precision by [Gerald Sadya](https://github.com/geraldsadya)  
🚀 Passionate about building tools that are both beautiful and functional.

---

## ⚖ License

📜 MIT License — Feel free to fork, clone, and enhance. Contributions welcome!

---

⭐ **If this helped you or inspired you, please star the repo and share.**  
Let's make productivity feel good.
