pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/saritasolaskar/DEVOPS-3.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Node app...'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing app...'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build --no-cache -t devops-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'docker rm -f devops-app || exit 0'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 3000:3000 --name devops-app devops-app'
            }
        }
    }
}