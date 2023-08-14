// Crie uma lista encadeada em que cada elemento representa uma pessoa.
// Ela precisa conter informações como nome, idade e referência ao filho dela.


// Classe nó é a menor estrutura de uma lista ligada 
// classe nó: possui um construtor e dois atributos (Nome e próximo)
class Node{
    constructor(nome){ // no lugar de element colocar nome
        this.value = nome;
        this.next = undefined;
    }
}

// classe lista lisgada: define a estrutura ligada com vários nós 
// e as operações (métodos) para manipular a lista ligada
// classe lista ligada: possui um construtor(q recebe o nó cabeça da lista) e  
//tambem os métodos referentes às operações (métodos) de manipulação da lista
class Lista{ 
    constructor(){
        this.head = undefined;
        this.count = 0;

    }
    //Métodos da classe lista (para manipulação da lista)
    //1-push() - adiciona um elemento no fim da lista:
    push (nome){
        const node = new Node (nome);
        let current; 

        if (this.head == null){
            this.head = node;
        }else{
            current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = node;
        }

        this.count++;
    }

    //2-getElementeAt(position) - retorna um elemento de uma posição especifica da lista
    getElementAt (position) {
        if(position >= 0 && position <= this.count) {
            let node = this.head;
            for(let i = 0; i < position && node != null; i++){
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    //3-insertAt(element, position) - adiciona um elemento em qualquer posição da lista
    insertAt (nome, position) {
        if(position >= 0 && position <= this.count){
            const node = new Node(nome);
            if(position === 0) {
                const current = this.head;
                node.next = current;
                this.head = node;
            }else{
                const previous = this.getElementAt(position-1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    } 
    
    //4-removeAt(position) - remove um elemento de uma posição especifica da lista
    removeAt(position) {
        if(position >= 0 && position <= this.count){
            const current = this.head;
            if(position === 0){
                this.head = current.next;
            }else{
                const previous = this.getElementAt(position - 1);
                const current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return true;
        }
        return false;
    }

    //5-indexOf(element) - retorna a posição de um elemento da lista
    indexOf(nome) {
        let current = this.head;
        for(let i = 0; i < this.count && current != null; i++){
            if(current.value == nome) {
                return i;
            }else{
                current = current.next;
            }
        }
        return -1;
    }
   
    //6-isEmpty() - checa se a lista esta vazia 
    isEmpty(){
        if (this.count ===0){
            return true;
        }else{
            return false;
        }
    }

    //7-size() - retorna o tamanho da lista
    size() {
        return this.count;
    }

}

const lista = new Lista ();
lista.push(15);
lista.push(25);
lista.push(30);
// console.log(lista);
console.log(JSON.stringify(lista, null, 2));
lista.insertAt(7,2); // saída esperada: 15, 25, 7, 30
console.log(JSON.stringify(lista, null, 2));
let result = lista.removeAt(5); // saída esperada: não sei!
console.log(JSON.stringify(lista, null, 2));
result = lista.indexOf(7);
console.log(result);
const lista2 = new Lista();
console.log("Vazio:", lista2.isEmpty());
console.log("Tamanho da lista", lista.size());
console.log("Tamanho da lista2", lista2.size());






