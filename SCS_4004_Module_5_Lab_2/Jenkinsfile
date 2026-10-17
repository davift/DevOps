pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'student-profile-app'
        CONTAINER_NAME = 'student-app'
        PORT = '3000'
    }
    stages {
        stage('Cleanup Old Resources') {
            steps {
                sh '''
                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true
                '''
            }
        }
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${DOCKER_IMAGE}:${BUILD_NUMBER} -t ${DOCKER_IMAGE}:latest ."
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    def testOutput = sh(script: "docker run --rm ${DOCKER_IMAGE}:latest npm test", returnStdout: true)
                    echo testOutput
                    if (!(testOutput =~ /\d+ passing/) || (testOutput =~ /\d+ failing/)) {
                        error('Tests failed — see console output above.')
                    }
                }
            }
        }
        stage('Deploy Container') {
            steps {
                sh """
                    docker run -d --name ${CONTAINER_NAME} -p ${PORT}:${PORT} --restart unless-stopped ${DOCKER_IMAGE}:latest
                    sleep 5
                """
            }
        }
        stage('Verify Deployment') {
            steps {
                sh """
                    for i in 1 2 3; do
                        curl -f http://localhost:${PORT} && break
                        echo "Retry \$i..."; sleep 3
                    done
                """
            }
        }
        stage('Cleanup Old Images') {
            steps {
                sh '''
                    docker images ${DOCKER_IMAGE} --format "{{.ID}} {{.Tag}}" \
                      | grep -v latest | grep -v ${BUILD_NUMBER} | awk '{print $1}' \
                      | xargs -r docker rmi -f || true
                '''
            }
        }
    }
    post {
        success { echo "Pipeline completed successfully! Build ${env.BUILD_NUMBER}, commit ${env.GIT_COMMIT}" }
        failure { sh "docker logs ${CONTAINER_NAME} || true" }
        always  { sh 'docker ps' }
    }
}