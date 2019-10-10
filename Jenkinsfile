pipeline {
    agent any
    
   
    
    stages{
        stage('Cloning Git') {
            steps {
                sh 'cd /var/my-app'
                git 'https://github.com/Kristi47/jenkins-ci-cd'
            }
        }
        
        stage('Install dependencies') {
            steps {
                sh 'cd /var/my-app/jenkins-ci-cd'
                sh 'npm install'
            }
        }
        
        stage("Test"){
            steps{
                sh 'cd /var/my-app/jenkins-ci-cd'
                sh 'sudo npm install'
                sh 'npm test'
            }
        }
        
        stage("Production"){
            steps{
                sh 'sudo pm2 start index.js -f --update-env'
                sh 'sudo pm2 restart index.js --update-env'
            }
        }
    }
}