# FROM node:8
# # Create app directory
# WORKDIR /data
# # Install app dependencies
# COPY package*.json ./

# RUN npm install
# # Copy app source code
# COPY . .

# #Expose port and start application
# EXPOSE 6677
# CMD [ "npm", "install" ]

FROM node:8
WORKDIR /usr/src/app
COPY server/package*.json ./
RUN npm install
COPY server/. .
EXPOSE 6677
CMD [ "npm", "start" ]