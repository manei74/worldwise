# Worldwise

## 🌍 About the Project

Worldwise is a Single Page Application (SPA) built using React + Vite. It is a travel tracking that allows users to mark visited cities on a world map, add notes about their experiences, and organize their travel history. The app helps users keep track of their journeys and share their adventures with friends.

## 🚀 Features

Mark Visited Cities: Users can click on the map to add cities they have visited.

Add Notes: Each city can have a personal note attached to remember key details.

City & Country Organization: Cities are grouped under countries for better tracking.

GPS Positioning: A "Use My Position" button centers the map on the user's current location.

Delete Entries: Users can remove cities from their history.

Interactive Map: A dynamic map helps visualize travel history.

## 🌍 Live Demo

Check out the live version here:  
[https://manei74.github.io/worldwise/](https://manei74.github.io/worldwise/)

## 🛠️ Technologies Used

React – Frontend framework

Vite – Build tool for fast development

React Router – Client-side navigation

Context API – State management for authentication and city data

Render.com – For API hosting

GitHub Pages – For deployment

## 🛠️ Setup & Installation

Clone the repository:

git clone https://github.com/manei74/worldwise.git
cd worldwise

Install dependencies:

npm install

Run the development server:

npm run dev

Open the app in your browser at http://localhost:5173/

## 🌍 API & Data Fetching

The application fetches city data from an API hosted on Render.com:🔗 API Endpoint: https://api-worldwise.onrender.com/cities

Fetching Data in App.jsx

Uses useEffect to fetch city data when the app loads.

Manages API requests using dispatch for state updates.

## 🛠 Deployment

The project is deployed using GitHub Pages.

Deployment Steps:

Build the project:

npm run build

Deploy using GitHub Pages:

npm run deploy

## 🔜 Upcoming Features

🔐 User Authentication (Login & Logout functionality)

🌍 City Search & Filtering
