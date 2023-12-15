class Contato {
    constructor(nome, telefone) {
        this.nome = nome;
        this.telefone = telefone;
    }
}

class AgendaContatos {
    constructor() {
        this.contatos = [];
    }

    adicionarContato(contato) {
        this.contatos.push(contato);
    }

    excluirContato(nome) {
        const index = this.contatos.findIndex(contato => contato.nome === nome);
        if (index !== -1) {
            this.contatos.splice(index, 1);
            console.log(`Contato ${nome} removido.`);
        } else {
            console.log(`Contato ${nome} não encontrado.`);
        }
    }

    listarContatos() {
        if (this.contatos.length === 0) {
            console.log("Nenhum contato na agenda.");
        } else {
            console.log("Lista de Contatos:");
            this.contatos.forEach(contato => {
                console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}`);
            });
        }
    }
}

// Exemplo de uso
const agenda = new AgendaContatos();

// Adicionando contatos
const contato1 = new Contato("João", "123456789");
const contato2 = new Contato("Maria", "987654321");
const contato3 = new Contato("Jose", "123459876");
agenda.adicionarContato(contato1);
agenda.adicionarContato(contato2);
agenda.adicionarContato(contato3);

// Listando contatos
agenda.listarContatos();

// Removendo um contato
agenda.excluirContato("João");

// Listando contatos após remoção
agenda.listarContatos();
