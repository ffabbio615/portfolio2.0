# Portfolio 2.0

A personal portfolio developed as an interactive desktop experience inspired by macOS.

Instead of using a traditional portfolio layout, the project recreates a desktop environment where visitors can interact with folders, windows, applications and interface elements to explore my professional experience, projects, skills, curriculum and contact information.

🌐 **Live:** https://portfolio2-0-kappa-six.vercel.app/

## ✨ Features

- macOS-inspired desktop interface
- Interactive desktop folders and icons
- Draggable windows
- Window minimize, maximize and close controls
- Dynamic window layering and focus management
- Dock interface
- Minimized windows management
- Persistent window positions using Local Storage
- Interactive desktop folders
- Internal window navigation through sidebars
- Dynamic window content
- Boot screen with real asset preloading progress
- Dynamic Top Bar with date, time and location
- Automatic location detection
- Automatic language selection based on the visitor's location
- Portuguese and English interface
- Persistent language preference using Local Storage
- Manual language selection
- Light and dark interface themes
- Responsive interface
- Interactive project portfolio
- Detailed project pages with technologies, features and external links
- Curriculum section with different CV versions
- Interactive curriculum viewer
- Professional experience and skills sections
- Contact form integrated with the backend API
- WhatsApp, LinkedIn, Instagram and email contact options
- GitHub repository access
- AI-powered portfolio assistant
- AI assistant responses based exclusively on authorized portfolio information
- Backend API integration
- Automatic AI provider fallback
- Backend wake-up mechanism

## 🌐 Internationalization

The portfolio supports both Portuguese and English through `i18next` and `react-i18next`.

On the visitor's first access, the application uses the browser's geolocation permission to determine the visitor's country.

The current behavior is:

- Visitors located in Brazil are automatically shown the Portuguese interface.
- Visitors located outside Brazil are automatically shown the English interface.
- If the location cannot be determined, English is used as the fallback language.
- Once a language is selected, the preference is stored in Local Storage.
- A manually selected language takes priority over automatic location detection on subsequent visits.

The language selection is available through the portfolio settings menu.

## 🖥️ Desktop Experience

The portfolio is structured as an interactive desktop environment rather than a conventional website.

Visitors can interact with:

- Desktop folders
- Applications in the Dock
- Windows
- Window controls
- Sidebars
- Internal content sections
- Minimized windows

Windows maintain their position and state through the browser's Local Storage, allowing the desktop environment to preserve part of the visitor's interaction between sessions.

## 📂 Portfolio Sections

The desktop environment provides access to different areas of the portfolio, including:

### About Me

Professional background, experience and personal information relevant to my career.

### Curriculum

Different curriculum versions are available through the portfolio, including:

- Portuguese CV
- European Portuguese CV
- English CV

The portfolio also includes an interactive curriculum viewer.

### Projects

The projects section presents detailed information about selected projects, including:

- Project description
- Main functionalities
- Technologies used
- Live project links
- Front-end repositories
- Back-end repositories when applicable

Current projects include:

- Pronto-Abrigo
- Prime Language School
- Médicos & Dentistas
- Vocabary
- CapiWaras
- Portfolio 2.0

### Skills

Technical and soft skills are presented through dedicated sections.

Technical skills include technologies and concepts related to:

- Front-end development
- Back-end development
- Databases
- Authentication
- APIs
- Development tools
- UI/UX
- Web development

### Contact

The portfolio includes a contact form connected to the backend API, allowing visitors to send messages directly through the application.

Additional contact channels are also available through WhatsApp, LinkedIn, Instagram and email.

## 🤖 AI Portfolio Assistant

The portfolio includes an AI assistant that allows visitors and recruiters to ask questions about my professional background directly through the portfolio interface.

The front-end communicates with a separate backend API.

The current AI request flow uses Gemini as the primary provider and Mistral AI as a fallback provider.

The backend is responsible for:

1. Receiving the visitor's question.
2. Detecting the language of the question.
3. Providing the AI model with authorized professional information.
4. Sending the request to the primary AI provider.
5. Falling back to the secondary provider when necessary.
6. Returning the generated response to the portfolio.

