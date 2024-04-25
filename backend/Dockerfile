# Use an official Node.js image as the base
FROM node:20-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./
COPY index.js ./


RUN npm install


EXPOSE 8080
EXPOSE 3000

# Set the default command to start the server using "npm start"
CMD ["npm","start"]
