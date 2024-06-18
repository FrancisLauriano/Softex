#criar database (banco de dados)
create database startup;

#selecionar (usar) database
use startup;

create table membros(
id_membro int auto_increment not null,
nome varchar(45) not null,
cargo varchar(45) not null,
primary key(id_membro)
);

create table tarefas(
id_tarefa int auto_increment not null,
descricao varchar(100) not null,
primary key(id_tarefa),
id_membro_fk int not null,
foreign key(id_membro_FK) references membros(id_membro)
);

create table tarefas(
id_tarefa int auto_increment not null,
descricao varchar(45) not null,
primary key(id_tarefa)
);
alter table tarefas add column id_membro_fk int not null;
alter table tarefas add constraint id_membro_fk foreign key(id_membro_fk) references membros(id_membro);

