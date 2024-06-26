# Getting started
## 1. Install Dependencies
Install all the `node_modules` dependencies and dev-dependencies by checking the `package.json` file.
```bash
npm install
```

## 2. Start the local MongoDB service
```sudo systemctl start mongod```

## 3. Start the Server
Once dependencies are installed, run the following command to start the server:
```npx nodemon```
Assuming that nodemon is not installed globally, this will start the index.js file. You should see the "listening to port" message.

## 4. Access the Application
Go to your web browser, and type:
```localhost:3000```

## 5. Check Server Response
Open the console of your browser to check the response sent by the server.
