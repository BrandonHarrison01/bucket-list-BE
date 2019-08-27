# 30for30-BE
---
## Base Url: https://thirty-before-thirty-bw.herokuapp.com/

## AUTH Endpoints

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


### PUT /auth/update/:id

    -input:
        -username       -Required       -string
        -password       -Required       -string

    -returns
        {
            id:
            username:
            password:
        }

---

## Endpoints ##

---

## Bucket list items

### GET /api/items

    -returns array of bucket list items associated with user token

---

## Categories

### PUT /api/categories

    -input:
        -category_name      -Required       -string

    -returns
        {
            id:
            category_name
        }

### GET /api/categories

    -returns array of categories

### DELETE /api/categories/:id

---

## Seeded users ##

    {
        username: steve,
        password: 1234
    }

    {
        username: bob,
        password: 1234
    }

    {
        username: mike,
        password: 1234
    }
    