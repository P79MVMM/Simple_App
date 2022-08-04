FROM node:fermium-alpine3.15

LABEL maintainer="HareCliftonL@JohnDeere.com"

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

ENV MODE=production

EXPOSE 3000

CMD [ "npm", "start" ]
