# Node.js + MySQL using Faker.js

A simple project demonstrating how to connect a **Node.js application with a MySQL database** and use **Faker.js** to generate sample user data.

## Technologies Used

* Node.js
* MySQL
* MySQL2
* Faker.js

## Project Overview

This project connects Node.js to a MySQL database using the `mysql2` package. Faker.js is used to generate realistic dummy user information such as usernames, email addresses, passwords, and unique IDs.

The generated data is then inserted into the MySQL `user` table using an SQL `INSERT` query.

For example, the application can generate and insert **100 random users** into the database.

## Database

The project uses a MySQL database named `delta_app`.

The `user` table contains:

| Column     | Description                 |
| ---------- | --------------------------- |
| `id`       | Unique user ID              |
| `username` | Randomly generated username |
| `email`    | Randomly generated email    |
| `password` | Randomly generated password |

## Faker.js

Faker.js generates dummy data without manually entering each record.

Examples:

```js id="c9f05e"
faker.string.uuid()
faker.internet.username()
faker.internet.email()
faker.internet.password()
```

## MySQL Connection

Node.js connects to MySQL using `mysql2`:

```js id="5nhy8p"
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'YOUR_PASSWORD'
});
```

## Data Insertion

The generated data is inserted into MySQL using:

```sql id="3xujx4"
INSERT INTO user (id, username, email, password) VALUES ?
```

Multiple records can be inserted at once using a two-dimensional array.

## Running the Project

Install the required packages:

```bash id="2c6o6r"
npm install @faker-js/faker mysql2
```

Run the Node.js file:

```bash id="0b7a47"
node index.js
```

## Verify Data

After running the program, check the database using:

```sql id="l6i0i2"
USE delta_app;

SELECT * FROM user;
```

To count the records:

```sql id="j4lqk7"
SELECT COUNT(*) FROM user;
```

## Purpose

This project provides a basic understanding of:

* Connecting Node.js with MySQL
* Executing SQL queries from Node.js
* Generating dummy data using Faker.js
* Inserting data into a MySQL database
* Working with asynchronous database queries
