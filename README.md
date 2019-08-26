# 30for30-BE
---
## Base Url: https://thirty-before-thirty-bw.herokuapp.com/

## AUTH ## Endpoints that return a token

### POST /auth/register

    -input:
        -username           -Required     -string
        -password           -Required     -string

    -returns 
        { 
        id: 1, 
        }    


### POST /auth/login

    -input:
        -username           -Required     -string
        -password           -Required     -string

    -returns 
        { 
        id: 1,
        username: "test", 
        token: "generatedToken" 
        }

## CRUD items

