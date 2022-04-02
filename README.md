# auth-api

HTTP server built to test auth, bearer, basic, and ACL components.

## UML

- ![UML](/auth-api.png)

## Installation

- Clone from this repo `git clone https://github.com/bradyjcamp/auth-api.git`
- cd into api-server
- `npm install`
  - base-64
  - bcrypt
  - cors
  - dotenv
  - express
  - nodemon
  - jest
  - jsonwebtoken
  - morgan
  - pg
  - supertest
  - sequelize
  - sqlite3

## Usage

Once installed, run `npm start`

## Contributors / Authors

- Brady Camp
- JS 401 d46 class.

## Features / Routes

UNAUTHORIZED ROUTES

- GET all
- GET one
- POST
- PUT
- DELETE

```js
router.get('/:model', handleGetAll);
router.get('/:model/:id', handleGetOne);
router.post('/:model', handleCreate);
router.put('/:model/:id', handleUpdate);
router.delete('/:model/:id', handleDelete);
```

- Response
  - status 200
  - status 404, if incorrect route.
  - status 500, if request denied or failed.

AUTHORIZED ROUTES

- GET all
- GET one
- POST
- PUT
- DELETE

```js
router.get('/:model', authorize('read'), handleGetAll);
router.get('/:model/:id', authorize('read'), handleGetOne);
router.post('/:model', authorize('create'), handleCreate);
router.put('/:model/:id', authorize('update'), handleUpdate);
router.delete('/:model/:id', authorize('delete'), handleDelete);
```

- Response
  - status 200
  - status 404, if incorrect route.
  - status 500, if request denied or failed.
  