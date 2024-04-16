pipeline {
    agent any
    
    environment {
        // Define environment variables if needed
        DOCKER_REGISTRY = 'bounajia'
        IMAGE_TAG = 'frontend-projet:v2.0'
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from version control
                git 'https://github.com/CBI-DevOps-PFE/front.git'
            }
        }
        
        stage('Build') {
            steps {
                // Build the Docker image
                script {
                    docker.build("${DOCKER_REGISTRY}/${IMAGE_TAG}")
                }
            }
        }
        
        stage('Test') {
            steps {
                // Run tests if available (optional)
                sh 'npm test'
            }
        }
        
        stage('Push to Registry') {
            steps {
                // Push the Docker image to your Docker registry
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
            // Actions to perform if the pipeline succeeds
            echo 'Pipeline succeeded! Your Docker image is built and pushed to the registry.'
            // You can trigger further actions like deploying to production or sending notifications.
        }
        
        failure {
            // Actions to perform if the pipeline fails
            echo 'Pipeline failed! Please check the build logs.'
            // You can trigger notifications, rollback deployments, etc.
        }
    }
}
