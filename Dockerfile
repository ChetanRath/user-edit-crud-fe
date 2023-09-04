FROM node:18-alpine
RUN apk add yarn
WORKDIR /usr/src/app

COPY ./package.json .
COPY ./lerna.json .
COPY ./yarn.lock .
COPY ./.env .

# Add app package.json
ADD ./packages/api-urls/package.json ./packages/api-urls/package.json

RUN yarn install

ADD ./packages/api-urls ./packages/api-urls

CMD ["yarn", "run", "start:api-urls"]