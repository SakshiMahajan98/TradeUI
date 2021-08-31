def openshiftProjectName = 'hackathon'
def uiName = 'shippers-ui'
def version = "0.0.1"
def dockerImageTag = "${uiName}:${version}"

pipeline {
  agent any
 
  stages {
    /*
     * The Dockerfile for this project builds the angular app
     * and puts the resulting dist folder in an nginx container
     */
    stage('Build Angular and Create nginx image') {
      steps {
        sh "docker build --rm -t ${dockerImageTag} ."
      }
    }

    stage('Clean up image created for build') {
      steps {
        sh 'docker rmi $(docker images -f dangling=true -q)'
      }
    }

    stage('Deploy Container To Openshift') {
      environment {
        OPENSHIFT_CREDS = credentials('openshiftCreds')
      }
      steps {
        sh "oc login -u ${OPENSHIFT_CREDS_USR} -p ${OPENSHIFT_CREDS_PSW}"
        sh "oc project ${openshiftProjectName} || oc new-project ${openshiftProjectName}"
        sh "oc delete all --selector app=${uiName} || echo 'Unable to delete all previous openshift resources'"
        sh "oc new-app -l version=${version} ${dockerImageTag}"
        sh "oc expose svc/${uiName}"
      }
    }
  }
}
