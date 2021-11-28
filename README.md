## NLWHeatDoWhile API

<p>This project was developed at a <a target="_blank" href="https://app.rocketseat.com.br/">Rocketseat</a> online event. An application to measure the expectation of DoWhile which is an event that aims to help developers update themselves on the direction of development technologies.</p>

## Technology

Here are the technologies used in this project.

- Nodejs
- Typescript
- Express
- JWT
- Prisma
- Socket.io

## Services Used

- Github Authentication

## How to use

Login wuth your Github account and send a message, it will update the page imediately with your message, if ou share this page with others, you will see their messages in realtime too.

## RUN

To run the application you need to follow the steps below:

- Clone this repository
- In directory of project run `yarn install || npm install`
- Copy .env.example to .env
- Configure [Github OAuth App](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps) and add JWT Secret in .env
- Run in terminal `yarn dev || npm run dev`

The application will run on port 400: `http://localhost:400` and then just use your Insomnia or Postman to test the requests.
