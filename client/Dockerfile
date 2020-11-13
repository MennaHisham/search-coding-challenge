FROM node:8
WORKDIR /usr/src/app
COPY client/package*.json ./
RUN npm install
COPY client/. .
EXPOSE 3000
CMD ["npm", "start"]