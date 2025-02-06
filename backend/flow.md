%%{init: {'theme': 'neutral'}}%%
flowchart TD
    A[User Registration] --> B{Verification}
    B --> |Verified| C[Create Profile]
    B --> |Rejected| D[Registration Failed]
    
    C --> E[User Authentication]
    E --> |Success| F[User Dashboard]
    E --> |Failed| G[Login Error]
    
    F --> H[Browse Products]
    H --> I[Select Product]
    I --> J[Check Availability]
    
    J --> |Available| K[Add to Cart]
    J --> |Unavailable| L[Show Alternative/Notify]
    
    K --> M[Initiate Checkout]
    M --> N[Payment Processing]
    
    N --> |Payment Success| O[Generate Game Key]
    N --> |Payment Failed| P[Payment Error]
    
    O --> Q[Send Key to User]
    Q --> R[Update Inventory]
    R --> S[Record Transaction]
    
    S --> T[Generate Invoice]
    T --> U[Send Confirmation Email]
    
    F --> V[Account Management]
    V --> W[Update Profile]
    V --> X[View Purchase History]
    V --> Y[Manage Wallet/Credits]
    
    subgraph "Error Handling"
        D
        G
        L
        P
    end
    
    subgraph "Background Processes"
        R
        S
        T
        U
    end