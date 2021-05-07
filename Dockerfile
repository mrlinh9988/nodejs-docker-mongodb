FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./
# Adding this COPY instruction before running npm install or
# copying the application code allows us to take advantage of Docker’s
# caching mechanism

USER node
# To ensure that all of the application files are owned by the non-root
# node user, including the contents of the node_modules directory, switch
# the user to node before running npm install

RUN npm install

COPY --chown=node:node . .
# This will ensure that the application files are owned by the non-root
# node user

EXPOSE 8080
# EXPOSE does not publish the port, but instead functions as a way of
# documenting which ports on the container will be published at runtime.

CMD [ "node", "app.js" ]