pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/saritasolaskar/DEVOPS-3.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building application...'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing application...'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t devops-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'docker rm -f devops-app-container || exit 0'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d --name devops-app-container -p 3000:3000 devops-app'
            }
        }
    }
}