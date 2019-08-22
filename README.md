## Instructions
Default configuration for node/express webserver. This should work as long as all the global dependencies with npm have
been installed already. (the commands with `npm -g ...`)

- In the root folder, type:
    - `npm install` - This will install all the dependencies specified in the `package.json` file to run the project
- In the `company-app/src/backend-api` folder, type:
    - `npm install`
    
### MySQL credentials
- place the `mysql.env` to match: `company-app/src/backend-api/mysql.env`
- the file is posted in teams chat

### Running the servers
- To run the express server:
    - `cd company-app/src/backend-api/`
    - `nodemon index.js`
    
- To run the angular server:
    - `npm start`
    
