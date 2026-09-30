pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo '===== BUILD ====='
                sh 'docker build -t node-hello-world:latest .'
            }
        }

        stage('Test') {
            steps {
                echo '===== TEST ====='
                sh 'node --check app.js'
            }
        }

        stage('Deploy') {
            steps {
                echo '===== DEPLOY ====='

                sh '''
                    docker stop node-hello-world || true
                    docker rm node-hello-world || true

                    docker run -d \
                        --name node-hello-world \
                        -p 3000:3000 \
                        node-hello-world:latest
                '''
            }
        }

        stage('Application Link') {
            steps {
                echo '===== APPLICATION ====='
                echo 'http://13.203.213.93:3000'
            }
        }
    }
}