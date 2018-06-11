
function voltar() {
  location.href="./Bloqueios.html"
}
function voltar2() {
  location.href="./Bloqueios.html"
}

function buscaCombo(nameField, opcao) {
  var form = document.forms[0];
  form.act.value=opcao;
  form.action = './montaDadosPrecatorioAcaoJudicial.do';
  saveScrollPosition(form);
  form.submit();
}
function gravar() {
	if (document.getElementById("inValorBloq").value == '') {
			alert("Campo Valor obrigatório.");
		document.getElementById("inValorBloq").focus();
		return false;
	}
	if ( document.getElementById("inValorBloq").value != 1234) {
		if (!confirm("O processo informado não foi encontrado, o bloqueio ficará desvinculado. Deseja realmente cadastrar um bloqueio sem vínculo com processo?")) {
			form["BloqueioJudicialForm"].value = 0;
		}else {alert("Bloqueio Gravado com Sucesso");
		location.href="./Bloqueios.html";
		}
	}
}
function excluirBloqueio() {
	var x;
	var r = confirm("Deseja realmente excluir o bloqueio?");
}