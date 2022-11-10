#criar db
CREATE DATABASE todo_db;

#criar tabela
CREATE TABLE todos (
    id SERIAL PRIMARY KEY, 
    title TEXT NOT NULL,
    discription TEXT NOT NULL
);