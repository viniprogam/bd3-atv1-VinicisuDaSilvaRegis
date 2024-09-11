/* NOME DO BANCO DE DADOS: */
const database = 'BD3-NoSql-AtlasMongoDB';

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = "bd3-nosql-atv1"

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use(database);

/* altera os dados de um documento da collection */

db[collection].updateOne(
    {cod_aluno: "A001"},
    { $set: {nome: "Vinicius Regis"}},
    { $set: {cpf: "111.222.333-44"}},
    { $set: {rg: "SP-11.555.888"}},
)