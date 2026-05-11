# Netflix Clone 🎬

A full-stack Netflix Clone built using Next.js, Node.js, Express.js, MongoDB, and JWT Authentication.  
Users can browse movies, search for content, and securely authenticate using JWT-based login and registration.

---

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development servers.

### Frontend

```bash
cd frontend
npm run dev
```

Frontend runs on:

```bash
http://localhost:3000
```

---

### Backend

```bash
cd backend
npm run dev
```

Backend runs on:

```bash
http://localhost:8080
```

---

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the frontend by modifying files inside:

```bash
frontend/app
```

The page auto-updates as you edit the files.

---

## Features

- 🔐 JWT Authentication
- 👤 User Registration & Login
- 🍪 Cookie-based Authentication
- 🎥 Browse Movies
- 🔥 Popular Movies
- ⭐ Top Rated Movies
- 🎬 Upcoming Movies
- 🔍 Search Movies
- 📱 Responsive UI
- ⚡ Fast Next.js Frontend
- 🗄️ MongoDB Database Integration

---

## Tech Stack

### Frontend
- Next.js
- React.js
- Tailwind CSS
- Redux Toolkit
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- bcrypt.js

---

## Environment Variables

### Frontend `.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api/v1/user
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
```

---

### Backend `.env`

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## API Routes

```bash
POST /api/v1/user/register
POST /api/v1/user/login
POST /api/v1/user/logout
```

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs?utm_source=chatgpt.com)
- [Learn Next.js](https://nextjs.org/learn?utm_source=chatgpt.com)

You can also check out the:

- [Next.js GitHub Repository](https://github.com/vercel/next.js?utm_source=chatgpt.com)

---

## Deployment

### Frontend Deployment
Deploy easily using:

- [Vercel](https://vercel.com?utm_source=chatgpt.com)

### Backend Deployment
Backend can be deployed using:

- [Render](https://render.com?utm_source=chatgpt.com)
- [Railway](https://railway.app?utm_source=chatgpt.com)
- [Vercel](https://vercel.com?utm_source=chatgpt.com)

---

## Movie API

Movie data is fetched using:

- [TMDB API](https://www.themoviedb.org/documentation/api?utm_source=chatgpt.com)

---

## Author

Made with ❤️ by Hanzala 