function biblioteca(){
   
   const livro = {
      titulo: [],
      autor: [],
      isDisponivel: [],
   }

   function adicionar(){
      livro.titulo.push();
      livro.autor.push();
      livro.isDisponivel.push();
   }
   

   function localizar(localizaPorTitulo){
      const indice = undefined;
      if(indice !== -1){
         return livro.titulo.indexOf(localizaPorTitulo)
      }else{
         return "Título de livro Não Localizado!"
      }
   }
   

   function remover(removePorTitulo){
      const indice = localizar(removePorTitulo);
      if(indice !== -1){
         livro.titulo.splice(indice,1);
         livro.autor.splice(indice,1);
         livro.isDisponivel.splice(indice,1);
      }else{
         return "Título de livro não pode ser removido! Não Localizado!"
      }
   }
   
   let exibirLista = ()=> {
      for(let item in livro){
         console.log(`LISTAS DE LIVROS`);
         console.log(`Títulos: ${livro.titulo[item]}`);
         console.log(`Autores: ${livro.autor[item]}`);
         console.log(`Disponibilidade: ${livro.isDisponivel[item]}`);
      }
   }
   exibirLista();
}
biblioteca();

