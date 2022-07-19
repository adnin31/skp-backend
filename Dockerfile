FROM node:16.14.0-alpine3.15
WORKDIR /app

COPY package*.json ./
RUN yarn --silent

COPY . ./

EXPOSE 5001

# ENTRYPOINT ["node", "./index.js"]
