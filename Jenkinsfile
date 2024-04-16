pipeline{
    agent any
    environment{
        dockerImage=''
        registry='bounajia/frontend-projet:v2.0'
        registryCredential = 'dockerhub_id'
    }
    stages{
        stage('checkout'){
        steps    {
            checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/CBI-DevOps-PFE/frontend.git']])
    }
    
}
        stage('build docker img'){
            steps{
                
                script{
                    dockerImage = docker.build registry
                }
                
                }
            }
  stage('Test') {
            steps {
                sh 'npm install' // Install project dependencies
              //  sh 'npm test'    // Run tests
            }
        }
            
        stage('uploading img'){
            steps{
                script{
                    docker.withRegistry('',registryCredential){
                        dockerImage.push()
                    }
                    
                }
            }
        }    
            
        }
}
