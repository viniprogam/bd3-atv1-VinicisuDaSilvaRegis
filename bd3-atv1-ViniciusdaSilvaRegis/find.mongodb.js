/* NOME DO BANCO DE DADOS: */
const database = 'BD3-NoSql-AtlasMongoDB';

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = "bd3-nosql-atv1"

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use(database);

/* Seleciona todos os registros da coleção */

db[collection].find();