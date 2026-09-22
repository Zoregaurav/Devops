# 12 modules:

html+css+js ->static website


idea=>coding=>deploy


modern:

netflix,amazon,x,instagram->Auth,Authorization  ->not only website it is an application


auth/authentication,data intensive,multiple server,microservice



microservice Architecture:->order service+payment service+cart service+user service  ye service apasa mein baat karti hain....
     |
  operation: new term kamm kya karte hain :db scale ,downscale,scale karne ke liya

  sara code ek hi jagah pe--->monolithic architecture

   
                   http req
*static website* <------- client 
    |            -------->
 html,css,js     http req
  (server)        '{
                   " json "
                   }'



# two world

<!-- it is worrking on my machine... -->

1.develpoer:bug fixes,new features
2.operation: deploy,multiple servers,coding,os,DB manage,config
it is working on my machine.....



     dev  -->system change

     ops -->not to change


dev ops->developer+operation...

dev not only for developer

devops->role,phelosophy


fundamental ideas:
 this is the devops philosophy...

1.shared ownership
2.Automation
3.small & regular
4.fast feedback


# dev  operation 

*silo working model*
sub apne apne bubble mein fase hua hain is model main.......

responsibility nahi samjte


responsibilty of devops: 1.fast delivery 2.Reliable delivery

# CALMS FRAMEWORK:

C->CULTURE ->basically ownership le raha hain kya
A->AUTOMATION ->ci-cd
L->LEAN    ->max value min waste  -> give the new features and min bugs
M->MEASUREMENT  -> mesurement kya hain ?quntifying numbers 
S->SHARING  ->kam ko share karna 


DEV->5 days
QA->20DAYS
OPS->40DAYS


<!-- DORA matrix: -->measurement technique
# DORA->DEVOPS REASEARCH AND ASSESMENT


deployment frequency
lead time for change
mean recovery time
chanage failure ratio



q.How frequently do you deploy?

q.how quickly does a change reach to prod?

q.how freq failure occurs in deployment?

q.How quickly do you recover?


1.
Deployment freq:
  |
  per day,per week,per month

  deployment:
  |
  patch,bug fix,

40 product
20 days =40/20=2 deployment/day


2.Dev code->commit on github in 2 days -> deployment takes 4 days


3.change failure rate:failed deployment
                      -----------------  * 100
                       total deployment  



recovery: fix(hotfix),revert,Disable

hotfix:  

revert:

disabled: 


eg:
promocode| code   | isdisable
         | super30|     T




# Linux fundamental

computer(server)

window:
ubantu->vm,(wsl->for low ram)
mac->vm

 

what is os?

user---->os------>hw
         |
 (cpu,ram,memory,keyboard,n/w)


# kernel->linux
   |
 memory process(program)
 n/w
 user permission
 system call
 file system

 

# user space | kernel space
*user space ko direct access nahi hain kernal space ka
 
 file        |       
 programs    |
 java/js     |
  

  # linux->distribution    
       |
    cmd line tooo
       |
    shell
       |
    service 
    
      ubantu
      kali fedora
      debian

      # cd /home/desktop
           |
           terminal
           |
           shell(bash/zsh)
           cd home/desktop
           |
           kernal

           