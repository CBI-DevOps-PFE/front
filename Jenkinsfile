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
            
 stage('Test des dépendances installées') {
            steps {
                script {
                    // Vérifie si les dépendances sont présentes dans le répertoire node_modules
                    if (fileExists('node_modules')) {
                        echo 'Les dépendances ont été installées correctement.'
                    } else {
                        error 'Les dépendances n\'ont pas été installées correctement.'
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
}
