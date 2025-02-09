# Table of Contents

- [Table of Contents](#table-of-contents)
- [E-Shop api](#e-shop-api)
  - [Features](#features)
  - [Installation Guide](#installation-guide)
  - [Running The Project](#running-the-project)
  - [Folder Structure](#folder-structure)

# E-Shop api

This repository holds the source code to the E-Shop web application back-end logic

### Features

✅ User authentication (JWT)  
✅ Product listing and management  
✅ Order and category management  
✅ Secure database integration

## Installation Guide

- Run the following command to clone the repository

```bash
git clone https://github.com/Ssaava/e-shop-api.git
```

- Change to the project folder with the following command in the terminal

```bash
cd e-shop-api
```

- Run the following command in the terminal to install the neccessary dependencies

```bash
npm i
// OR
npm install
```

The command above install the required node modules and a folder is added to your project ("node_modules")

## Running The Project

- Copy and paste the .example.env file and rename the copy to .env to set up the required setting fro the project to run

- Create an account of your database with [mongodb](https://www.mongodb.com/cloud/atlas/register)
- After create a new cluster with a database to have your connection string and set it up in the .env file copied
- Replace all neccessary requirements of the .env file with the right credentials then run the following command to start the node server in development mode

```bash
npm run dev
```

- Open the project on [http://localhost:5000/](http://localhost:5000/) incase you set your port to 5000 in the .env file
- If port not set the the project will run on [http://localhost:8000/](http://localhost:8000/)

## Folder Structure

```bash
Ecommerce-App/
├── src/
│ ├── config/
│ │ └── database.js
│ ├── controllers/
│ │ ├── userController.js
│ │ ├── productController.js
│ │ ├── orderController.js
│ │ └── categoryController.js
│ ├── models/
│ │ ├── User.js
│ │ ├── Product.js
│ │ ├── Order.js
│ │ ├── OrderItem.js
│ │ └── Category.js
│ ├── routes/
│ │ ├── userRoutes.js
│ │ ├── productRoutes.js
│ │ ├── orderRoutes.js
│ │ └── categoryRoutes.js
│ ├── middlewares/
│ │ ├── authMiddleware.js
│ │ └── errorHandler.js
│ ├── services/
│ │ ├── userService.js
│ │ ├── productService.js
│ │ ├── orderService.js
│ │ └── categoryService.js
│ ├── utils/
│ │ ├── logger.js
│ │ └── emailService.js
│ ├── app.js
│ └── server.js
├── .env
├── package.json
└── README.md
```

Project by [Ssaava Emma](https://x.com/ssava_emai)
