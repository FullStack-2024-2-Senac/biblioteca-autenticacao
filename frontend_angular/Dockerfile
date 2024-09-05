# Etapa de build do Angular
FROM node:14 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Etapa para servir a aplicação com NGINX
FROM nginx:alpine
COPY --from=build /app/dist/frontend-angular /usr/share/nginx/html
