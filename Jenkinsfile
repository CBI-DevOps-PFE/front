pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = 'https://hub.docker.com'
        IMAGE_TAG = 'bounajia/frontend-projet:v2.0'
    }
    
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/CBI-DevOps-PFE/frontend.git'
            }
        }
        
        stage('Build') {
            steps {
                script {
                    docker.build("${DOCKER_REGISTRY}/${IMAGE_TAG}")
                }
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm install' // Install project dependencies
                sh 'npm test'    // Run tests
            }
        }
        
        stage('Push to Registry') {
            steps {
                script {
                    docker.withRegistry("${DOCKER_REGISTRY}", 'dockerhub_id') {
                        docker.image("${DOCKER_REGISTRY}/${IMAGE_TAG}").push()
                    }
                }
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline succeeded! Your Docker image is built and pushed to the registry.'
        }
        
        failure {
            echo 'Pipeline failed! Please check the build logs.'
        }
    }
}
