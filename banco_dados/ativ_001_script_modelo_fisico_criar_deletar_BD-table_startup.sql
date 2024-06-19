#criar database (banco de dados)
create database startup;

#excluir banco de dados
drop database startup;

#selecionar (usar) database
use startup;

#criar tabela membros 
create table membros(
id_membro int auto_increment not null,
nome varchar(45) not null,
cargo varchar(45) not null,
primary key(id_membro)
);

#criar tabela tarefas com chave estrangeira
create table tarefas(
id_tarefa int auto_increment not null,
descricao varchar(100) not null,
primary key(id_tarefa),
id_membro_fk int not null,
foreign key(id_membro_fk) references membros(id_membro)
);


#criar tabela tarefas sem chave estrangeira e adicionar chave estrageira posteriormente
create table tarefas(
id_tarefa int auto_increment not null,
descricao varchar(45) not null,
primary key(id_tarefa)
);

#adicionar chave estrangeira a tabela tarefas criada anteriormente
alter table tarefas add column id_membro_fk int not null;
alter table tarefas add constraint id_membro_fk foreign key(id_membro_fk) references membros(id_membro);


#desativar verificação da chave estrangeira
SET FOREIGN_KEY_CHECKS=0;

#ativar verificação da chave estrangeira
SET FOREIGN_KEY_CHECKS=1;

#excluir tabela
drop table tarefas;
drop table membros;
