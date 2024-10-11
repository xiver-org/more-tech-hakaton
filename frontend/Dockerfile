FROM node:22-alpine3.19 as build-deps

# ENV NODE_ENV production
WORKDIR /app

COPY ./package.json ./yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build

CMD [ "node", ".output/server/index.mjs" ]
