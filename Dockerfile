FROM node 

WORKDIR /client/

COPY package*.json /client/

COPY . /client/

RUN yarn install && yarn build 

EXPOSE 3000

CMD ["yarn", "run", "preview"]
