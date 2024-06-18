#seleciona banco de dados
use startup;

#inserir dados na tabela membros
insert into membros(id_membro, nome, cargo) values (null, "Paulo", "Programador 1");
insert into membros(id_membro, nome, cargo, genero) value(null, "Maria", "Programador 2", "F");

#inserir dados na tabela tarefas
insert into tarefas(id_tarefa, descricao, id_membro_fk) values (null, "Criar a classe produto", 1);
insert into tarefas(id_tarefa, descricao, data_inicio, data_finalizacao, id_membro_fk) values (null, "Gerenciar banco de dados", '2023-03-01', '2024-06-16', 2);

#recuperar dados da tabela membros
select * from membros;
select nome from membros;

#recuperar dados da tabela tarefas
select * from tarefas;
select * from membros where genero="F";
select nome from membros where genero="F";

#recuparar dados ligado as tabelas membros e tarefas
select membros.nome, tarefas.descricao
from membros
inner join tarefas
ON membros.id_membro = tarefas.id_membro_fk;


#alterar tabela membros
alter table membros add column genero char(1);

#alterar tabela tarefas
alter table tarefas add column data_inicio date;
alter table tarefas add column data_finalizacao date;

#atualizar dados da tabela membros
update membros 
set genero="M"
where id_membro=1;

#atualizar dados da tabela tarefas
update tarefas
set data_inicio='2024-06-01'
where id_membro_fk=1;

update tarefas 
set data_finalizacao='2024-06-17'
where id_membro_fk=1;

#excluir dados da tabela membro
delete from membros;
delete from membros where id_membro=1;
delete from membros where cargo="teste";
delete from membros where cargo="teste" and nome="jose";
delete from membros where nome like 'silva%';

#excluir dados da tabela tarefas
delete from tarefas;
delete from tarefas where id_tarefa=1;