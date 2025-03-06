Worldwise

🌍 About the Project

Worldwise is a Single Page Application (SPA) built using React + Vite. It is a travel tracking application that allows users to mark visited cities on a world map, add notes about their experiences, and organize their travel history. The app helps users keep track of their journeys and share their adventures with friends. 

🚀 Technologies Used

React (Frontend framework)

Vite (Build tool for fast development)

React Router (Client-side navigation)

Context API (State management for authentication and city data)

Render.com (For API hosting)

GitHub Pages (For deployment)

📂 Project Structure

worldwise/
│── public/                  # Static assets (e.g., images)
│── src/
│   ├── components/          # Reusable UI components
│   ├── contexts/            # Context providers (Auth, Cities)
│   ├── pages/               # Page components (Homepage, Login, etc.)
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Entry point
│── vite.config.js           # Vite configuration
│── package.json             # Dependencies & scripts
│── README.md                # Project documentation

🔗 Live Demo

The project is deployed on GitHub Pages:
🔗 Live Website

🛠️ Setup & Installation

Clone the repository:

git clone https://github.com/manei74/worldwise.git
cd worldwise

Install dependencies:

npm install

Run the development server:

npm run dev

Open the app in your browser at http://localhost:5173/

🌍 API & Data Fetching

The application fetches city data from an API hosted on Render.com:
🔗 API Endpoint: https://api-worldwise.onrender.com/cities

Fetching Data in App.jsx

Uses useEffect to fetch city data when the app loads

Manages API requests using dispatch for state updates

async function fetchCities() {
  dispatch({ type: "loading" });
  try {
    const res = await fetch(`${BASE_URL}/cities`);
    const data = await res.json();
    dispatch({ type: "cities/loaded", payload: Object.values(data.cities || {}) });
  } catch {
    dispatch({ type: "rejected", payload: "There was an error loading cities" });
  }
}

🛠 Deployment

The project is deployed using GitHub Pages.

Deployment Steps:

Build the project:

npm run build

Deploy using GitHub Pages:

npm run deploy

Vite Configuration for GitHub Pages

Ensure vite.config.js includes the correct base path:

export default defineConfig({
  plugins: [react()],
  base: "/worldwise/", // ✅ Necessary for GitHub Pages
});

🔜 Upcoming Features

🔐 User Authentication (Login & Logout functionality)

🌍 City Search & Filtering

📌 Interactive Map with City Markers

📊 User Dashboard for Saved Cities
