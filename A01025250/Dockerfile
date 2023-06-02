# Establece la imagen base de Node.js con la versión deseada
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR index

# Copia los archivos package.json y package-lock.json a /app
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

COPY . .

# Puero
EXPOSE 3000

# Comando para ejecutar la aplicación | nombre de aplicación
CMD [ "npm", "index" ]