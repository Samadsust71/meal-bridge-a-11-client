# 🍽️ Meal Bridge 

![Meal Bridge Preview](https://i.ibb.co.com/TMmH9QMH/Screenshot-62.png)

## 🔗 **Live Demo:** [Visit Meal Bridge](https://meal-bridge.web.app)

## Introduction

The **Meal Bridge** is a platform designed to reduce food waste by allowing users to **share, request, and manage food items** efficiently. The system implements **CRUD operations** to allow users to:
- **Add** new food items.
- **Retrieve** available food listings.
- **Update** existing food details.
- **Delete** food items when necessary.

Additionally, users can **request available food** and **manage requested items**, promoting a collaborative community-based food-sharing experience.

---

## 📌 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Future Enhancements](#future-enhancements)
- [Contributors](#contributors)


---

## 🚀 Installation

### Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (latest stable version)
- [Vite](https://vitejs.dev/) (for development and production builds)
- A package manager (npm or yarn)

### Steps to Install

1. **Clone the repository**:
   
   ```sh
   git clone https://github.com/Samadsust71/meal-bridge-a-11-client.git
   ```

2. Navigate into the project directory:

   ```sh
   cd meal-bridge-a-11-client
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

5. To build the project for production:

   ```sh
   npm run build
   ```

6. To preview the production build:

   ```sh
   npm run preview
   ```

---

## 🎯 Usage

Users Can:
- Register/Login to the platform.
- Browse available food listings.
- Add new food items to share with others.
- Update or delete their own food listings.
- Request food from other users.
- Manage their requested food items.

---

## 🌟 Features

- ✅ CRUD operations for food items
- ✅ User authentication (Firebase Auth)
- ✅ Food request and management system
- ✅ Responsive and modern UI with TailwindCSS
- ✅ Notifications and alerts for actions (SweetAlert2 & React Hot Toast)
- ✅ Optimized performance using React Query
- ✅ Carousel and animation for better user experience

---

## 📦 Dependencies

This project is built using modern frontend technologies. Below are the key dependencies:

### Core Dependencies
- **Frontend Framework**: `react`, `react-dom`
- **Routing**: `react-router-dom`
- **State Management**: `@tanstack/react-query`, `react-context-api`
- **UI Components**: `@radix-ui/react-slot`, `framer-motion`, `lucide-react`, `swiper`
- **Utilities**: `date-fns`, `match-sorter`, `sort-by`
- **Notifications**: `sweetalert2`, `react-hot-toast`
- **Carousel & Animations**: `embla-carousel-react`, `lottie-react`
- **Storage & Firebase**: `firebase`, `localforage`
- **Styling**: `tailwindcss`, `tailwind-merge`, `tailwindcss-animate`

### Development Dependencies
- **Linting & Formatting**: `eslint`, `eslint-plugin-react`, `eslint-plugin-react-hooks`
- **Styling**: `postcss`, `autoprefixer`
- **Build Tools**: `vite`, `@vitejs/plugin-react`

To install all dependencies, run:

```sh
npm install
```

---

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file in the root directory and add the following:

```ini
VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_PROJECT_ID=your_firebase_project_id
VITE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_APP_ID=your_firebase_app_id
```

Replace values with your actual API keys and Firebase configurations.

---

## 📖 Future Enhancements

- 🔄 Real-time food availability updates using Firebase Realtime Database.
- 📍 Integration of geolocation features to show nearby food providers.
- 📊 Analytics dashboard for tracking food-sharing statistics.
- 🔔 Push notifications for new food availability.

---

## 🤝 Contributors

I welcome contributions to improve this Food Sharing Website!  
Please fork the repository and submit a pull request with your changes.

---


**Meal Bridge** is a community-driven initiative to reduce food waste and promote sharing. Join us in making a difference! 🍴🌍