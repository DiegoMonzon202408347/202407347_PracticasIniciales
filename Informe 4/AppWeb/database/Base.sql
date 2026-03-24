create database if not exists web;
use web;

CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    registro_academico INT NOT NULL,
    nombres VARCHAR(30) NOT NULL,
    apellidos VARCHAR(30) NOT NULL,
    correo VARCHAR(20) UNIQUE NOT NULL,
    contraseña VARCHAR(14) NOT NULL
);

CREATE TABLE catedratico (
    id_catedratico INT AUTO_INCREMENT PRIMARY KEY,
    nombres VARCHAR(26) NOT NULL,
    apellidos VARCHAR(30) NOT NULL,
    correo VARCHAR(19) UNIQUE NOT NULL
);

CREATE TABLE curso (
    id_curso INT AUTO_INCREMENT PRIMARY KEY,
    nombre_curso VARCHAR(37) NOT NULL,
    creditos INT NOT NULL,
    area VARCHAR(28)
);

CREATE TABLE publicacion (
    id_publicacion INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_curso INT,
    id_catedratico INT,
    mensaje VARCHAR(22) NOT NULL,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
    FOREIGN KEY (id_curso) REFERENCES curso(id_curso),
    FOREIGN KEY (id_catedratico) REFERENCES catedratico(id_catedratico)
);

CREATE TABLE comentario (
    id_comentario INT AUTO_INCREMENT PRIMARY KEY,
    id_publicacion INT NOT NULL,
    id_usuario INT NOT NULL,
    mensaje VARCHAR(42) NOT NULL,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (id_publicacion) REFERENCES publicacion(id_publicacion),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE curso_aprobado (
    id_registro INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_curso INT NOT NULL,
    fecha_aprobacion DATE,

    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
    FOREIGN KEY (id_curso) REFERENCES curso(id_curso)
);

INSERT INTO usuario (registro_academico,nombres,apellidos,correo,contraseña)
VALUES ('20210301','Denki','Kaminari','dkam@gmail.com','6get8');

INSERT INTO curso (nombre_curso,creditos,area)
VALUES ('Programacion 1',5,'Sistemas');

INSERT INTO curso_aprobado (id_usuario,id_curso,fecha_aprobacion)
VALUES (1,1,'2025-11-10');

show tables;
select * from usuario;