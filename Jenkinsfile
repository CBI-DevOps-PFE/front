node {     
      def app      
      stage('Clone deposit') {                
             
            checkout  'https://github.com/CBI-DevOps-PFE/front.git'
      }     
      stage('Construire une image') {          
       
            app = docker.build("bounajia/frontend-projet")     
       }     
      stage('Image de test') {           
            app.inside {             
             
             sh 'echo "Tests réussis"'         
            }     
        }     
       stage('Push image') { 
                                                  docker.withRegistry('https://registry.hub.docker.com', 'git') {            
       app.push("${env.BUILD_NUMBER}")             
       app.push("latest")         
              }     
           } 
        }
