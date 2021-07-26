const conexao = require('../infraestrutura/conexao');

class Atendimento {
    adiciona(atendimento) {
        const sql = 'INSERT INTO atendimentos SET ? ';

        // conexao.query("INSERT INTO atendimentos (cliente,pet,servico,status,observacoes) values (?,?,?,?,?)",[atendimento.cliente,atendimento.pet,atendimento.servico,atendimento.status,atendimento.observacoes])

        conexao.query(sql, atendimento, (erro, resultados) => {
            if (erro) {
                console.log(erro);
            } else {
                console.log(resultados);
            }
        })
    }
}

module.exports = new Atendimento;