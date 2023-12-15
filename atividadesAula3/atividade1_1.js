class SistemaDeLogin {
    constructor() {
        this.usuarios = [];
    }

    cadastrarUsuario(nome, senha) {
        // encontra um usuário na lista de usuários exixtentes
        const usuarioExistente = this.usuarios.find(usuario => usuario.nome === nome);

        if (usuarioExistente) {
            console.log('Usuário já cadastrado.'); // caso usuário já exista 
            return; // para execução da função 
        }

        // Cadastra um novo usuário
        const novoUsuario = { nome, senha };//novo objeto com nome e senha
        this.usuarios.push(novoUsuario); // add o novo usuário no array usuários 
        console.log('Usuário cadastrado com sucesso!');
    }

    realizarLogin(nome, senha) {
        // procura se existe o usuário no array de usuários através do nome
        const usuario = this.usuarios.find(user => user.nome === nome);

        if (!usuario || usuario.senha !== senha) { // verifica se não encontra o usuário ou se a senha for diferente dos parâmetros informados 
            console.log('Nome de usuário ou senha incorretos. Tente novamente.');
            return; // para execução da função 
        }

        console.log('Login bem-sucedido!');
        return usuario; // retorna o usuário encontrado 
    }

    exibirMensagemPersonalizada(nome) {
      return (`Bem-vindo, ${nome}! Você está logado.`); // exibe mensagem personalizada 
    }
}

// Criando instância do sistema de login
const sistemaLogin = new SistemaDeLogin(); // cria o objeto 

// Cadastrando usuários
sistemaLogin.cadastrarUsuario("usuario1", "senha123"); // exemplos de usuário e senha
sistemaLogin.cadastrarUsuario("usuario2", "abc456");

// Realizando login e exibindo mensagem personalizada
const usuarioLogado = sistemaLogin.realizarLogin("usuario1", "senha123");// 
console.log(sistemaLogin.exibirMensagemPersonalizada(usuarioLogado.nome));
// Saída esperada: Bem-vindo, usuario1!  