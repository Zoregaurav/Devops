# Github Action/Jenkins :



code-->test+build+package
         |
        Deploy


  
  client->  Api Gateway-->Amazon clone


  # Microservice:               instances
  Api Gateway    LB      ----->    order service   order service
                 LB     ------->   payment service payment service
                 LB      ------>    user service   user service



 # Deployment Types:

 1.Rolling Deployment:

 order service
 payement service
 user service


 order service:

 A-v1
 B-v2
 C-v3
 D-v4


 A-v1
 B-V1
 C-V1
 D-v1 
 

Blast Area :

2.Blue-Green Deployment:

order service->code deployed-->merged to master


A->v1
B->V1                       100%
C->V1    Blue server      ---------------
D->V1                                   
                                         |
                                       Router
                                         |
E-V2
F-V2     Green  -------------------------
G-V2
H-V2                         0%



# Canary Deployment:
    |


      85 %
Router ===> v1
       ===> v2
       15 %



    A-v1
    B-V1
    C-V1
    D-V1

    server-dependent....

    Feature flags-->Server

    

    Docker-->introduction


    code-->production -->BUG/Issue

    "It works on my machine"

    code ----------->
    
    

