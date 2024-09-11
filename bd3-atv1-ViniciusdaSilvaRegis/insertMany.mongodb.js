/* NOME DO BANCO DE DADOS: */
const database = 'BD3-NoSql-AtlasMongoDB';

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = "bd3-nosql-atv1"

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use(database);

/* Insere um registro na coleção de dados */
db[collection].insertMany(
    [
        {
            "cod_aluno": "A001",
            "cod_turma": "T101",
            "nome": "Lucas Silva",
            "cpf": "123.456.789-01",
            "rg": "MG-12.345.678",
            "telefone_aluno": "(31) 91234-5678",
            "telefone_responsavel": "(31) 98765-4321",
            "email": "lucas.silva@example.com",
            "data_nascimento": "2006-04-15"
        },
        {
            "cod_aluno": "A002",
            "cod_turma": "T102",
            "nome": "Maria Oliveira",
            "cpf": "987.654.321-09",
            "rg": "SP-98.765.432",
            "telefone_aluno": "(11) 92345-6789",
            "telefone_responsavel": "(11) 99876-5432",
            "email": "maria.oliveira@example.com",
            "data_nascimento": "2007-05-22"
        },
        {
            "cod_aluno": "A003",
            "cod_turma": "T101",
            "nome": "João Santos",
            "cpf": "456.789.123-45",
            "rg": "RJ-45.678.912",
            "telefone_aluno": "(21) 93456-7890",
            "telefone_responsavel": "(21) 98765-1234",
            "email": "joao.santos@example.com",
            "data_nascimento": "2006-11-03"
        },
        {
            "cod_aluno": "A004",
            "cod_turma": "T103",
            "nome": "Ana Costa",
            "cpf": "321.654.987-02",
            "rg": "BA-32.165.498",
            "telefone_aluno": "(71) 94567-8901",
            "telefone_responsavel": "(71) 91234-8765",
            "email": "ana.costa@example.com",
            "data_nascimento": "2008-02-17"
        },
        {
            "cod_aluno": "A005",
            "cod_turma": "T102",
            "nome": "Pedro Lima",
            "cpf": "789.123.456-78",
            "rg": "RS-78.912.345",
            "telefone_aluno": "(51) 95678-9012",
            "telefone_responsavel": "(51) 92345-6789",
            "email": "pedro.lima@example.com",
            "data_nascimento": "2007-09-30"
        },
        {
            "cod_aluno": "A006",
            "cod_turma": "T103",
            "nome": "Carla Souza",
            "cpf": "654.321.987-03",
            "rg": "PR-65.432.198",
            "telefone_aluno": "(41) 96789-0123",
            "telefone_responsavel": "(41) 94567-8901",
            "email": "carla.souza@example.com",
            "data_nascimento": "2008-01-25"
        },
        {
            "cod_aluno": "A007",
            "cod_turma": "T104",
            "nome": "Rafael Almeida",
            "cpf": "852.963.741-07",
            "rg": "SC-85.296.374",
            "telefone_aluno": "(48) 97890-1234",
            "telefone_responsavel": "(48) 96789-0123",
            "email": "rafael.almeida@example.com",
            "data_nascimento": "2006-07-19"
        },
        {
            "cod_aluno": "A008",
            "cod_turma": "T104",
            "nome": "Beatriz Ferreira",
            "cpf": "963.852.741-08",
            "rg": "MG-96.385.274",
            "telefone_aluno": "(31) 98901-2345",
            "telefone_responsavel": "(31) 97890-1234",
            "email": "beatriz.ferreira@example.com",
            "data_nascimento": "2007-08-05"
        },
        {
            "cod_aluno": "A009",
            "cod_turma": "T105",
            "nome": "Fernando Rocha",
            "cpf": "741.852.963-06",
            "rg": "SP-74.185.296",
            "telefone_aluno": "(11) 99012-3456",
            "telefone_responsavel": "(11) 98901-2345",
            "email": "fernando.rocha@example.com",
            "data_nascimento": "2006-12-11"
        },
        {
            "cod_aluno": "A010",
            "cod_turma": "T105",
            "nome": "Luana Mendes",
            "cpf": "147.258.369-05",
            "rg": "RJ-14.725.836",
            "telefone_aluno": "(21) 90123-4567",
            "telefone_responsavel": "(21) 99012-3456",
            "email": "luana.mendes@example.com",
            "data_nascimento": "2008-03-14"
        }
    ]
    
)