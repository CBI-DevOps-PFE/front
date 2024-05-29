pipeline{
    agent any
    environment{
        dockerImage=''
        registry='bounajia/front-app:latest'
        registryCredential = 'dockerhub_id'
    }
    stages{
        stage('checkout'){
        steps    {
            checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/CBI-DevOps-PFE/front.git']])
    }
    
}
        stage('build docker img'){
            steps{
                
                script{
                    dockerImage = docker.build registry
                }
                
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
