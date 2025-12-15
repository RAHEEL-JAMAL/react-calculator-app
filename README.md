🧮 React Calculator – CI/CD with Jenkins & Docker

A React-based calculator application automated using Jenkins CI/CD pipeline and Docker.

🚀 What this project does

Dockerizes the application
Pushes the Docker image to Docker Hub
Pulls and deploys the container using Jenkins

🛠 Tech Stack
React (Vite)
Jenkins
Docker & Docker Hub
Nginx

🔄 CI/CD Flow
GitHub → Jenkins → Docker Build → Docker Hub → Deploy Container

🐳 Run Manually
docker pull raheeljamal/react-calculator:latest
docker run -d -p 80:80 raheeljamal/react-calculator:latest

📂 Key Files

Dockerfile – App containerization
Jenkinsfile – CI/CD automation

👨‍💻 Author

Raheel Jamal – DevOps & Cloud Enthusiast
