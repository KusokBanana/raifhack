FROM node:10

WORKDIR /var/www

COPY frontend/package.json frontend/yarn.lock frontend/node_modules ./

RUN yarn install

EXPOSE 4200

CMD yarn start --host 0.0.0.0
