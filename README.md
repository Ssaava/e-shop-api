# Table of Contents
- [E-Shop API](#e-shop-api)
- [Steps to Clone This Repository](#steps-to-clone-this-repository)

# E-Shop api
This repository holds the source code to the E-Shop web application back-end logic

## Steps to clone this repository
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

- Copy and paste the .example.env file and rename the copy to .env to set up the required setting fro the project to run

- Create an account of your database with [mongodb](https://www.mongodb.com/cloud/atlas/register)
- After create a new cluster with a database to have your connection string and set it up in the .env file copied
- Replace all neccessary requirements of the .env file with the right credentials then run the following command to start the node server in development mode
```bash
npm run dev
```

- Open the project on [http://localhost:5000/](http://localhost:5000/) incase you set your port to 5000 in the .env file
- If port not set the the project will run on [http://localhost:8000/](http://localhost:8000/)

Project by [Ssaava Emma](https://x.com/ssava_emai)
