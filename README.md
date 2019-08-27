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


## Bucket list items

### GET /api/items

    -returns array of ALL bucket list items

### GET /api/user-items

    -returns array of all items associated with user token

### POST /api/items

    -input:
        -name   -Required   -string
        -description    -Required   -string
        -category_id    -Required   -integer
        -privacy    -Not Required   -boolean    // default to private   true === private, false === public
        -complete   -Not Required   -boolean    // default to false
        -date   -Not Required   -string
---

## Categories

### POST /api/categories

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
    