FROM node:8 as builder

# Create app directory
WORKDIR /usr/src/app

EXPOSE 3000
COPY package*.json ./
RUN npm install -g parcel
RUN npm install -g curl
RUN npm install
RUN npm start
