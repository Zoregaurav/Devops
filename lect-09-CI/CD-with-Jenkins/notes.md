# Lect-09: CI/CD With Jenkins:


# CI/CD WITH JENKIS:

*what I learned*:

*1.what is Devops?*
*2.Linux Fundamentals.*
*3.Git Fundamentals.*
*4.Networking Essentials :*


# main devops starts from here......

# old Process: (manaul process)

write code
push code to github
pull req to admin


feature--------->main
1.unit testing perform in local system
2.push code to github
3.mege your branch to QA branch(Integration Testing)
4.security testing
5.pull req to master
6.code review (minor issues-->variable,policy)
8.merge to master(production)


# Senior Developer:
1.pull the changes from remote master(git pull)
2.Build
3.test
4.package your application
5.deploy code to a server

spring Boot---->jar file
node js----->tgz file


# flow of code:

developer pushes code
     |
testing process
     |
pull the changes in local
     |
   Build
     |
run tests(optional)
     |
   Package


# CI/CD :

Deveoper pushes code (Pull Req)
    |
 Automation starts
    | 
  Build             
    |
  unit test/Integration test case     
    |
  package  
    |
  Deploy


  # Devops Engineer reate this pipeline 

  # bottleneck: choke the pipe
  
  # Build vs Deployment:



Build  ->Java code-->compilation(Verfication)
         packaging stage(jar file)
  |
Deployment ->Merge code to master
  |
Realease--->Code reaches to your user


pipeline->predefined sequence of steps that takes our source code to deployment stage


 dev1 dev2 dev3 dev4
  |     |    |    |
    application

    Merge conflicts


# CI->Your code integrated with master as soon and continously as possible


 small changes
    |
 Integration
    |
  Pipeline

  Frequent Integration
    +
  Automated verification


# CD:Continous Delivery/Deployment

Code push to github
    |
Automation Pipeline triggrered
    |
 Build
    |
 Test cases passed
    |
  package
|                        |
 manual approval       Deplpoy        ->live to real user
needed before deploying
    |
  Depoloy


   # code push   Github
           |
  Checkout to a system
           |
         Build
        |       | 
 unit testing  Linting    Code Anlysis
    |
  Security testing  
    |
 Integrtion testing 


package->Artifacts

spring boot package
node js package
docker image
Zip image


# Automation Pipeline
|                   |
Github Actions    jenkins
  {Startup}        {big company-MNC}


# jenkins Deep Dive
 |                |
 controller      Agents
   |                |
  manager        workers


Application:
                 Job         
Node Js      Pipeline structure
springBoot      scheduling
Django          Manage
                 UI


# controller               Agents
    |                        |
   Node                     Node 
 90 % CPU
 90 % Ram



             --------------> Agent     physical machines  virtual   machines cloud VM

                                
# controller  -------------> Agent

             
              -------------> Agent
 

# Diff application may required diffrent platforms

 Spring boot ---> Linux(Agent)
.NET APP -->window(Agent)
ios app -->macOs(Agent)


2.parallelism:

    springBoot ----->[]
    node js ------->[]
    Django ------>[]

3.Isolation

 springboot application  --->java 21  Agent
                    |
                    | 
                        ---->java 8   Agent



controller Agent  -->server
                      |
                     node

 Agent  ------>server  
   |           config : 
 Executors    8 core Cpu
               12 GB Ram


----->     task-1
           task-2
           task-3

           Server

        [ Linux Agent ]
        |             |
    Executor 1       Executor 2
       |               |
       BuildA        Build B
       |                |
     Workspace        Workspace  


#  source code ---->Github
                          
   Github <----------- Jenkis       


# Application code:

src/
package.json/  ---->Pipeline as a code

jenkinsFile   -->Groovy -----------Scripted Approach
   |                |
   No Extension    Declarative Approach

