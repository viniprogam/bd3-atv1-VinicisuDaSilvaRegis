/* NOME DO BANCO DE DADOS: */
const database = 'BD3-NoSql-AtlasMongoDB';

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = "bd3-nosql-atv1"

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use(database);

/*deleta um dado da coleção*/
db[collection].deleteOne(
    {cod_aluno: "A007"}
);