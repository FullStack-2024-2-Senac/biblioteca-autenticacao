# Etapa de build do Angular
FROM node:14 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Etapa de produção com NGINX
FROM nginx:alpine

# Copiar a build do Angular para a pasta padrão do NGINX
COPY --from=build /app/dist/frontend-angular /usr/share/nginx/html

# Copiar a configuração do NGINX
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Expor porta 443 para SSL
EXPOSE 443

# Comando para iniciar o NGINX
CMD ["nginx", "-g", "daemon off;"]
