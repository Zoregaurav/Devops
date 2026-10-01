jenkins    ->concurrent executions
|
Automation tool


linting
|
unit test
|
build
|
package
|
deploy



controller   |       agents
                        |
          node       executors



github  <--- jenkins
        pull based model



# Github Actions:
         |                        declarative approach
 full automation tool         

pipeline{
    agent any
    stages{
      stage('parallel text'){
         Unit Test:{
          sh "some command"
        },
        Integration test:{
            sh "some command"
        }
      }
    }

}


  Github Actions ->github repo + ci engine
         |                       
 full automation tool


build ->test ->deploy

pr created
|
run test
|
pull req merged
|
deploy


PR ->REVIEW comments 
(issue opened)

|
automatically label the issue
|
Release created
|
Docker image


CRON Jobs SET ->every night at 2 pm ->run some maintainance script
              repetative work at perticular  time  interval 



   trigger      event ->pr,merge,manual trigger
                  |
                workflow
              |        |
 stages      job 1      job 2
             |            |
nodes        runner     runner
               |           |
 stage        steps       steps


workflow->the whole automation


jenkins file ham groovy likhte the


src .github ->dir->workflow ->deploy.yml security-scan.yml

project

.github/workflow




name:my first workflow
-----------------------------------
on:
 push:

jobs:
  name:hello
  runs-on:ubuntu_latest/window_latest

steps:
  -name:say hello
   run:echo "Hello Devops engineer"



on:refer to an event

on:
   push:
   branch : main

push ?
pull req
every night
manual click
release

on:
  pull_req:

on:
  workflow_dispatch:

on:
   schedule:
      -cron "0 2 * * "

 jobs:
    build:
      ...
    test: 
      ...
    security:
      ...
    deploy:
      ...     

      runner

      runs on :ubuntu-latest
             - window-latest
             - macos-latest
             |
             |
github cloud |
|
manual server setup

jobs-->steps
  step-1:checkout code
  step-2:setup java
  step-3:maven setup
  


test:
  sh 'mvn test'

  workflow -->yml


  code->pr->master

  workflow 1->pr(unit test cases)
  workflow 2->merge(build->package ->deploy)

