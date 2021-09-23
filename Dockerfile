### STAGE 1: Build ###
FROM node:14.15.0-alpine3.10 AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . . 
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.6-alpine
EXPOSE 80
COPY --from=build /usr/src/app/dist/etools /usr/share/nginx/html
