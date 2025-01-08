# Product Catalog Application  

The **Product Catalog** is a full-stack application built with the MERN stack (MongoDB, Express.js, React.js, and Node.js) that allows users to browse, search, and view products.  

---

## Table of Contents  

- [Introduction](#introduction)  
- [Features](#features)  
- [System Architecture](#system-architecture)  
  - [Front-End](#front-end)  
  - [Back-End](#back-end)  
  - [Database](#database)  
- [API Design](#api-design)  
- [Installation](#installation)  
- [Configuration](#configuration)  
- [Usage](#usage)  
- [Future Enhancements](#future-enhancements)  

---

## Introduction  

The **Product Catalog Application** enables users to browse a collection of products with features like search, filter, and detailed product pages. It is designed to showcase products effectively and provide an engaging user experience.  

---

## Features  

### For Users:  

- **Search Products:** Quickly search for products using a search bar with real-time suggestions.  
- **Product Details:** View detailed information, including images, name, category, description, and price.  
- **Responsive Design:** Optimized for all devices, including mobile and desktop.  

### For Admins (Future Enhancements):  

- **CRUD Operations:** Add, update, or delete products.  
- **Analytics:** View insights on user interactions and product performance.  

---

## System Architecture  

### Front-End  

The front-end is built using **React.js** to provide a dynamic and responsive user interface.  

- **Key Features:**  
  - Search bar with real-time suggestions.  
  - Smooth hover animations for product cards.  
  - Clean and user-friendly UI.  

- **Tools and Libraries Used:**  
  - React.js: Front-end framework.  
  - Tailwind CSS: Styling for consistent and responsive designs.  
  - React Icons: For adding icons to the UI.  

---

### Back-End  

The back-end is powered by **Node.js** and **Express.js**, handling API requests and serving data to the front-end.  

- **Key Features:**  
  - **Product API:** Provides endpoints for fetching product data.  
  - **Search API:** Supports search queries to filter products based on user input.  

- **Tools and Libraries Used:**  
  - Node.js: Runtime for building server-side applications.  
  - Express.js: Lightweight web framework for routing and middleware.  

---

### Database  

The database is implemented using **MongoDB**, which stores all product-related data.  

- **Data Schema:**  
  - **Product:** Stores product information, including `id`, `name`, `description`, `price`, `category`, and `image`.  

---

## API Design  

The application follows RESTful API principles. Below are the key endpoints:  

| Method | Endpoint            | Description                          |  
|--------|---------------------|--------------------------------------|  
| GET    | `/api/products`     | Fetch all products.                 |  
| GET    | `/api/products/:id` | Fetch details of a single product.  |  
| GET    | `/api/search`       | Search for products by query.       |  

---

## Installation  

### Prerequisites  

- Node.js (v14 or later)  
- MongoDB  

### Steps  

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/Product_Catalog.git
# Product Catalog  

## Installation  

### Step 2: Install Dependencies  
Run the following commands to install the necessary dependencies for both the client and server:  
```bash
npm install  
cd frontend && npm install



## Configuration  

### MongoDB Setup  
1. Create a database named **product_catalog**.  
2. Import or add some sample product data into the database.  

### Environment Variables  
Set up a `.env` file in the root of your project with the following variables:  
```env
MONGODB_URI=<your-mongodb-uri>  
PORT=5000  

## Usage  

### Running the Application  

#### Start the Back-End Server  
Run the following command in the root directory:  
```bash
npm run server

###Start the React Development Server
Navigate to the client directory and start the front-end development server:

bash
cd frontend  
npm run dev