//Exercício 1 - Interface Carro
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string; // Propriedade opcional
}
const meuCarro: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    motor: "2.0 Flex"
};
console.log("Meu Carro:", meuCarro);
 
 
//Exercício 2 - Interface para Multiplicação
interface Multiplicacao {
    (a: number, b: number): number;
}
const multiplicar: Multiplicacao = (x, y) => x * y;
console.log("Multiplicação 3 x 4:", multiplicar(3, 4)); // 12
console.log("Multiplicação 7 x 2:", multiplicar(7, 2)); //
 
 
//Exercício 3 - Função Genérica inverterArray<T>
function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
}
const numeros = [1, 2, 3, 4, 5];
const palavras = ["TypeScript", "é", "incrível"];
console.log("Array invertido (números):", inverterArray(numeros)); // [5, 4, 3, 2, 1]
console.log("Array invertido (palavras):", inverterArray(palavras)); // ["incrível", "é", "TypeScript"]
 
//Exercício 4 - Interface Genérica Repositorio<T>
interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}
class UsuarioRepositorio implements Repositorio<{ nome: string; email: string }> {
    private usuarios: { nome: string; email: string }[] = [];
    salvar(dado: { nome: string; email: string }): void {
        this.usuarios.push(dado);
    }
    obterTodos(): { nome: string; email: string }[] {
        return this.usuarios;
    }
}
// Teste da implementação
const repo = new UsuarioRepositorio();
repo.salvar({ nome: "João", email: "joao@email.com" });
repo.salvar({ nome: "Maria", email: "maria@email.com" });
console.log("Lista de usuários:", repo.obterTodos());
 
 
//Exercício 5 - Type Alias RespostaServidor
type RespostaServidor = string | boolean;
function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === "string") {
        console.log(`Resposta do servidor: ${resposta}`);
    } else if (typeof resposta === "boolean") {
        console.log(`Operação foi bem-sucedida? ${resposta ? "Sim" : "Não"}`);
    }
}
// Teste da função
processarResposta("Dados processados com sucesso!");
processarResposta(true);
processarResposta(false);
 
 
//Exercício 6 - Intersection Types EstudanteTrabalhador
type Estudante = {
    nome: string;
    curso: string;
};
type Trabalhador = {
    empresa: string;
    cargo: string;
};
type EstudanteTrabalhador = Estudante & Trabalhador;
const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Carlos",
    curso: "Engenharia de Software",
    empresa: "Tech Corp",
    cargo: "Desenvolvedor Júnior"
};
console.log("Estudante Trabalhador:", estudanteTrabalhador);