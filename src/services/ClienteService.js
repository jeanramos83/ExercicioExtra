module.exports.regrasCredito = function(novoCliente) { 
        
    var retorno
    
    if(novoCliente.idade < 18){
          retorno = {
              Mensagem:"Limite de crédito não aprovado!!"
          }
      }
      else if(novoCliente.restSerasa == true && novoCliente.empregado == false){
          retorno = {
              Mensagem:"Limite de crédito não aprovado!!"
          }
      }
      else if(novoCliente.restSerasa == true && novoCliente.empregado == false && novoCliente.tempoAtuacao < 6){
          retorno = {
              Mensagem:"Limite de crédito não aprovado!!"
          }
      }
      else if(novoCliente.restSerasa == true && novoCliente.empregado == true && novoCliente.tempoAtuacao >= 6 && novoCliente.tempoAtuacao < 12){
          retorno = {
              Mensagem:"Limite de 10% do salário bruto disponível", 
              Limite: this.porcentagemLimite(novoCliente.salarioBruto, 10)
          }
      }
      else if(novoCliente.RestricaoSerasa == true && cliente.Emprego == true && novoCliente.tempoAtuacao >= 12){
          retorno = {
              Mensagem:"Limite de 20% do salário bruto disponível", 
              Limite: this.porcentagemLimite(novoCliente.salarioBruto, 20)
          }
      } 
      else if(novoCliente.restSerasa == false && novoCliente.empregado == false){
          retorno = {
              Mensagem:"Limite de crédito não aprovado!!"
          }
      }
      else if(novoCliente.restSerasa == false && novoCliente.empregado == true && novoCliente.tempoAtuacao < 6){
          retorno = {
              Mensagem:"Limite de 10% do salário bruto disponível",
              Limite: this.porcentagemLimite(novoCliente.salarioBruto, 10)
          }
      }
      else if(novoCliente.restSerasa == false && novoCliente.empregado == true && novoCliente.tempoAtuacao >= 6 && novoCliente.tempoAtuacao < 12){
          retorno = {
              Mensagem:"Limite de 20% do salário bruto disponível", 
              Limite: this.porcentagemLimite(novoCliente.salarioBruto, 20)
          }
      }
      else if(novoCliente.restSerasa == false && novoCliente.empregado == true && novoCliente.tempoAtuacao > 12){
          retorno = {
              Mensagem:"Limite de 30% do salário bruto disponível",
              Limite: this.porcentagemLimite(novoCliente.salarioBruto, 30)
          }
      }
      return retorno;
  };

  module.exports.porcentagemLimite = (salario, porcentagem) =>{
      return (salario * (porcentagem/100))
  }