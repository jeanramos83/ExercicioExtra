const { body, validationResult } = require("express-validator");
const { validarCPF } = require("../validations/cpfValidations");

const ClienteValidationRules = () => {
  return [
    body("idade").notEmpty().withMessage("INFORME A IDADE!"),
    body("idade").isFloat({min:15,max:Infinity}).withMessage("IDADE NÃO PODE SER MENOR QUE 16"),
    body("cpf").notEmpty().withMessage("CPF obrigatório"),
    body("cpf")
    .custom((value) => {
      if (!validarCPF(value)) throw new Error("CPF É inválido!");
      return true;
    })
    .withMessage("CPF inválido"),
    body("salarioBruto").notEmpty().withMessage("INFORME O SALÁRIO"),
    body("salarioBruto").isFloat({min:0, max:Infinity}).withMessage("SALÁRIO MAIOR OU IGUAL A 0"),
    body("qtdeDependentes").isFloat({min:0,max:Infinity}).withMessage("DEPENDENTES MAIOR OU IGUAL A 0")
  ];
};

module.exports = {
  ClienteValidationRules,
};