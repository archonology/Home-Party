# Home Party
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Links
[link to Heroku deployment](https://pacific-lake-30103.herokuapp.com)
## Screenshot
![Screenshot of homepage](./public/images/Screen%20Shot%202022-10-29%20at%204.22.42%20PM%20(2).png)    
## Table of Contents:
#### [Description](#description)
#### [Technologies](#technologies)
#### [Installation](#installation)
#### [Usage Info](#usage-info)
#### [Contribution Guidelines](#contribution-guidelines)
#### [Test Instructions](#test-instructions)
#### [Questions](#questions)
#### [License Info](#license-info)

## Description
A full-stack website built collaboratively. Home Party is a place to invite your family and friends for tracking your favorite homes and all the things you would like to have in it.

## Technologies
The languages we used were Javascript, CSS, and HTML5. The dependencies we used were Express, Handlebars, Bcrypt, MySQL2, Sequelize, and Node Mailer. 

Node Mailer was a new one for us, so we spent time learning from the docs and integrating it into our application.  We wanted the ability to send subscribers notifications when a user of their choice made a new post on the site.
    
## Installation
View the deployed site (link above) to view the site without install.  To run it locally, clone the repo and do an `npm install` in the root file of the project.  You can use the test data in the seed file by running `npm run seed`, or skip to `npm start` and add your own data through the front end. The project runs out of the local port `3001`.  

## Usage Info
if you are running localling, you will need to create your own .env file to track your MySql login info.  This app won't work locally without  a .env in the root  folder that looks like this: 
`DB_NAME="dreams_db" DB_USER="root" DB_PASSWORD=""`

## Contribution Guidelines
Please reach out if you wish to contribute! You will need to be made an administrator to commit any code to this, and you will need to create your own branch off of main.

## Test Instructions
not at this time.

## Questions
If you have questions about this project or any of my other work, please contact me at reed.meher@gmail.com. Check out more of my work on Github at [archonology](https://github.com/archonology).
    
## License Info
This project is covered under **MIT License**. 
<br>
*A short, permissive software license. Basically, you can do whatever you want as long as you include the original copyright and license notice in any copy of the software/source.  There are many variations of this license in use.* 
<br>
To learn more, click the badge: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)