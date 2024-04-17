pipeline{
    agent any
    environment{
        dockerImage=''
        registry='bounajia/frontend-projet:tagname'
        registryCredential = 'dockerhub_id'
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
              sh 'npm test'    // Run tests
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
