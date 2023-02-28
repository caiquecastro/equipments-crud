FROM node:18

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci

COPY . /usr/src/app

EXPOSE 3000

CMD [ "node", "bin/www" ]
