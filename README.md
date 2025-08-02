🌍 Eco_Facts
Eco_Facts is a responsive React-based web application that raises environmental awareness by showcasing live climate statistics, rotating daily eco-facts, and user authentication using Firebase. It empowers users to stay informed and inspired to act for the planet.

📌 Features
🔐 User Authentication (Firebase login/register)

📊 Live Climate Stats (CO₂ levels, Arctic ice loss, etc.)

🌿 Rotating Environmental Facts with image, source, and category

🖼️ Glassmorphism UI for modern aesthetic

📩 Contact/Feedback Form

🔄 Auto-refreshing UI sections

📱 Fully Responsive Design

☁️ Vercel Deployment with Environment Variables

🚀 Live Demo
https://eco-facts-ibm.vercel.app/

🧪 Technologies Used
Tech	Purpose
React	Frontend UI
Bootstrap 5	Layout and responsiveness
CSS Modules	Scoped styling
Firebase	Auth and config handling
Vercel	Deployment
Google Fonts & Icons8	Styling and assets

📁 Folder Structure
pgsql
Copy
Edit
eco_facts/
├── public/
│   └── forest-bg.png
├── src/
│   ├── components/
│   │   ├── NavigationBar.jsx
│   │   ├── FactCard.jsx
│   │   ├── StatsSection.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTopButton.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── styles/
│   │   ├── Login.css
│   │   ├── Register.css
│   │   └── NavigationBar.module.css
│   ├── data/
│   │   └── facts.json
│   ├── firebase/
│   │   └── config.js
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .gitignore
├── vite.config.js
├── package.json
└── README.md
🔐 Environment Variables
Create a .env file in the root directory and add:

ini
Copy
Edit
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
Make sure .env is listed in .gitignore.

📦 Installation & Setup
bash
Copy
Edit
# Clone the repository
git clone https://github.com/your-username/eco_facts.git
cd eco_facts

# Install dependencies
npm install

# Start the development server
npm run dev
✅ Deployment
This project is deployed on Vercel.

Steps:

Push your code to GitHub

Go to vercel.com and import the GitHub repo

Add your environment variables in the Vercel dashboard

Deploy!

🧪 Testing
Manual functional testing across devices (desktop, mobile)

Tested form validation, error handling, and responsive layout

Auto-refresh and stat APIs tested via logging and network tab

📄 License
This project is licensed under the MIT License.

📬 Contact
Made with 💚 by MD HUSAIN
For suggestions and contributions, feel free to open an issue or pull request.
