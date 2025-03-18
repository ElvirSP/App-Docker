# Usa una imagen ligera de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia archivos al contenedor
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Comando para ejecutar la app
CMD ["node", "server.js"]