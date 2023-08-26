# Usar una imagen base oficial de Python
FROM python:3.8-slim-buster

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo de requerimientos de Python al contenedor
COPY requirements.txt .

# Instalar dependencias Python
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el código de la aplicación al contenedor
COPY . .

# Exponer el puerto donde la aplicación estará escuchando
EXPOSE 5000

# Comando para iniciar la aplicación
CMD ["python", "main.py", "--host=0.0.0.0"]