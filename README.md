# Tech Gadget Store

A full-stack e-commerce web application for browsing technology products and managing a shopping experience. Built with React on the frontend and Java Spring Boot with MySQL on the backend.

## Live Demo

- **Frontend:** https://tech-gadget-store-9kt8.vercel.app
- **Backend API:** https://tech-ecommerce-production-e05c.up.railway.app/api/products/bulk

> The backend API URL above is a bulk-products endpoint. Use the frontend demo for the complete user experience.

## Features

- Browse and view technology products
- Product details pages
- Shopping cart and quantity management
- Wishlist
- User registration and login with JWT authentication
- Order placement and order tracking
- REST API integration between React and Spring Boot

## Tech Stack

### Frontend
- React
- JavaScript
- HTML5 and CSS3
- React Router
- React Icons

### Backend
- Java
- Spring Boot
- Spring Data JPA / Hibernate
- Spring Security
- JWT authentication
- REST APIs

### Database and Deployment
- MySQL
- Vercel (frontend)
- Railway (backend)

## Run Locally

### Prerequisites
- Node.js and npm
- Java and Maven
- MySQL

### 1. Clone the repository

```bash
git clone https://github.com/Prakash312005-code/Tech-Gadget-store.git
cd Tech-Gadget-store
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Configure the backend

The Spring Boot backend is maintained/deployed separately. Configure your backend's database connection and JWT settings in its application configuration, and start the backend before using authenticated features.

### 4. Start the frontend

```bash
npm start
```

The app will usually open at http://localhost:3000.

## API Overview

The backend exposes REST endpoints for products, authentication, cart operations, and orders. The product list endpoint used during local development is:

```http
GET http://localhost:8080/api/products
```

Authenticated endpoints require a valid JWT bearer token.

## Project Structure

This repository contains the React frontend. The main application source is in `src/`, with components and feature folders for pages such as product details, shopping, authentication, and orders.

## Developer

**Prakash A**  
Aspiring Java Full Stack Developer

- GitHub: https://github.com/Prakash312005-code
- Project repository: https://github.com/Prakash312005-code/Tech-Gadget-store

---

If you find an issue or have a suggestion, feel free to open an issue in this repository.
