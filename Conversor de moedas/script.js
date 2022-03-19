function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;

  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5.53;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "o valor em reais é R$" + valorEmReal;
  elementoValorConvertido.innerHTML = ("valorConvertido", valorConvertido);
}
