FROM node:alpine

RUN npm i -g @nestjs/cli

COPY package*.json ./

RUN npm i

COPY . .

CMD npm run start:dev

