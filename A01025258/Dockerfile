# Usa la imagen base de Python
FROM python:3

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos necesarios al directorio de trabajo del contenedor
COPY lambda_function.py .

# Instala las dependencias del proyecto, si las hay (opcional)
# COPY requirements.txt .
# RUN pip install --no-cache-dir -r requirements.txt

# Define el comando por defecto para ejecutar cuando el contenedor se inicia
CMD [ "python", "lambda_function.py" ]
