# Portfolio 2.0

A personal portfolio developed as an interactive desktop experience inspired by macOS.

Instead of using a traditional portfolio layout, the project recreates a desktop environment where visitors can interact with folders, windows, applications and interface elements to explore my professional experience, projects, skills and other information.

🌐 **Live:** https://portfolio2-0-kappa-six.vercel.app/

## ✨ Features

* macOS-inspired desktop interface
* Interactive desktop icons
* Draggable windows
* Window minimize, maximize and close controls
* Dynamic window layering and focus
* Dock interface
* Minimized windows management
* Persistent window positions using Local Storage
* Boot screen with real asset preloading progress
* Dynamic Top Bar with date, time and location
* Settings menu
* Responsive interface
* AI-powered portfolio assistant using Mistral AI

The AI assistant allows visitors and recruiters to ask questions about my professional background directly through the portfolio interface. The AI integration communicates with a separate backend API and is restricted to answering based on professional information provided by the portfolio.

## 🛠️ Technologies

### Front-end

* React
* TypeScript
* Vite
* SASS / SCSS
* HTML5
* CSS3
* Local Storage
* Browser APIs

### Back-end / AI

The portfolio communicates with a separate Node.js API responsible for securely integrating with the Mistral AI API.

The backend repository is private and API credentials are never exposed in the front-end application.

## 📁 Project Structure

```text
portfolio2.0/
├── public/
│   ├── font/
│   ├── icons/
│   └── images/
│
├── src/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   ├── App.tsx
│   ├── App.scss
│   └── main.tsx
│
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Running the Project Locally

### Requirements

Before starting, make sure you have installed:

* Node.js
* npm
* Git

### 1. Clone the repository

```bash
git clone https://github.com/ffabbio615/portfolio2.0.git
```

### 2. Access the project directory

```bash
cd portfolio2.0
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will start the local development server and display the address in the terminal, usually:

```text
http://localhost:5173
```

Open the address in your browser.

## 📦 Production Build

To generate a production build:

```bash
npm run build
```

The compiled application will be generated inside the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## 🧹 Lint

To run ESLint:

```bash
npm run lint
```

## 🤖 AI Integration

The portfolio includes an AI assistant powered by Mistral AI.

The front-end sends the visitor's question to a separate backend API. The backend is responsible for:

1. Receiving the question.
2. Providing the AI model with authorized professional information.
3. Sending the request to Mistral AI.
4. Returning the generated answer to the portfolio.

The model is instructed to answer exclusively using the professional information provided by the application, reducing the possibility of generating unsupported information.

```text
Portfolio
    ↓
Backend API
    ↓
Professional Data + Prompt
    ↓
Mistral AI
    ↓
Backend API
    ↓
Portfolio
```

API keys and other sensitive credentials are stored exclusively on the backend and are not included in this repository.

## 🌐 Deployment

The front-end is deployed on Vercel.

Production builds are generated using:

```bash
npm run build
```

## 👨‍💻 Author

**Fábio Marques Melo**

Front-End / Full-Stack Developer

GitHub: https://github.com/ffabbio615

## 📄 License

This project was developed as a personal portfolio. Its source code is publicly available for demonstration and professional evaluation purposes.
