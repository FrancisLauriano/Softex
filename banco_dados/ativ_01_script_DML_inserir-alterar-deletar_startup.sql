#seleciona banco de dados
use startup;

#excluir tabela
drop table tarefas;
drop table membros;

#desativar verificação da chave estrangeira
SET FOREIGN_KEY_CHECKS=0;

#ativar verificação da chave estrangeira
SET FOREIGN_KEY_CHECKS=1;

#inserir dados na tabela membros
insert into membros(id_membro, nome, cargo) values (null, "Paulo", "Programador 1");

#inserir dados na tabela tarefas
insert into tarefas(id_tarefa, descricao, id_membro_fk) values (null, "Criar a classe produto", 1);

#recuperar dados da tabela membros
select * from membros;
select nome from membros;

#recuperar dados da tabela tarefas
select * from tarefas;

#recuparar dados ligado as duas tabelas
select membros.nome, tarefas.descricao
from membros
inner join tarefas
ON membros.id_membro = tarefas.id_membro_FK;

#excluir dados da tabela membro
delete from membros;
delete from membros where id_membro=1;
delete from membros where cargo="teste";
delete from membros where cargo="teste" and nome="jose";
delete from membros where nome like 'silva%';

#excluir dados da tabela tarefas
delete from tarefas;
delete from tarefas where id_tarefa=1;

#atualizar dados da tabela membros
update membros 
set genero="M"
where id_membro=1;

update tarefas
set data_inicio='2024-06-01'
where id_membro_FK=1;


#atualizar dados da tabela tarefas

#alterar tabela
alter table membros add column genero char(1);
alter table tarefas add column data_inicio date;