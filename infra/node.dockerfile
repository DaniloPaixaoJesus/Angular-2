FROM node:latest
LABEL maintainer="contato.danilo.paixao@gmail.com"
ENV PORT=3000
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT npm start
EXPOSE $PORT