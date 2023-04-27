
## Overview
This document outlines the technical specifications for building a Todo List Server using Node.js, Prisma, SQLite, GraphQL, and Docker. The server will expose a GraphQL API for client-side consumption.

### Technologies
Node.js
Prisma
SQLite
GraphQL
Docker

### Requirements
- Use SQLite as the provider of Prisma.
- Integrate Prisma client with GraphQL resolver.
- Export GraphQL API, so it can be consumed from the client-side.
- Use a Docker container to host the application, and mount the database to /app/prisma.

### How to run 

``` bash
docker build -t todo-list .
docker-compose up
```

1. Install GraphQL Playground on your machine:
You can download and install the desktop version of GraphQL Playground from the following link: https://github.com/graphql/graphql-playground/releases

2. Access the GraphQL API:
After you have installed GraphQL Playground, open it and set the API URL in the address bar. Since your server is running on localhost on port 4000, use the following URL: `http://localhost:4000`

3. Sample query 
```graphql
query {
  todos {
    id
    title
    completed
  }
}
```