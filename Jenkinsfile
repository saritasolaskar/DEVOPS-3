pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/saritasolaskar/DEVOPS-3.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building application...'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t devops-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 devops-app'
            }
        }
    }
}