The AI assistant is restricted to information contained in the portfolio's professional data.

This architecture is designed to reduce the possibility of unsupported information being generated by the assistant.

```text
Visitor
   ↓
Portfolio
   ↓
Backend API
   ↓
Language Detection
   ↓
Professional Data + Prompt
   ↓
Gemini
   ↓
Mistral fallback
   ↓
Backend API
   ↓
Portfolio

```


API keys and other sensitive credentials are stored exclusively on the backend and are never exposed in the front-end application.

## 📧 Contact API

The portfolio uses a separate Node.js API to process contact form submissions.

The front-end sends the visitor's information to the backend, which is responsible for processing and sending the message.

The backend uses Resend for email delivery.

The visitor's email is used as the reply-to address, allowing the portfolio owner to respond directly to the person who submitted the form.

## 📍 Location

The Top Bar includes dynamic location information.

The portfolio uses browser geolocation to obtain the visitor's approximate coordinates and a reverse-geocoding service to determine the corresponding location.

Location information is also used during the first visit to determine the default interface language.

The application does not require location access for the portfolio itself to function.

## ⚙️ Settings

The settings menu provides interface preferences such as:

- Language selection
- Portuguese
- English
- Light theme
- Dark theme
- Portfolio information

Language preferences are persisted using Local Storage.

## 🛠️ Technologies

### Front-end
- React
- TypeScript
- Vite
- SASS / SCSS
- HTML5
- CSS3
- i18next
- react-i18next
- Local Storage
- Browser APIs
- Fetch API
- Async/Await
- Promises

### Back-end

The portfolio communicates with a separate Node.js API.

The backend is responsible for:

- AI integration
- Contact form processing
- Language detection
- Professional data management
- API communication

Main technologies include:

- Node.js
- Express
- TypeScript
- Google Gemini API
- Mistral AI API
- Resend

The backend repository is private and API credentials are never exposed in the front-end application.

### Deployment
- Vercel — Front-end
- Render — Back-end
- Supabase — Database services used by the project ecosystem

## 📁 Project Structure
```text
portfolio2.0/
├── public/
│   ├── font/
│   ├── icon/
│   └── image/
│
├── src/
│   ├── components/
│   │   ├── Desktop/
│   │   ├── Dock/
│   │   ├── TopBar/
│   │   └── ...
│   │
│   ├── hooks/
│   ├── i18n/
│   │   ├── i18n.ts
│   │   └── locales/
│   │       ├── pt.ts
│   │       └── en.ts
│   │
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

- Node.js
- npm
- Git

### 1. Clone the repository
```text
git clone https://github.com/ffabbio615/portfolio2.0.git
```
### 2. Access the project directory
```text
cd portfolio2.0
```
### 3. Install dependencies
```text
npm install
```
### 4. Start the development server
```text
npm run dev
```

Vite will start the local development server and display the address in the terminal, usually:

```text
http://localhost:5173
```

Open the address in your browser.

## 📦 Production Build

To generate a production build:

```text
npm run build
```

The compiled application will be generated inside the dist directory.

To preview the production build locally:

```text
npm run preview
```

## 🧹 Lint

To run ESLint:

```text
npm run lint
```

## 🌐 Deployment

The front-end is deployed on Vercel.

Production builds are generated using:

```text
npm run build
```

The application communicates with a separate backend API hosted on Render.

The backend API is private and is not included in this repository.

## 🔐 Security

Sensitive information is not stored in the front-end application.

API credentials and other private configuration values are stored exclusively on the backend.

The front-end communicates with the backend through HTTP requests without exposing the AI provider credentials to the browser.

## 👨‍💻 Author

#### Fábio Marques Melo

Front-End / Full-Stack Developer
LinkedIn: https://www.linkedin.com/in/fabiomarquesme/

## 📄 License

This project was developed as a personal portfolio.

Its source code is publicly available for demonstration and professional evaluation purposes.
