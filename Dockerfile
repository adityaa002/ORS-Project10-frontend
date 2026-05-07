# Stage 1 - Build Angular
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build -- --configuration production

# Stage 2 - Nginx serve
FROM nginx:alpine

# Angular 17+ safe path (browser included)
COPY --from=build /app/dist/orsproject10-ui/browser/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]