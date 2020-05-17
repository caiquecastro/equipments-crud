FROM node:12

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . /usr/src/app

EXPOSE 3000

CMD [ "node", "bin/www" ]
