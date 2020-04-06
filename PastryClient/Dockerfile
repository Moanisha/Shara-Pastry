FROM node:10.11.0-alpine

# Create app directory
WORKDIR /usr/src/pastry-client

# Install app dependencies
COPY package.json .

RUN npm install

# Bundle app source
COPY . .

EXPOSE 4200
CMD npm start