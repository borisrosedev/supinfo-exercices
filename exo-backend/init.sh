#!/bin/bash
if [[ ! -f "package.json" ]]
then 
    npm init --yes && npm install express cors dotenv 
    npm install mongoose
    npm install jsonwebtoken
    npm install bcrypt
    npm i swagger-ui-express
    npm i yamljs
    npm i redis-om
else 
    npm install
fi
