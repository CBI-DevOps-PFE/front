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
    stage('Test') {
            steps {
                script {
                    if (!fileExists('package.json')) {
                        error "Les dépendances n'ont pas été installées correctement."
                    }
                    // Assuming npm test is the test command, modify if necessary
                    sh 'npm test'
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
