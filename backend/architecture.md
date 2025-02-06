
flowchart TB
    subgraph "Client Layer"
        A[Web Client] <--> B[Mobile Client]
    end

    subgraph "API Gateway"
        AG[API Gateway\nAuthentication\nRate Limiting]
    end

    subgraph "Microservices"
        US[User Service] 
        PS[Product Service]
        OS[Order Service]
        PS[Payment Service]
    end

    subgraph "Data Layer"
        M[MongoDB Replica Set]
        R[Redis Cache]
    end

    subgraph "External Services"
        PAY[Payment Providers]
        EMAIL[Email Service]
    end

    subgraph "Infrastructure"
        K[Kubernetes Cluster]
        MQ[Message Queue]
    end

    A --> AG
    B --> AG
    AG --> US
    AG --> PS
    AG --> OS
    AG --> PS
    
    US <--> M
    PS <--> M
    OS <--> M
    
    US <--> R
    PS <--> R
    
    OS --> PAY
    OS --> EMAIL
    
    US --> MQ
    PS --> MQ
    OS --> MQ

    K --> M
    K --> R
    K --> MQ