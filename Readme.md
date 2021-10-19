# **API Guide**

## getAllBooks
It shows all the books available in DB

GET request

req - `http://localhost:3000/getAllBooks`

res - 
```
[
  {
    "_id": "616d20390df2b1d5fd6c1684",
    "book_id": "1001",
    "book_name": "Tale of Two Cities",
    "book_img": "https://storage.googleapis.com/lr-assets/_nielsen/400/9780141325545.jpg",
    "book_auth": "Charles Dickens"
  },
  {
    "_id": "616d25e70df2b1d5fd6c1685",
    "book_id": "1002",
    "book_name": "Letting Go",
    "book-img": "https://images3.penguinrandomhouse.com/cover/9780679764175",
    "book_auth": "Philip Roth"
  },
  {
    "_id": "616d265b0df2b1d5fd6c1686",
    "book_id": "1003",
    "book_name": "Fear of Flying",
    "book_img": "https://images4.penguinrandomhouse.com/cover/9780143107354",
    "book_auth": "Erica Jong"
  }
]
```

## getBookbyID
It shows the specific book by its ID

GET request

req - `http://localhost:3000/getBookbyId/1002`

res - 
```
[
  {
    "_id": "616d25e70df2b1d5fd6c1685",
    "book_id": "1002",
    "book_name": "Letting Go",
    "book-img": "https://images3.penguinrandomhouse.com/cover/9780679764175",
    "book_auth": "Philip Roth"
  }
]
```

## login
It shows the user's details by the user's name

GET request

req - `http://localhost:3000/login/Akash`

res -
```
[
  {
    "_id": "616e1c85f428b54ea3a78e48",
    "username": "Akash",
    "password": "akash05",
    "book_id": "1002"
  }
]
```

## register
It stores the data in DB by giving the user's details

POST request

req - ```http://localhost:3000/register/```

```
{
    "username":"Rahul",
    "password":"rahul619"
}
```

res - 
```
{
  "username": "Rahul",
  "password": "rahul619",
  "_id": "616e530e963c32960fae6fb0",
  "__v": 0
}
```

## removeBook
It removes the books present in the user's collection of the specific user

PATCH request

req - `http://localhost:3000/removeBook/Ajay`

res - 
```
{
_id: 616d2a9a0df2b1d5fd6c1687
username: "Ajay"
password: "12345ajay"
book_id: null
}
```

## takeThisBook
It updates the book field of the user whether it is not taken by any other user or else it shows an error

GET request

req - `http://localhost:3000/takeThisBook/Govind/1001`

res - 
```
{
_id: 616e248a47b0cf09dee8e37c
username: "Govind"
password: "101101govind"
book_id: "1001"
}
```

req - `http://localhost:3000/takeThisBook/Govind/1001`

res - 
```
405 Method not allowed
```

