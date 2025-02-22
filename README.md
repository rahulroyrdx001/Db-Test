# FletNix Backend - API Documentation

## 📌 Overview
The backend of **FletNix** provides a RESTful API to fetch Netflix data, including filtering by title, cast, and type. The API is built using **FastAPI/Express** and is deployed on Vercel.

---

## 🌍 Base URL
```
https://db-test-sigma.vercel.app/api/shows
```

---

## 🔥 Endpoints

### 1️⃣ Get All Shows
Fetches the complete list of available TV shows and movies.
```http
GET /api/shows
```
**Example Request:**
```
https://db-test-sigma.vercel.app/api/shows
```

---

### 2️⃣ Filter by Title
Fetch shows that match a specific title.
```http
GET /api/shows?title=<SHOW_TITLE>
```
**Example Request:**
```
https://db-test-sigma.vercel.app/api/shows?title=Stranger Things
```

---

### 3️⃣ Filter by Cast
Fetch shows that feature a specific actor.
```http
GET /api/shows?cast=<ACTOR_NAME>
```
**Example Request:**
```
https://db-test-sigma.vercel.app/api/shows?cast=Winona Ryder
```

---

### 4️⃣ Filter by Type
Fetch either movies or TV shows.
```http
GET /api/shows?type=<Movie/TV Show>
```
**Example Requests:**
```
https://db-test-sigma.vercel.app/api/shows?type=Movie
https://db-test-sigma.vercel.app/api/shows?type=TV Show
```

---

### 5️⃣ Combine Filters
Fetch shows using multiple filters such as title, cast, and type.
```http
GET /api/shows?title=<SHOW_TITLE>&cast=<ACTOR_NAME>&type=<Movie/TV Show>
```
**Example Request:**
```
https://db-test-sigma.vercel.app/api/shows?title=Breaking&cast=Bryan Cranston&type=TV Show
```

---



