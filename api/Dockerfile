FROM node:lts-alpine3.11
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . /app
EXPOSE 3333
CMD ["./start.sh"]