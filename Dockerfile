# Establece la imagen base de Node.js con la versión deseada
FROM public.ecr.aws/lambda/nodejs:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /var/task

# Copia el archivo index.zip a /app
COPY ./A01025250/index.zip .

# # Instalar unzip
# RUN  yum update && yum install -y unzip

# # Descomprime el archivo index.zip
# RUN unzip index.zip

# Copia los archivos package.json y package-lock.json a /app
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Comando para ejecutar la aplicación
CMD [ "app.handler" ]