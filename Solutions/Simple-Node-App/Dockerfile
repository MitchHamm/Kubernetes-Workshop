FROM node

ENV EXPOSE_PORT=5000
ENV HOST="mysql"
ENV USER="root"
ENV PASSWORD="root"

WORKDIR /usr/src/app

COPY . .

RUN apt-get update && \
    yarn install

EXPOSE $EXPOSE_PORT

CMD ["yarn", "start"]
