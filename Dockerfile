FROM node 

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install && yarn install --cwd server/package.json

COPY . .

EXPOSE 3000 6969

CMD ["yarn", "run", "dev"]
