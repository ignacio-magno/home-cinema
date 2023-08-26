import os
from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

directory_path = os.environ.get('DIRECTORY_PATH')

@app.route('/')
def read_dir():
    # Obteniendo la ruta del directorio desde el entorno

    try:
        # Leyendo los nombres de los archivos en el directorio
        file_names = os.listdir(directory_path)
        return jsonify(file_names)  # retornando los nombres de los archivos como JSON
    except Exception as e:
        # Si ocurre un error (como si el directorio no existe), retorna el mensaje de error
        return jsonify({'error': str(e)})


@app.route('/movie/<filename>')
def return_file(filename):
    # Obteniendo el directorio desde las variables de entorno
    try:
        # Verificando si el archivo es un archivo mp4 para seguridad.
        if not filename.endswith(".mp4"):
            return jsonify({'error': 'File format not supported.'})

        # Enviando el archivo como respuesta mp4
        name = os.path.join(directory_path, filename)
        print(name)
        return send_from_directory(directory_path, filename)
    except Exception as e:
        # Si ocurre un error, como el archivo no encontrado, retornar el mensaje de error
        return jsonify({'error': str(e)})


if __name__ == '__main__':
    app.run(host="0.0.0.0")
