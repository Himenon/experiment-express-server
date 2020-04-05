FROM node:12.9.1-alpine

ENV TZ "Asia/Tokyo"

WORKDIR /workdir

COPY ./package.json /workdir/package.json
COPY ./src /workdir/src
COPY yarn.lock /workdir/yarn.lock

RUN yarn

CMD ["node", "src/server.js"]
