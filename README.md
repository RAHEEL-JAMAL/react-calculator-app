React Calculator App

Description:
A simple calculator app built with React.js. It supports basic arithmetic operations like addition, subtraction, multiplication, and division. This project is designed for learning React, Docker, and CI/CD practices.

Features

Simple and clean UI

Supports addition, subtraction, multiplication, and division

Responsive design (works on desktop and mobile)

Built with React.js

Ready for Dockerization and CI/CD pipeline

Installation

Clone the repository

git clone https://github.com/<your-username>/react-calculator-app.git
cd react-calculator-app


Install dependencies

npm install


Run the app locally

npm start


Open http://localhost:3000 in your browser.

Docker Setup

Build Docker image

docker build -t react-calculator-app .


Run Docker container

docker run -p 80:80 react-calculator-app

CI/CD

This project can be connected to GitHub Actions for automatic builds and deployments using Docker.
