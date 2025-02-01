FROM nginx:alpine

# Copiar los archivos de la página web al directorio de Nginx
COPY . /usr/share/nginx/html

# Exponer el puerto 80 para servir el sitio web
EXPOSE 80

# Comando por defecto para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
