// importar apenas aas funções que precisamos utilizar do "fs"
import { existsSync, readFileSync, mkdirSync, writeFileSync } from "fs"

// 1. Definição do Tipo do Dado (Model)
type Livro = {
    titulo: string;
    autor: string;
    ano: number;
    lido: boolean;
};


// 2. Lista  Inicial de Dados (Mock Data)
const livros: Livro[] = [
    { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943, lido: true},
    { titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", ano: 1997, lido: false}
    // Adicione mais livros aqui
];


// 3. verificação e Criação do Diretório "dados"
const pasta = "./dados";
if (!existsSync(pasta)) { //verifica a existencia do caminho
    mkdirSync(pasta); //Caso não exista ele cria uma pasta com o nome "data"
}


// 4. Salvando os dadps convertidos na pasta em JSON
const caminho = `${pasta}/livros.json`;
writeFileSync(caminho, JSON.stringify(livros, null, 2));
console.log("Dados salvos com sucesso! ✅");


// 5. Lendo os dados de volta e convertendo em Objetos
const textoLido = readFileSync(caminho, "utf-8");
const livrosRecuperados: Livro[] = JSON.parse(textoLido);


// 6. Exibição Formata do Conteúdo Recuperado
console.log("\n === LIVROS RECUPERADOS ===")
livrosRecuperados.forEach((livro, index) => {
    const status = livro.lido ? "✅Lido" : "❌Não lido";
    console.log(`${index + 1}. ${livro.titulo} - ${livro.autor} (${livro.ano}) - ${status}`)
});