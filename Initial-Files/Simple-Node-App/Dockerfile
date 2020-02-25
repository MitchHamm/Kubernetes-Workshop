FROM node

WORKDIR /usr/app

COPY package*.json ./
COPY . ./

RUN apt-get update
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get install yarn -y
RUN yarn install

EXPOSE 3000
CMD [ "yarn", "start" ]
