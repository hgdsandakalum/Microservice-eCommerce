FROM node:16.15.0-alpine

COPY . /opt/app

WORKDIR /opt/app

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]