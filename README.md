# 🧠 FocusDeck

**FocusDeck** is a minimal Pomodoro timer and daily task manager designed to help you stay productive and focused. It tracks your completed Pomodoro sessions per day, provides a stats view, and works as a Progressive Web App (PWA) and Chrome Extension.

---

## ✨ Features

- ⏱️ Pomodoro timer (25/5 cycle)
- ✅ Task manager (add, complete, delete tasks)
- 📊 Daily session tracking
- 📲 Installable PWA support
- 🧩 Chrome Extension (popup)
<!-- - 📅 Stats page with last 7 days summary -->

---

## 🛠️ Tech Stack

- React + Vite
- basic CSS 
- React Router
- LocalStorage for persistent data
- `vite-plugin-pwa` for PWA support
- Chrome Extension using Manifest V3

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/pratap360/focusdeck.git
```
``` bash
cd focusdeck
```

### 2. Install Dependency

``` bash
npm install
```

### 3. Run the app
``` bash
npm run dev
```

### 4.Build for Productin
``` bash
npm run preview
```

### 📦 Load as Chrome Extension
Run ```npm run build```

Go to ```chrome://extensions```

Enable Developer Mode

Click "Load unpacked" and select the dist/ folder