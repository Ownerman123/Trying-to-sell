# Trying to Sell

## Description
The Trying to Sell project is a comprehensive website designed to facilitate the online selling of various products. This server-side application manages product inventories, categories, and tags through a RESTful API. It demonstrates the integration of Express.js with Sequelize ORM for database management using PostgreSQL.

## Table of Contents
- [Installation](#installation)
- [Screenshots](#Screenshot)
- [Usage](#usage)
- [Technologies](#technologies)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation
To get started, clone the repository and install the necessary dependencies:
git clone https://github.com/your-github/trying-to-sell.git
cd trying-to-sell
npm install

Create a .env file in the root directory and update it with your database credentials and other environment variables:

- DB_NAME='database_name'
- DB_USER='database_username'
- DB_PASSWORD='database_password'
- DB_HOST='localhost'
- SESSION_SECRET='your_secret'

Run database migrations:

- npx sequelize db:migrate

Start the application:

- npm start

- ## Screenshots

![Homepage](/public/images/homescreen.png "Optional title")

![Create Listing](/public/images/Create_Listing.png "Optional title")

## Usage

After installing, navigate to http://localhost:3000 to view the application. Here's how to use the application:

- Register/Login: Start by registering or logging in to manage your product listings.
- Create Listings: Use the interface to add products to your inventory.
- Manage Products: Update or delete products as needed.
- Link for our deployed Render: https://trying-to-sell-w7ib.onrender.com/


## Technologies

This project is built with the following technologies:

- **[Node.js](https://nodejs.org/)**: As the runtime environment for the server.

- **[Express.js](https://expressjs.com/)**: To create the server and API routes.

- **[Sequelize](https://sequelize.org/)**: As the ORM for database manipulation.

- **[PostgreSQL](https://www.postgresql.org/)**: As the database system.

- **[dotenv](https://www.npmjs.com/package/dotenv)**: To manage environment variables.

- **[bcrypt](https://www.npmjs.com/package/bcrypt)**: For password hashing.

- **[express-session](https://www.npmjs.com/package/express-session)**: For session management.

- **[connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)**: To store sessions using Sequelize.

- **[Handlebars.js](https://www.npmjs.com/package/express-handlebars)**: For templating views.

## License
This project is licensed under the ## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) license.

## Contributing
If you would like to contribute, please follow these steps:

- Fork the repository: Click the fork button.
- Make your changes: Clone your fork and make the changes on your local machine.
- Create a pull request: Push your changes to your fork and then create a pull request from your fork to the main repository.

## Questions
If you have any questions about the project, feel free to reach out!