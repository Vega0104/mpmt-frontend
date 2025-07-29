# Étape 1 : Build Angular
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --configuration=production

# Étape 2 : Serveur NGINX pour fichiers statiques
FROM nginx:alpine

# Copie le build Angular
# Copie le build Angular
COPY --from=build /app/dist/temp-front/browser /usr/share/nginx/html

# Copie la config nginx (pour SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copie le script d'entrée qui générera env.js dynamiquement
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
