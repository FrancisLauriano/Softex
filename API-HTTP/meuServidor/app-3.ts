import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
const app = express();

const porta: number = 3333;

app.use(bodyParser.json());

const livros = [
    { id: 1, titulo: "Aprendendo TypeScript", autor: "John Doe" },
  { id: 2, titulo: "Node.js para Iniciantes", autor: "Jane Smith" }
];


// Buscar todos os livros
app.get('/livros', (req: Request, res: Response) => {
    res.send(livros)
});





app.listen(porta, () => {
    console.log(`Servidor typescrip rodando em http://localhost:${porta}`);
})

