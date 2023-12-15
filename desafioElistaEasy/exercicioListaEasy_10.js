class Paciente {
  #cpf;
  constructor(nome, idade, cpf) {
    this.nome = nome;
    this.idade = idade;
    this.#cpf = cpf;
    this.historicoMedico = new HistoricoMedico();
  }

  agendarConsulta(medico, data, hora) {
    const consulta = new Consulta(medico, this, data, hora);
    this.historicoMedico.adicionarConsulta(consulta);
    return consulta;
  }

  consultarHistoricoMedico() {
    return this.historicoMedico;
  }
}

class Medico {
  constructor(nome, especialidade, crm) {
    this.nome = nome;
    this.especialidade = especialidade;
    this.crm = crm;
  }

  registrarDiagnostico(consulta, diagnostico) {
    consulta.registrarDiagnostico(diagnostico);
  }
}

class Consulta {
  constructor(medico, paciente, data, hora) {
    this.medico = medico;
    this.paciente = paciente;
    this.data = data;
    this.hora = hora;
    this.diagnostico = null;
  }

  registrarDiagnostico(diagnostico) {
    this.diagnostico = diagnostico;
  }
}

class HistoricoMedico {
  constructor() {
    this.consultas = [];
  }

  adicionarConsulta(consulta) {
    this.consultas.push(consulta);
  }

  obterHistorico() {
    return this.consultas;
  }
}

// Exemplo de uso:

const paciente1 = new Paciente("João", 25, "123.456.789-01");
const medico1 = new Medico("Dr. Silva", "Cardiologista", "CRM12345");

const consulta1 = paciente1.agendarConsulta(medico1, "2023-01-15", "10:30");
medico1.registrarDiagnostico(consulta1, "Pressão alta, prescrever medicação.");

const historicoPaciente1 = paciente1.consultarHistoricoMedico();
const consultasPaciente1 = historicoPaciente1.obterHistorico();

console.log("Histórico Médico de " + paciente1.nome);
consultasPaciente1.forEach((consulta, index) => {
  console.log(`Consulta ${index + 1}: ${consulta.data} ${consulta.hora} - Diagnóstico: ${consulta.diagnostico}`);
});
