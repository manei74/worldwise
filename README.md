## 🌍 **Worldwise**

Worldwise is a Single Page Application (SPA) built using React + Vite. It is a travel tracking application that allows users to mark visited cities on a world map, add notes about their experiences, and organize their travel history. The app helps users keep track of their journeys and share their adventures with friends.

## 🌍 **Live Demo**

Check out the live version here:  
[https://manei74.github.io/worldwise/](https://manei74.github.io/worldwise/)

## 🚀 **Features**

- **Mark Visited Cities:**  
  Users can click on the map to add cities they have visited.

- **Add Notes:**  
  Each city can have a personal note attached to remember key details.

- **City & Country Organization:**  
  Cities are grouped under countries for better tracking.

- **GPS Positioning:**  
  A "Use My Position" button centers the map on the user's current location.

- **Delete Entries:**  
  Users can remove cities from their history.

- **Interactive Map:**  
  A dynamic map created using **[Leaflet](https://leafletjs.com/)** to visualize travel history.

- **User Authentication:**  
  Firebase Authentication is used to manage user sign-in and sign-up.

## 🛠️ **Technologies Used**

- **React** – Frontend framework
- **Vite** – Build tool for fast development
- **React Router** – For client-side navigation
- **Context API** – State management for authentication and city data
- **Firebase** – For user authentication
- **Leaflet** – Library for creating interactive maps
- **Render.com** – API hosting
- **GitHub Pages** – Deployment

## 📂 **Project Structure**

```plaintext
worldwise/
│── public/        # Static assets (e.g., images)
│── src/
│   ├── components/  # Reusable UI components
│   ├── contexts/    # Context providers (Auth, Cities)
│   ├── pages/       # Page components (Homepage, Login, etc.)
│   ├── App.jsx      # Main application component
│   ├── main.jsx     # Entry point
│── vite.config.js   # Vite configuration
│── package.json     # Dependencies & scripts
│── README.md        # Project documentation
