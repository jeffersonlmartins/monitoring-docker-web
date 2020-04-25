FROM node:lts-alpine3.11 as BUILD
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . /app
RUN yarn build

FROM nginx:alpine
COPY docker/default.conf /etc/nginx/conf.d/
COPY --from=BUILD /app/dist/* /app/

EXPOSE 81
CMD ["nginx", "-g", "daemon off;"]