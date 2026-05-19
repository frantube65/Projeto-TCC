CREATE DATABASE poesia;

USE poesia;

CREATE TABLE usuarios(

    id INT AUTO_INCREMENT PRIMARY KEY,

    usuario VARCHAR(100),

    senha VARCHAR(255),

    poema LONGTEXT,

    tema VARCHAR(20) DEFAULT 'dark'
);
CREATE TABLE poemas(
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    titulo VARCHAR(255),
    conteudo LONGTEXT
);