function goToURL() { //v3.0
  var i, args=goToURL.arguments; document.MM_returnValue = false;
  for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
}

/* Início - Funções para Evento MouseOver */
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function alternateRowColors_() {
        styleTitTabla = "tit_lista";
        styleAltRow   = "texto_lista";
        styleRow      = "texto_lista_1";
        styleButton   = "td_botao";
        tableStyle    = "alternate";
        tableStyleNew = "tabelas";
        tables = document.getElementsByTagName("table");
        for(var i=0;i<tables.length;i++) {
          atable = tables.item(i);
          if(atable.className==tableStyle){
            rows = atable.rows;
            for(var j=0;j<rows.length;j++) {
              arow = rows.item(j);
              if (j == 0){
                arow.className = styleTitTabla;
//              }else if (j == rows.length-1) {
//                arow.className = styleButton;
              }else if (j%2==0){
                arow.className = styleRow;
              }else {
                arow.className = styleAltRow;
              }
            }
            atable.className=tableStyleNew;
          }
        }
		
}
      function redirect(url){    	      	  
        document.location='./'+url;
      }
	  function redirectPage(url){
		window.location='./'+url; 
	  }
	  
      function alternateRowColors() {
        styleTitTabla = "tit_lista";
        styleAltRow   = "texto_lista";
        styleRow      = "texto_lista_1";
        styleButton   = "td_botao";
        tableStyle    = "alternate";
        tableStyleNew = "tabelas";
        tables = document.getElementsByTagName("table");
        for(var i=0;i<tables.length;i++) {
          atable = tables.item(i);
          if(atable.className==tableStyle){
            rows = atable.rows;
            for(var j=0;j<rows.length;j++) {
              arow = rows.item(j);
              if (j == 0){
                arow.className = styleTitTabla;
              }else if (j == rows.length-1) {
                arow.className = styleButton;
              }else if (j%2==0){
                arow.className = styleRow;
              }else {
                arow.className = styleAltRow;
              }
            }
            atable.className=tableStyleNew;
          }
        }
      }

   function MM_goToURL() {	   
        var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
       for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
  }
  var formularioAlteradoField;

function verificaAlteracao() {
  if(formularioAlteradoField) {
    formularioAlteradoField.value = 'S';
  }


for(i=0;i<document.forms.length;i++) {
  var form = document.forms[i];
  for(j=0;j<form.elements.length;j++) {
    var field = form.elements[j];
    if(field.type == 'hidden' && field.name == 'formularioAlterado') {
      formularioAlteradoField = field;
    }
  }
}

if(formularioAlteradoField) {
  for(i=0;i<document.forms.length;i++) {
    var form = document.forms[i];
    for(j=0;j<form.elements.length;j++) {
      var field = form.elements[j];
      if(field.type != 'hidden') {
        if(field.onchange) {
          var onchangeOriginal = field.onchange;
          field.onchange = verificaAlteracao;
          addListener(field, 'change', onchangeOriginal);
        } else {
          field.onchange = verificaAlteracao;
        }
      }
    }
  }
}
}

function addListener(element, event, listener, bubble) {
  if(element.addEventListener) {
    if(typeof(bubble) == "undefined") bubble = false;
    element.addEventListener(event, listener, bubble);
  } else if(this.attachEvent) {
    element.attachEvent("on" + event, listener);
  }
}
function enviar(action) {
  if(formularioAlteradoField && formularioAlteradoField.value == 'S' && !confirm("Os dados alterados não foram salvos e serão perdidos, deseja continuar ?")) {
    return;
  }
  location.href = action;
}

function construcao() {
  alert("Em construção.");
}
function enviar(action) {
  if(formularioAlteradoField && formularioAlteradoField.value == 'S' && !confirm("Os dados alterados não foram salvos e serão perdidos, deseja continuar ?")) {
    return;
  }
  location.href = action;
}

function alternateRowColors() {
styleTitTabla = "tit_lista";
styleAltRow   = "texto_lista";
styleRow      = "texto_lista_1";
styleButton   = "td_botao";
tableStyle    = "alternate";
tableStyleNew = "tabelas";
tables = document.getElementsByTagName("table");
for(var i=0;i<tables.length;i++) {
  atable = tables.item(i);
  if(atable.className==tableStyle){
	rows = atable.rows;
	for(var j=0;j<rows.length;j++) {
	  arow = rows.item(j);
	  if (j == 0){
		arow.className = styleTitTabla;
	  }else if (j == rows.length-1) {
		arow.className = styleButton;
	  }else if (j%2==0){
		arow.className = styleRow;
	  }else {
		arow.className = styleAltRow;
	  }
	}
	atable.className=tableStyleNew;
  }
}
}

function editarSolAutonoma(id) {
	  var form = document.form1;	  
	  form.action = "./montaDadosSolicitacaoAutonoma.do?tipoOperacao=editar&idSolicitacao=" + id;
	  //alert("Em desenvolvimento!");
	  form.submit();
}

/*
function cancelarSolAutonoma(idCompromisso) {
	var form = document.form1;

	  form['vo.id'].value = idCompromisso;
	  form['act'].value = "cancelar";
	  form.action = 'montaDadosCompromissoAssociado.do';
	  //form.action = 'montaAlteracaoCompromissoAcaoJudicial.do';
	  form.submit();
}


*/

function cancelarSolAutonoma(id,idAcaoJudicial) {
	  
	  var form = document.form1;

	  form['vo.id'].value = id;
	  if(idAcaoJudicial != 0) {
	    form['vo.idAcaoJudicial'].value = idAcaoJudicial;
	    form['idAcaoJudicialAtual'].value = idAcaoJudicial;
	    form['act'].value = "cancelar";
	    if(!confirm("Tem certeza que deseja excluir ?")) {
		   return; 
		}	    
	    form.action='montaAlteracaoCompromissoAcaoJudicialTelaEntrada.do?telaEntrada=S&flagSolAutonoma=true';
	  } else {
	    if(!confirm("Confirma exclusão de Compromisso Pessoal?")) {
	      return;
	    }
	    form.action='cancelaCompromisso.do';
	  }
	  form.submit();	  
	
}

function verSolAutonoma(id) {
	  var form = document.form1;
	  form.action = "./montaDadosSolicitacaoAutonoma.do?tipoOperacao=ver&idSolicitacao=" + id;
	  //form.action='cancelaCompromisso.do';
	  form.submit();	
}

function editar(id, idAcaoJudicial) {
  var form = document.form1;
  form['vo.id'].value = id;

  if(idAcaoJudicial != 0) {
     // compromisso processo
     if (id != 0 ) {
       form['vo.idAcaoJudicial'].value = idAcaoJudicial;
       form['idAcaoJudicialAtual'].value = idAcaoJudicial;
       form['act'].value = "editar";
       form.action='montaAlteracaoCompromissoAcaoJudicialTelaEntrada.do?telaEntrada=S';
     // alarme Dívida ativa
     } else {
        // verifica se Cda para este debito já importada -  idAcaoJudicial = idDebito
        form.action='verificaAlarmeDa.do?idDebito='+idAcaoJudicial;
     }
  // compromisso pessoal
  } else {
    form.action='montaAlteracaoCompromisso.do?telaEntrada=S';
  }
  form.submit();
}

function verAcaoAlarme(idDebito) {

    var form = document.form1;
    form.action='verificaAlarmeDa.do?idDebito='+idDebito;
    form.submit();
}

function cancelar(id, idAcaoJudicial) {
  var form = document.form1;

  form['vo.id'].value = id;
  if(idAcaoJudicial != 0) {
    form['vo.idAcaoJudicial'].value = idAcaoJudicial;
    form['idAcaoJudicialAtual'].value = idAcaoJudicial;
    form['act'].value = "cancelar";
    form.action='montaAlteracaoCompromissoAcaoJudicialTelaEntrada.do?telaEntrada=S';
  } else {
    if(!confirm("Confirma exclusão de Compromisso Pessoal?")) {
      return;
    }
    form.action='cancelaCompromisso.do';
  }
  form.submit();
}

function novoCompromisso() {
  var form = document.form1;

  form.action='montaInclusaoCompromissoProcurador.do?telaEntrada=S';
  form.submit();
}

function verMotivoRejeicao(id) {
	var form = document.form1;
	form.action='montaVisualizacaoRejeicaoSA.do?id=' + id;
	form.submit();
	
}

function verMotivoCancelamento(id) {
	var form = document.form1;
	form.action='montaVisualizacaoCancelamentoSA.do?id=' + id;
	form.submit();
}


var valorCausa;



function habilitarPericia(checked) {
	document.getElementsByName('vo.dateAsString(dataLaudo)')[0].disabled = !checked;
	document.getElementsByName('vo.currencyAsString(valorLaudo)')[0].disabled = !checked;
}

function habilitavalorcausa(){
	var a = document.getElementsByName('vo.currencyAsString(valorCausa)')[0].disabled;
	document.getElementsByName('vo.currencyAsString(valorCausa)')[0].disabled = !a;
}

function buscaCombo(nameField, opcao) {
  var form = document.forms[0];
  form.act.value=opcao;
  if(opcao == 'assuntos') {
     var assunto1 = form['vo.idAssunto1'].options[form['vo.idAssunto1'].selectedIndex].text;
	 var assunto2 = form['vo.longAsString(idAssunto2)'].options[form['vo.longAsString(idAssunto2)'].selectedIndex].text;	  
	if(assunto1 == 'CONDOMÍNIO' && assunto2 == 'UH COMERCIALIZADA') {
	   form.flagConta.value = "true";
	} else {
		/*
	   if(form.flagConta.value != "null") {
		  form['vo.numeroConta'].value = "";
	   }  */ 
	   form.flagConta.value = "false";   
	}  
    if(nameField.indexOf(')') == nameField.length-1) {
      form.indiceAssuntoSelecionado.value = nameField.charAt(nameField.length-2);
    } else {
      form.indiceAssuntoSelecionado.value = nameField.charAt(nameField.length-1);
    }
     
  }

  form.action = './montaDadosAcaoJudicial.do';
  saveScrollPosition(form);

  form.submit();
}

function excluirRegistro(id) {
	var form = document.forms[0];
	form.action = './excluiPericia.do?id=' + id;
	saveScrollPosition(form);
	form.submit();
}

function enviarEscritorio() {
	var form = document.forms[0];
	form.action = './montaDadosEnvioAcao.do?act=init';
	form.submit();
}

function resumoProcesso() {
	var form = document.forms[0];
	var id = form['vo.id'].value;
	form.target = '_blank';
	form.action = './performResumoProcesso.do?idAcaoJudicial=' + id;
	form.submit();
	form.target = '_self';
}

function definirDataFindo(){
	var inputTextDataProcessoFindo = document.getElementsByName('txt.vo.dateAsString(dataProcessoFindo)')[0];
	var inputHiddenDataProcessoFindo = document.getElementsByName('vo.dateAsString(dataProcessoFindo)')[0];
	var dataFormatada = document.getElementsByClassName("footer_texto")[2].innerText.substring(0,10);
	
	if (document.getElementsByName('vo.processoFindo')[0].value==1){
		inputHiddenDataProcessoFindo.setAttribute("value", dataFormatada);
		inputTextDataProcessoFindo.value = inputHiddenDataProcessoFindo.value;
	} else {
		inputHiddenDataProcessoFindo.setAttribute("value", "");
		inputTextDataProcessoFindo.value = inputHiddenDataProcessoFindo.value;
	}
}

function voltar() {
  var form = document.forms[0];
  form.act.value="voltarHome";
  form.action = './montaDadosAcaoJudicial.do';
  form.submit();
}

function voltarLista() {
  var form = document.forms[0];
  var id = form['vo.id'].value;
  form.action = './listaAndamentoAssociado.do?idAcaoJudicialAtual='+id;
  form.submit();
}

function voltarListaRecebidos() {
  var form = document.forms[0];
  form.action = './montaListaAcoesRecebidas.do';
  form.submit();
}

function voltarSimplificada() {
  var form = document.forms[0];
  form.action = './montaDadosAcaoJudicialSimplificada.do?act=visualizarSociedade';
  form.submit();
}



function salvar(act) { 	
	if (act == 'enviarEscritorio') {
		var form = document.forms[0];
		form.action = './montaDadosEnvioAcao.do?act=init';

	} else {
		var form = document.forms[0];
		form.action="./cadastroAcaoJudicial.do";
	}
	selecionaTodosEmpreendimentos();
/*
  if( form['vo.idSuborgaoBanca'].selectedIndex == 0) {
    alert("Favor selecionar advogado responsável.");
    return;
  }
*/


  if(!validateRegistroAcaoJudicialForm(form)) {
    return;
  }

  
    if(form['vo.liminarConcedida'].value == 1 && trim(form['vo.descricaoLiminarConcedida'].value) == '') {
      alert("O campo 'Liminar Concedida' é obrigatório.");
      form['vo.descricaoLiminarConcedida'].focus();
      return;
    }
    if(form['vo.tutelaAntecipada'].value == 1 && trim(form['vo.descricaoTutelaAntecipada'].value) == '') {
      alert("O campo 'Tutela Antecipada' é obrigatório.");
      form['vo.descricaoTutelaAntecipada'].focus();
      return;
    }
    if(!(form['vo.numeroGdocPart1'].value == "" && form['vo.numeroGdocPart2'].value == "" && form['vo.numeroGdocPart3'].value == "")) {
      if(form['vo.numeroGdocPart1'].value == "" || form['vo.numeroGdocPart2'].value == "" || form['vo.numeroGdocPart3'].value == "") {
        alert("Favor preencher as três partes do campo GDOC.");
        form['vo.numeroGdocPart1'].focus();
        return;
      }
      if(form['vo.numeroGdocPart1'].value != "" && form['vo.numeroGdocPart1'].value.length != 5) {
        alert("Parte 1 do campo GDOC precisa conter 5 dígitos.");
        form['vo.numeroGdocPart1'].focus();
        return;
      }
      if(form['vo.numeroGdocPart3'].value != "" && form['vo.numeroGdocPart3'].value.length != 4) {
        alert("Parte 3 do campo GDOC precisa conter 4 dígitos.");
        form['vo.numeroGdocPart3'].focus();
        return;
      }
    }
  
  if(form['vo.longAsString(anoProcesso)'].value < 1900) {
    alert("O ano do processo deve ser maior ou igual que 1900.");
    form['vo.longAsString(anoProcesso)'].focus();
    return;
  }






	if (form['chk.vo.selPericia'].checked) {
		if (form['vo.dateAsString(dataLaudo)'].value == "") {
			alert("Preencha todos os campos obrigatórios sinalizados com \"*\"");
			form['vo.dateAsString(dataLaudo)'].focus();
			return false;
		}

		if (form['vo.currencyAsString(valorLaudo)'].value == "") {
			alert("Preencha todos os campos obrigatórios sinalizados com \"*\"");
			form['vo.currencyAsString(valorLaudo)'].focus();
			return false;
		}

		if (form['vo.currencyAsString(valorLaudo)'].value == "0" || form['vo.currencyAsString(valorLaudo)'].value == "0,0" || form['vo.currencyAsString(valorLaudo)'].value == "0,00") {
			alert("Campo Valor deve ser maior do que 0,00.");
			form['vo.currencyAsString(valorLaudo)'].focus();
			return false;
		}
	}

	if (document.getElementById("liminarConcedida") &&
		document.getElementById("liminarConcedida").checked == true) {

		if (document.getElementById("prazoCumprimentoLiminar").value == "") {
			alert("O campo 'Qual o Prazo Para Cumprimento' é obrigatório.");
			document.getElementById("prazoCumprimentoLiminar").focus();
			return false;
		}

		if (document.getElementById("prazoCumprimentoLiminar").value == 10
				&& document.getElementById("prazoLiminar").value == "") {
			alert("O campo 'Informe o Prazo' é obrigatório.");
			document.getElementById("prazoLiminar").focus();
			return false;
		}

		if (document.getElementsByName("vo.multaAtrasoLiminar")[1].checked
				&& document.getElementById("valorMultaLiminar").value == "") {
			alert("O campo 'Informe o Valor da Multa' é obrigatório.");
			document.getElementById("valorMultaLiminar").focus();
			return false;
		}
	}

	if (document.getElementById("tutelaAntecipada") &&
		document.getElementById("tutelaAntecipada").checked == true) {

		if (document.getElementById("prazoCumprimentoTutela").value == "") {
			alert("O campo 'Qual o Prazo Para Cumprimento' é obrigatório.");
			document.getElementById("prazoCumprimentoTutela").focus();
			return false;
		}

		if (document.getElementById("prazoCumprimentoTutela").value == 10
				&& document.getElementById("prazoTutela").value == "") {
			alert("O campo 'Informe o Prazo' é obrigatório.");
			document.getElementById("prazoTutela").focus();
			return false;
		}

		if (document.getElementsByName("vo.multaAtrasoTutela")[1].checked
				&& document.getElementById("valorMultaTutela").value == "") {
			alert("O campo 'Informe o Valor da Multa' é obrigatório.");
			document.getElementById("valorMultaTutela").focus();
			return false;
		}
	}
	
  habilitarCampos();
  form.submit();
}

function habilitarCampos() {
	if (document.getElementById("prazoCumprimentoLiminar")) {
		document.getElementById("prazoCumprimentoLiminar").disabled = false;
		document.getElementById("prazoLiminar").disabled = false;
		document.getElementsByName("vo.multaAtrasoLiminar")[0].disabled = false;
		document.getElementsByName("vo.multaAtrasoLiminar")[1].disabled = false;
		document.getElementById("valorMultaLiminar").disabled = false;
	}

	if (document.getElementById("prazoCumprimentoTutela")) {
		document.getElementById("prazoCumprimentoTutela").disabled = false;
		document.getElementById("prazoTutela").disabled = false;
		document.getElementsByName("vo.multaAtrasoTutela")[0].disabled = false;
		document.getElementsByName("vo.multaAtrasoTutela")[1].disabled = false;
		document.getElementById("valorMultaTutela").disabled = false;
	}
	
}

function obterDadosCadastraisTJSP() {
  var form = document.forms[0];

    if(trim(form['vo.numeroProcesso'].value) == '') {
      alert("Para obter dados cadastrais do TJSP é necessário informar o Número do Processo.");
      form['vo.numeroProcesso'].focus();
      return;
    }

    alert("Em construção.");
    //form.submit();
}

function consultaDocumento() {

   var form = document.forms[0];
   numeroGdocPart1 = form['vo.numeroGdocPart1'].value;
   numeroGdocPart2 = form['vo.numeroGdocPart2'].value;
   numeroGdocPart3 = form['vo.numeroGdocPart3'].value;

   window.open('./listaDocumentoGdoc.do?numeroGdocPart1='+numeroGdocPart1+'&numeroGdocPart2='+numeroGdocPart2+'&numeroGdocPart3='+numeroGdocPart3,'','width=700,height=330,scrollbars=yes');

   form.action = './submeteAcaoGdoc.do';
   form.submit();
}

function limpaJustificativa(){
	if(document.getElementsByName('vo.currencyAsString(valorCausa)')[0].value != valorCausa){
		document.getElementsByName('vo.justificativaValorCausa')[0].value='';
	}
}


function consultaDocumento_onClick() {

      var form = document.forms[0];

      if(form['vo.numeroGdocPart1'].value == "" || form['vo.numeroGdocPart2'].value == "" || form['vo.numeroGdocPart3'].value == "") {
        alert("Favor preencher as três partes do campo GDOC.");
        form['vo.numeroGdocPart1'].focus();
        return;
      }

      if(form['vo.numeroGdocPart1'].value != "" && form['vo.numeroGdocPart1'].value.length != 5) {
        alert("Parte 1 do campo GDOC precisa conter 5 dígitos.");
        form['vo.numeroGdocPart1'].focus();
        return;
      }

      if(form['vo.numeroGdocPart3'].value != "" && form['vo.numeroGdocPart3'].value.length != 4) {
        alert("Parte 3 do campo GDOC precisa conter 4 dígitos.");
        form['vo.numeroGdocPart3'].focus();
        return;
      }

      numeroGdocPart1 = form['vo.numeroGdocPart1'].value;
      numeroGdocPart2 = form['vo.numeroGdocPart2'].value;
      numeroGdocPart3 = form['vo.numeroGdocPart3'].value;

      
             window.open('./montaLoginGdoc.do','','width=250,height=140,left=300,top=250,scrollbars=no');
      
}

function consultaFolhaLider() {

   var form = document.forms[0];
   numeroGdocPart1 = form['vo.numeroGdocPart1'].value;
   numeroGdocPart2 = form['vo.numeroGdocPart2'].value;
   numeroGdocPart3 = form['vo.numeroGdocPart3'].value;

   window.open('./listaFolhaLiderGdoc.do?numeroGdocPart1='+numeroGdocPart1+'&numeroGdocPart2='+numeroGdocPart2+'&numeroGdocPart3='+numeroGdocPart3,'','width=700,height=600,scrollbars=yes');

   form.action = './submeteAcaoGdoc.do';
   form.submit();

}

function consultaFolhaLider_onClick() {

      var form = document.forms[0];

      if(form['vo.numeroGdocPart1'].value == "" || form['vo.numeroGdocPart2'].value == "" || form['vo.numeroGdocPart3'].value == "") {
        alert("Favor preencher as três partes do campo GDOC.");
        form['vo.numeroGdocPart1'].focus();
        return;
      }

      if(form['vo.numeroGdocPart1'].value != "" && form['vo.numeroGdocPart1'].value.length != 5) {
        alert("Parte 1 do campo GDOC precisa conter 5 dígitos.");
        form['vo.numeroGdocPart1'].focus();
        return;
      }

      if(form['vo.numeroGdocPart3'].value != "" && form['vo.numeroGdocPart3'].value.length != 4) {
        alert("Parte 3 do campo GDOC precisa conter 4 dígitos.");
        form['vo.numeroGdocPart3'].focus();
        return;
      }

      numeroGdocPart1 = form['vo.numeroGdocPart1'].value;
      numeroGdocPart2 = form['vo.numeroGdocPart2'].value;
      numeroGdocPart3 = form['vo.numeroGdocPart3'].value;

      
             window.open('./montaLoginGdocFolhaLider.do','','width=250,height=140,left=300,top=250,scrollbars=no');
      

}


function alteraFwCheckbox(name, checked) {
  var form = document.forms[0];

  form['chk.' + name].checked = checked;
  if(checked) {
    form[name].value = 1;
  } else {
    form[name].value = 0;
  }
}

function verificaText(campo, text) {
  var form = document.forms[0];
  if(!campo.checked && form[text].value!='') {
    name = replaceAll(campo.name, 'chk.', '');
    alteraFwCheckbox(name, true);
  } else if(campo.checked && form[text].value=='') {
    form[text].focus();
  }
}

function textCounter( field, countfield, maxlimit ) { // maxlength textarea
  if ( field.value.length > maxlimit )
  {
    field.value = field.value.substring( 0, maxlimit );
    alert( 'O campo Textarea só pode conter '+maxlimit+' caracteres.' );
    return false;
  }
  else
  {
    countfield.value = maxlimit - field.value.length;
  }
}

function mostrar(pathArquivo, idAcaoSimplificada) {
	if (idAcaoSimplificada != null && idAcaoSimplificada != "") {
   		window.open('./adicionaArquivoAcaoSimplificada.do?actArquivo=mostrarArquivo&pathArquivo='+pathArquivo,'','width=800,height=600,scrollbars=yes');
	} else {
		window.open('./adicionaArquivoAcao.do?actArquivo=mostrarArquivo&pathArquivo='+pathArquivo,'','width=800,height=600,scrollbars=yes');
	}
}

function habilitarDtJuntada() {

	if (document.getElementById("refereUnidadeHabitacional").checked == true) {
		document.getElementById("dataJuntadaContestecao").disabled = false;
		document.getElementById("btDataJuntadaContestecao").disabled = false;
	} else {
		document.getElementById("dataJuntadaContestecao").value = "";
		document.getElementById("dataJuntadaContestecao").disabled = true;
		document.getElementById("btDataJuntadaContestecao").disabled = true;
	}
}

function habilitarLiminar() {

	if (document.getElementById("liminarConcedida")) {
		if (document.getElementById("liminarConcedida").checked == true) {
			document.getElementById("prazoCumprimentoLiminar").disabled = false;
			document.getElementsByName("vo.multaAtrasoLiminar")[0].disabled = false;
			document.getElementsByName("vo.multaAtrasoLiminar")[1].disabled = false;
		} else {
			document.getElementById("prazoCumprimentoLiminar").disabled = true;
			document.getElementById("prazoCumprimentoLiminar").value = "";
			document.getElementsByName("vo.multaAtrasoLiminar")[0].disabled = true;
			document.getElementsByName("vo.multaAtrasoLiminar")[0].checked = true;
			document.getElementsByName("vo.multaAtrasoLiminar")[1].disabled = true;
		}
		habilitarPrazoLiminar();
		habilitarMultaLiminar();
	}
}

function habilitarPrazoLiminar() {

	if (document.getElementById("prazoCumprimentoLiminar").value == 10) {
		document.getElementById("prazoLiminar").disabled = false;
	} else {
		document.getElementById("prazoLiminar").disabled = true;
		document.getElementById("prazoLiminar").value = "";
	}
}

function habilitarMultaLiminar() {

	if (document.getElementsByName("vo.multaAtrasoLiminar")[1].checked) {
		document.getElementById("valorMultaLiminar").disabled = false;
	} else {
		document.getElementById("valorMultaLiminar").disabled = true;
		document.getElementById("valorMultaLiminar").value = "";
	}
	
}

function habilitarTutela() {

	if (document.getElementById("tutelaAntecipada")) {
		if (document.getElementById("tutelaAntecipada").checked == true) {
			document.getElementById("prazoCumprimentoTutela").disabled = false;
			document.getElementsByName("vo.multaAtrasoTutela")[0].disabled = false;
			document.getElementsByName("vo.multaAtrasoTutela")[1].disabled = false;
			document.getElementById("valorMultaTutela").disabled = false;
		} else {
			document.getElementById("prazoCumprimentoTutela").disabled = true;
			document.getElementById("prazoCumprimentoTutela").value = "";
			document.getElementsByName("vo.multaAtrasoTutela")[0].disabled = true;
			document.getElementsByName("vo.multaAtrasoTutela")[0].checked = true;
			document.getElementsByName("vo.multaAtrasoTutela")[1].disabled = true;
			document.getElementById("valorMultaTutela").disabled = true;
			document.getElementById("valorMultaTutela").value = "";
		}

		habilitarPrazoTutela();
		habilitarMultaTutela();
	}
}

function habilitarPrazoTutela() {

	if (document.getElementById("prazoCumprimentoTutela").value == 10) {
		document.getElementById("prazoTutela").disabled = false;
	} else {
		document.getElementById("prazoTutela").disabled = true;
		document.getElementById("prazoTutela").value = "";
	}
}

function habilitarMultaTutela() {

	if (document.getElementsByName("vo.multaAtrasoTutela")[1].checked) {
		document.getElementById("valorMultaTutela").disabled = false;
	} else {
		document.getElementById("valorMultaTutela").disabled = true;
		document.getElementById("valorMultaTutela").value = "";
	}
	
}

     var bCancel = false; 

    function validateRegistroAcaoJudicialForm(form) {                                                                   
        if (bCancel) 
      return true; 
        else 
 var formValidationResult;
       formValidationResult = validateRequired(form) && validateDate(form); 
     return (formValidationResult == 1);
   } 

    function RegistroAcaoJudicialForm_required () { 
     this.a0 = new Array("vo.idMateria", "O campo 'Matéria' é obrigatório.", new Function ("varName", " return this[varName];"));
     this.a1 = new Array("vo.idPapelFazenda", "O campo 'CDHU' é obrigatório.", new Function ("varName", " return this[varName];"));
     this.a2 = new Array("vo.idSuborgao", "O campo 'Área' é obrigatório.", new Function ("varName", " return this[varName];"));
     this.a3 = new Array("vo.idSuborgaoBanca", "O campo 'Advogado Responsável' é obrigatório.", new Function ("varName", " return this[varName];"));
     this.a4 = new Array("vo.idInstancia", "O campo 'Instância' é obrigatório.", new Function ("varName", " return this[varName];"));
     this.a5 = new Array("vo.idTribunal", "O campo 'Tribunal' é obrigatório.", new Function ("varName", " return this[varName];"));
     this.a6 = new Array("vo.idComarca", "O campo 'Comarca' é obrigatório.", new Function ("varName", " return this[varName];"));
     this.a7 = new Array("vo.idVara", "O campo 'Vara' é obrigatório.", new Function ("varName", " return this[varName];"));
     this.a8 = new Array("vo.idTipoacao", "O campo 'Tipo Ação' é obrigatório.", new Function ("varName", " return this[varName];"));
     this.a9 = new Array("vo.numeroProcesso", "O campo 'Número Processo' é obrigatório.", new Function ("varName", " return this[varName];"));
     this.a10 = new Array("vo.longAsString(anoProcesso)", "O campo 'Ano Processo' é obrigatório.", new Function ("varName", " return this[varName];"));
     this.a11 = new Array("vo.idAssunto1", "O campo 'Assunto Categoria 1' é obrigatório.", new Function ("varName", " return this[varName];"));
     this.a12 = new Array("vo.dateAsString(dtAjuizamento)", "O campo 'Data de Ajuizamento' é obrigatório.", new Function ("varName", "this.datePattern='dd/MM/yyyy';  return this[varName];"));
     this.a13 = new Array("vo.longAsString(idAvaliacaoRisco)", "O campo 'Avaliação de Risco' é obrigatório.", new Function ("varName", " return this[varName];"));
    } 

    function RegistroAcaoJudicialForm_DateValidations () { 
     this.a0 = new Array("vo.dateAsString(dtAjuizamento)", "O campo 'Data de Ajuizamento' não é uma data válida.", new Function ("varName", "this.datePattern='dd/MM/yyyy';  return this[varName];"));
     this.a1 = new Array("vo.dateAsString(dtTransitoJulgado)", "O campo 'Data Trânsito em Julgado' não é uma data válida.", new Function ("varName", "this.datePattern='dd/MM/yyyy';  return this[varName];"));
    } 




   /*$RCSfile: validateFloatRange.js,v $ $Revision: 1.9 $ $Date: 2004/03/28 16:53:21 $ */
    /**
    * Check to see if fields are in a valid float range.
    * Fields are not checked if they are disabled.
    * <p>
    * @param form The form validation is taking place on.
    */
    function validateFloatRange(form) {
        var isValid = true;
        var focusField = null;
        var i = 0;
        var fields = new Array();
        var formName = form.getAttributeNode("name"); 

        oRange = eval('new ' + formName.value + '_floatRange()');
        for (x in oRange) {
            var field = form[oRange[x][0]];
            
            if ((field.type == 'hidden' ||
                field.type == 'text' || field.type == 'textarea') &&
                (field.value.length > 0)  &&
                 field.disabled == false) {
        
                var fMin = parseFloat(oRange[x][2]("min"));
                var fMax = parseFloat(oRange[x][2]("max"));
                var fValue = parseFloat(field.value);
                if (!(fValue >= fMin && fValue <= fMax)) {
                    if (i == 0) {
                        focusField = field;
                    }
                    fields[i++] = oRange[x][1];
                    isValid = false;
                }
            }
        }
        if (fields.length > 0) {
            focusField.focus();
            alert(fields.join('\n'));
        }
        return isValid;
    }

    /*$RCSfile: validateUtilities.js,v $ $Revision: 1.2 $ $Date: 2004/03/28 16:53:21 $ */

  /**
  * This is a place holder for common utilities used across the javascript validation
  *
  **/


    /*$RCSfile: validateByte.js,v $ $Revision: 1.9 $ $Date: 2004/03/28 16:53:21 $ */
    /**
    * Check to see if fields are a valid byte.
    * Fields are not checked if they are disabled.
    * <p>
    * @param form The form validation is taking place on.
    */
    function validateByte(form) {
        var bValid = true;
        var focusField = null;
        var i = 0;
        var fields = new Array();
        var formName = form.getAttributeNode("name"); 
        oByte = eval('new ' + formName.value + '_ByteValidations()');

        for (x in oByte) {
            var field = form[oByte[x][0]];

            if ((field.type == 'hidden' ||
                field.type == 'text' ||
                field.type == 'textarea' ||
                field.type == 'select-one' ||
                field.type == 'radio')  &&
                field.disabled == false) {

                var value = '';
                // get field's value
                if (field.type == "select-one") {
                    var si = field.selectedIndex;
                    if (si >= 0) {
                        value = field.options[si].value;
                    }
                } else {
                    value = field.value;
                }

                if (value.length > 0) {
                    if (!isAllDigits(value)) {
                        bValid = false;
                        if (i == 0) {
                            focusField = field;
                        }
                        fields[i++] = oByte[x][1];

                    } else {

                        var iValue = parseInt(value);
                        if (isNaN(iValue) || !(iValue >= -128 && iValue <= 127)) {
                            if (i == 0) {
                                focusField = field;
                            }
                            fields[i++] = oByte[x][1];
                            bValid = false;
                        }
                    }
                }

            }
        }
        if (fields.length > 0) {
           focusField.focus();
           alert(fields.join('\n'));
        }
        return bValid;
    }


    /*$RCSfile: validateMaxLength.js,v $ $Revision: 1.10 $ $Date: 2004/03/28 16:53:21 $ */
    /**
    * A field is considered valid if less than the specified maximum.
    * Fields are not checked if they are disabled.
    * <p>
    * <strong>Caution:</strong> Using <code>validateMaxLength</code> on a password field in a 
    *  login page gives unnecessary information away to hackers. While it only slightly
    *  weakens security, we suggest using it only when modifying a password.</p>
    * @param form The form validation is taking place on.
    */
    function validateMaxLength(form) {
        var isValid = true;
        var focusField = null;
        var i = 0;
        var fields = new Array();
        var formName = form.getAttributeNode("name"); 

        oMaxLength = eval('new ' + formName.value + '_maxlength()');        
        for (x in oMaxLength) {
            var field = form[oMaxLength[x][0]];

            if ((field.type == 'hidden' ||
                field.type == 'text' ||
                field.type == 'password' ||
                field.type == 'textarea') &&
                field.disabled == false) {

                var iMax = parseInt(oMaxLength[x][2]("maxlength"));
                if (field.value.length > iMax) {
                    if (i == 0) {
                        focusField = field;
                    }
                    fields[i++] = oMaxLength[x][1];
                    isValid = false;
                }
            }
        }
        if (fields.length > 0) {
           focusField.focus();
           alert(fields.join('\n'));
        }
        return isValid;
    }


    /*$RCSfile: validateRequired.js,v $ $Revision: 1.13 $ $Date: 2004/03/28 16:53:21 $ */
    /**
    *  Check to see if fields must contain a value.
    * Fields are not checked if they are disabled.
    * <p>
    * @param form The form validation is taking place on.
    */

    function validateRequired(form) {
        var isValid = true;
        var focusField = null;
        var i = 0;
        var fields = new Array();
        var formName = form.getAttributeNode("name");

        oRequired = eval('new ' + formName.value + '_required()');

        for (x in oRequired) {
            var field = form[oRequired[x][0]];

            if ((field.type == 'hidden' ||
                field.type == 'text' ||
                field.type == 'textarea' ||
                field.type == 'file' ||
                field.type == 'checkbox' ||
                field.type == 'select-one' ||
                field.type == 'password') &&
                field.disabled == false) {

                var value = '';
                // get field's value
                if (field.type == "select-one") {
                    var si = field.selectedIndex;
                    if (si >= 0) {
                        value = field.options[si].value;
                    }
                } else if (field.type == 'checkbox') {
                    if (field.checked) {
                        value = field.value;
                    }
                } else {
                    value = field.value;
                }

                if (trim(value).length == 0) {

                    if (i == 0) {
                        focusField = field;
                    }
                    fields[i++] = oRequired[x][1];
                    isValid = false;
                }
            } else if (field.type == "select-multiple") { 
                var numOptions = field.options.length;
                lastSelected=-1;
                for(loop=numOptions-1;loop>=0;loop--) {
                    if(field.options[loop].selected) {
                        lastSelected = loop;
                        value = field.options[loop].value;
                        break;
                    }
                }
                if(lastSelected < 0 || trim(value).length == 0) {
                    if(i == 0) {
                        focusField = field;
                    }
                    fields[i++] = oRequired[x][1];
                    isValid=false;
                }
            } else if ((field.length > 0) && (field[0].type == 'radio' || field[0].type == 'checkbox')) {
                isChecked=-1;
                for (loop=0;loop < field.length;loop++) {
                    if (field[loop].checked) {
                        isChecked=loop;
                        break; // only one needs to be checked
                    }
                }
                if (isChecked < 0) {
                    if (i == 0) {
                        focusField = field[0];
                    }
                    fields[i++] = oRequired[x][1];
                    isValid=false;
                }
            }
        }
        if (fields.length > 0) {
           focusField.focus();
           alert(fields.join('\n'));
        }
        return isValid;
    }
    
    // Trim whitespace from left and right sides of s.
    function trim(s) {
        return s.replace( /^\s*/, "" ).replace( /\s*$/, "" );
    }


    /*$RCSfile: validateInteger.js,v $ $Revision: 1.9 $ $Date: 2004/03/28 16:53:21 $ */
    /**
    * Check to see if fields are a valid integer.
    * Fields are not checked if they are disabled.
    * <p>
    * @param form The form validation is taking place on.
    */
    function validateInteger(form) {
        var bValid = true;
        var focusField = null;
        var i = 0;
        var fields = new Array();
        var formName = form.getAttributeNode("name"); 

        oInteger = eval('new ' + formName.value + '_IntegerValidations()');
        for (x in oInteger) {
            var field = form[oInteger[x][0]];

            if ((field.type == 'hidden' ||
                field.type == 'text' ||
                field.type == 'textarea' ||
                field.type == 'select-one' ||
                field.type == 'radio') &&
                field.disabled == false) {

                var value = '';
                // get field's value
                if (field.type == "select-one") {
                    var si = field.selectedIndex;
                    if (si >= 0) {
                        value = field.options[si].value;
                    }
                } else {
                    value = field.value;
                }

                if (value.length > 0) {

                    if (!isAllDigits(value)) {
                        bValid = false;
                        if (i == 0) {
                            focusField = field;
                        }
                        fields[i++] = oInteger[x][1];

                    } else {
                        var iValue = parseInt(value);
                        if (isNaN(iValue) || !(iValue >= -2147483648 && iValue <= 2147483647)) {
                            if (i == 0) {
                                focusField = field;
                            }
                            fields[i++] = oInteger[x][1];
                            bValid = false;
                       }
                   }
               }
            }
        }
        if (fields.length > 0) {
           focusField.focus();
           alert(fields.join('\n'));
        }
        return bValid;
    }

    function isAllDigits(argvalue) {
        argvalue = argvalue.toString();
        var validChars = "0123456789";
        var startFrom = 0;
        if (argvalue.substring(0, 2) == "0x") {
           validChars = "0123456789abcdefABCDEF";
           startFrom = 2;
        } else if (argvalue.charAt(0) == "0") {
           validChars = "01234567";
           startFrom = 1;
        } else if (argvalue.charAt(0) == "-") {
            startFrom = 1;
        }

        for (var n = startFrom; n < argvalue.length; n++) {
            if (validChars.indexOf(argvalue.substring(n, n+1)) == -1) return false;
        }
        return true;
    }


    /*$RCSfile: validateCreditCard.js,v $ $Revision: 1.8 $ $Date: 2004/03/28 16:53:21 $ */
    /**
    * Check to see if fields are a valid creditcard number based on Luhn checksum.
    * Fields are not checked if they are disabled.
    * <p>
    * @param form The form validation is taking place on.
    */
    function validateCreditCard(form) {
        var bValid = true;
        var focusField = null;
        var i = 0;
        var fields = new Array();
        var formName = form.getAttributeNode("name");

        oCreditCard = eval('new ' + formName.value + '_creditCard()');

        for (x in oCreditCard) {
            if ((form[oCreditCard[x][0]].type == 'text' ||
                 form[oCreditCard[x][0]].type == 'textarea') &&
                (form[oCreditCard[x][0]].value.length > 0)  &&
                 form[oCreditCard[x][0]].disabled == false) {
                if (!luhnCheck(form[oCreditCard[x][0]].value)) {
                    if (i == 0) {
                        focusField = form[oCreditCard[x][0]];
                    }
                    fields[i++] = oCreditCard[x][1];
                    bValid = false;
                }
            }
        }
        if (fields.length > 0) {
            focusField.focus();
            alert(fields.join('\n'));
        }
        return bValid;
    }

    /**
     * Checks whether a given credit card number has a valid Luhn checksum.
     * This allows you to spot most randomly made-up or garbled credit card numbers immediately.
     * Reference: http://www.speech.cs.cmu.edu/~sburke/pub/luhn_lib.html
     */
    function luhnCheck(cardNumber) {
        if (isLuhnNum(cardNumber)) {
            var no_digit = cardNumber.length;
            var oddoeven = no_digit & 1;
            var sum = 0;
            for (var count = 0; count < no_digit; count++) {
                var digit = parseInt(cardNumber.charAt(count));
                if (!((count & 1) ^ oddoeven)) {
                    digit *= 2;
                    if (digit > 9) digit -= 9;
                };
                sum += digit;
            };
            if (sum == 0) return false;
            if (sum % 10 == 0) return true;
        };
        return false;
    }

    function isLuhnNum(argvalue) {
        argvalue = argvalue.toString();
        if (argvalue.length == 0) {
            return false;
        }
        for (var n = 0; n < argvalue.length; n++) {
            if ((argvalue.substring(n, n+1) < "0") ||
                (argvalue.substring(n,n+1) > "9")) {
                return false;
            }
        }
        return true;
    }


   /*$RCSfile: validateDate.js,v $ $Revision: 1.10 $ $Date: 2004/03/28 16:53:21 $ */
    /**
    * Check to see if fields are a valid date.
    * Fields are not checked if they are disabled.
    * <p>
    * @param form The form validation is taking place on.
    */
    function validateDate(form) {
       var bValid = true;
       var focusField = null;
       var i = 0;
       var fields = new Array();
       var formName = form.getAttributeNode("name"); 

       oDate = eval('new ' + formName.value + '_DateValidations()');

       for (x in oDate) {
           var field = form[oDate[x][0]];
           var value = field.value;
           var datePattern = oDate[x][2]("datePatternStrict");
           // try loose pattern
           if (datePattern == null)
               datePattern = oDate[x][2]("datePattern");
           if ((field.type == 'hidden' ||
                field.type == 'text' ||
                field.type == 'textarea') &&
               (value.length > 0) && (datePattern.length > 0) &&
                field.disabled == false) {
                 var MONTH = "MM";
                 var DAY = "dd";
                 var YEAR = "yyyy";
                 var orderMonth = datePattern.indexOf(MONTH);
                 var orderDay = datePattern.indexOf(DAY);
                 var orderYear = datePattern.indexOf(YEAR);
                 if ((orderDay < orderYear && orderDay > orderMonth)) {
                     var iDelim1 = orderMonth + MONTH.length;
                     var iDelim2 = orderDay + DAY.length;
                     var delim1 = datePattern.substring(iDelim1, iDelim1 + 1);
                     var delim2 = datePattern.substring(iDelim2, iDelim2 + 1);
                     if (iDelim1 == orderDay && iDelim2 == orderYear) {
                        dateRegexp = new RegExp("^(\\d{2})(\\d{2})(\\d{4})$");
                     } else if (iDelim1 == orderDay) {
                        dateRegexp = new RegExp("^(\\d{2})(\\d{2})[" + delim2 + "](\\d{4})$");
                     } else if (iDelim2 == orderYear) {
                        dateRegexp = new RegExp("^(\\d{2})[" + delim1 + "](\\d{2})(\\d{4})$");
                     } else {
                        dateRegexp = new RegExp("^(\\d{2})[" + delim1 + "](\\d{2})[" + delim2 + "](\\d{4})$");
                     }
                     var matched = dateRegexp.exec(value);
                     if(matched != null) {
                        if (!isValidDate(matched[2], matched[1], matched[3])) {
                           if (i == 0) {
                               focusField = field;
                           }
                           fields[i++] = oDate[x][1];
                           bValid =  false;
                        }
                     } else {
                        if (i == 0) {
                            focusField = field;
                        }
                        fields[i++] = oDate[x][1];
                        bValid =  false;
                     }
                 } else if ((orderMonth < orderYear && orderMonth > orderDay)) {
                     var iDelim1 = orderDay + DAY.length;
                     var iDelim2 = orderMonth + MONTH.length;
                     var delim1 = datePattern.substring(iDelim1, iDelim1 + 1);
                     var delim2 = datePattern.substring(iDelim2, iDelim2 + 1);
                     if (iDelim1 == orderMonth && iDelim2 == orderYear) {
                         dateRegexp = new RegExp("^(\\d{2})(\\d{2})(\\d{4})$");
                     } else if (iDelim1 == orderMonth) {
                         dateRegexp = new RegExp("^(\\d{2})(\\d{2})[" + delim2 + "](\\d{4})$");
                     } else if (iDelim2 == orderYear) {
                         dateRegexp = new RegExp("^(\\d{2})[" + delim1 + "](\\d{2})(\\d{4})$");
                     } else {
                         dateRegexp = new RegExp("^(\\d{2})[" + delim1 + "](\\d{2})[" + delim2 + "](\\d{4})$");
                     }
                     var matched = dateRegexp.exec(value);
                     if(matched != null) {
                         if (!isValidDate(matched[1], matched[2], matched[3])) {
                             if (i == 0) {
                         focusField = field;
                             }
                             fields[i++] = oDate[x][1];
                             bValid =  false;
                          }
                     } else {
                         if (i == 0) {
                             focusField = field;
                         }
                         fields[i++] = oDate[x][1];
                         bValid =  false;
                     }
                 } else if ((orderMonth > orderYear && orderMonth < orderDay)) {
                     var iDelim1 = orderYear + YEAR.length;
                     var iDelim2 = orderMonth + MONTH.length;
                     var delim1 = datePattern.substring(iDelim1, iDelim1 + 1);
                     var delim2 = datePattern.substring(iDelim2, iDelim2 + 1);
                     if (iDelim1 == orderMonth && iDelim2 == orderDay) {
                         dateRegexp = new RegExp("^(\\d{4})(\\d{2})(\\d{2})$");
                     } else if (iDelim1 == orderMonth) {
                         dateRegexp = new RegExp("^(\\d{4})(\\d{2})[" + delim2 + "](\\d{2})$");
                     } else if (iDelim2 == orderDay) {
                         dateRegexp = new RegExp("^(\\d{4})[" + delim1 + "](\\d{2})(\\d{2})$");
                     } else {
                         dateRegexp = new RegExp("^(\\d{4})[" + delim1 + "](\\d{2})[" + delim2 + "](\\d{2})$");
                     }
                     var matched = dateRegexp.exec(value);
                     if(matched != null) {
                         if (!isValidDate(matched[3], matched[2], matched[1])) {
                             if (i == 0) {
                                 focusField = field;
                             }
                             fields[i++] = oDate[x][1];
                             bValid =  false;
                         }
                     } else {
                          if (i == 0) {
                              focusField = field;
                          }
                          fields[i++] = oDate[x][1];
                          bValid =  false;
                     }
                 } else {
                     if (i == 0) {
                         focusField = field;
                     }
                     fields[i++] = oDate[x][1];
                     bValid =  false;
                 }
          }
       }
       if (fields.length > 0) {
          focusField.focus();
          alert(fields.join('\n'));
       }
       return bValid;
    }
    
    function isValidDate(day, month, year) {
	    if (month < 1 || month > 12) {
            return false;
        }
        if (day < 1 || day > 31) {
            return false;
        }
        if ((month == 4 || month == 6 || month == 9 || month == 11) &&
            (day == 31)) {
            return false;
        }
        if (month == 2) {
            var leap = (year % 4 == 0 &&
               (year % 100 != 0 || year % 400 == 0));
            if (day>29 || (day == 29 && !leap)) {
                return false;
            }
        }
        return true;
    }


    /*$RCSfile: validateIntRange.js,v $ $Revision: 1.10 $ $Date: 2004/03/28 16:53:21 $ */
    /**
    * Check to see if fields is in a valid integer range.
    * Fields are not checked if they are disabled.
    * <p>
    * @param form The form validation is taking place on.
    */
    function validateIntRange(form) {
        var isValid = true;
        var focusField = null;
        var i = 0;
        var fields = new Array();
        var formName = form.getAttributeNode("name"); 

        oRange = eval('new ' + formName.value + '_intRange()');        
        for (x in oRange) {
            var field = form[oRange[x][0]];
            if (field.disabled == false)  {
                var value = '';
                if (field.type == 'hidden' ||
                    field.type == 'text' || field.type == 'textarea' ||
                    field.type == 'radio' ) {
                    value = field.value;
                }
                if (field.type == 'select-one') {
                    var si = field.selectedIndex;
                    if (si >= 0) {
                        value = field.options[si].value;
                    }
                }
                if (value.length > 0) {
                    var iMin = parseInt(oRange[x][2]("min"));
                    var iMax = parseInt(oRange[x][2]("max"));
                    var iValue = parseInt(value);
                    if (!(iValue >= iMin && iValue <= iMax)) {
                        if (i == 0) {
                            focusField = field;
                        }
                        fields[i++] = oRange[x][1];
                        isValid = false;
                    }
                }
            }
        }
        if (fields.length > 0) {
            focusField.focus();
            alert(fields.join('\n'));
        }
        return isValid;
    }


    /*$RCSfile: validateShort.js,v $ $Revision: 1.9 $ $Date: 2004/03/28 16:53:21 $ */
    /**
    *  Check to see if fields are a valid short.
    * Fields are not checked if they are disabled.
    * <p>
    * @param form The form validation is taking place on.
    */
    function validateShort(form) {
        var bValid = true;
        var focusField = null;
        var i = 0;
        var fields = new Array();
        var formName = form.getAttributeNode("name");

        oShort = eval('new ' + formName.value + '_ShortValidations()');

        for (x in oShort) {
            var field = form[oShort[x][0]];

            if ((field.type == 'hidden' ||
                field.type == 'text' ||
                field.type == 'textarea' ||
                field.type == 'select-one' ||
                field.type == 'radio')  &&
                field.disabled == false) {

                var value = '';
                // get field's value
                if (field.type == "select-one") {
                    var si = field.selectedIndex;
                    if (si >= 0) {
                        value = field.options[si].value;
                    }
                } else {
                    value = field.value;
                }

                if (value.length > 0) {
                    if (!isAllDigits(value)) {
                        bValid = false;
                        if (i == 0) {
                            focusField = field;
                        }
                        fields[i++] = oShort[x][1];

                    } else {

                        var iValue = parseInt(value);
                        if (isNaN(iValue) || !(iValue >= -32768 && iValue <= 32767)) {
                            if (i == 0) {
                                focusField = field;
                            }
                            fields[i++] = oShort[x][1];
                            bValid = false;
                        }
                   }
               }
            }
        }
        if (fields.length > 0) {
           focusField.focus();
           alert(fields.join('\n'));
        }
        return bValid;
    }


    /*$RCSfile: validateFloat.js,v $ $Revision: 1.11 $ $Date: 2004/03/28 16:53:21 $ */
    /**
    * Check to see if fields are a valid float.
    * Fields are not checked if they are disabled.
    * <p>
    * @param form The form validation is taking place on.
    */
    function validateFloat(form) {
        var bValid = true;
        var focusField = null;
        var i = 0;
        var fields = new Array();
         var formName = form.getAttributeNode("name");

        oFloat = eval('new ' + formName.value + '_FloatValidations()');
        for (x in oFloat) {
        	var field = form[oFloat[x][0]];
        	
            if ((field.type == 'hidden' ||
                field.type == 'text' ||
                field.type == 'textarea' ||
                field.type == 'select-one' ||
                field.type == 'radio') &&
                field.disabled == false) {
        
            	var value = '';
                // get field's value
                if (field.type == "select-one") {
                    var si = field.selectedIndex;
                    if (si >= 0) {
                        value = field.options[si].value;
                    }
                } else {
                    value = field.value;
                }
        
                if (value.length > 0) {
                    // remove '.' before checking digits
                    var tempArray = value.split('.');
                    //Strip off leading '0'
                    var zeroIndex = 0;
                    var joinedString= tempArray.join('');
                    while (joinedString.charAt(zeroIndex) == '0') {
                        zeroIndex++;
                    }
                    var noZeroString = joinedString.substring(zeroIndex,joinedString.length);

                    if (!isAllDigits(noZeroString)) {
                        bValid = false;
                        if (i == 0) {
                            focusField = field;
                        }
                        fields[i++] = oFloat[x][1];

                    } else {
	                var iValue = parseFloat(value);
	                if (isNaN(iValue)) {
	                    if (i == 0) {
	                        focusField = field;
	                    }
	                    fields[i++] = oFloat[x][1];
	                    bValid = false;
	                }
                    }
                }
            }
        }
        if (fields.length > 0) {
           focusField.focus();
           alert(fields.join('\n'));
        }
        return bValid;
    }


   /*$RCSfile: validateEmail.js,v $ $Revision: 1.9 $ $Date: 2004/03/28 16:53:21 $ */
    /**
    * Check to see if fields are a valid email address.
    * Fields are not checked if they are disabled.
    * <p>
    * @param form The form validation is taking place on.
    */
    function validateEmail(form) {
        var bValid = true;
        var focusField = null;
        var i = 0;
        var fields = new Array();
        var formName = form.getAttributeNode("name");


        oEmail = eval('new ' + formName.value + '_email()');

        for (x in oEmail) {
            var field = form[oEmail[x][0]];
            if ((field.type == 'hidden' || 
                 field.type == 'text' ||
                 field.type == 'textarea') &&
                (field.value.length > 0) &&
                field.disabled == false) {
                if (!checkEmail(field.value)) {
                    if (i == 0) {
                        focusField = field;
                    }
                    fields[i++] = oEmail[x][1];
                    bValid = false;
                }
            }
        }
        if (fields.length > 0) {
            focusField.focus();
            alert(fields.join('\n'));
        }
        return bValid;
    }

    /**
     * Reference: Sandeep V. Tamhankar (stamhankar@hotmail.com),
     * http://javascript.internet.com
     */
    function checkEmail(emailStr) {
       if (emailStr.length == 0) {
           return true;
       }
       var emailPat=/^(.+)@(.+)$/;
       var specialChars="\\(\\)<>@,;:\\\\\\\"\\.\\[\\]";
       var validChars="\[^\\s" + specialChars + "\]";
       var quotedUser="(\"[^\"]*\")";
       var ipDomainPat=/^(\d{1,3})[.](\d{1,3})[.](\d{1,3})[.](\d{1,3})$/;
       var atom=validChars + '+';
       var word="(" + atom + "|" + quotedUser + ")";
       var userPat=new RegExp("^" + word + "(\\." + word + ")*$");
       var domainPat=new RegExp("^" + atom + "(\\." + atom + ")*$");
       var matchArray=emailStr.match(emailPat);
       if (matchArray == null) {
           return false;
       }
       var user=matchArray[1];
       var domain=matchArray[2];
       if (user.match(userPat) == null) {
           return false;
       }
       var IPArray = domain.match(ipDomainPat);
       if (IPArray != null) {
           for (var i = 1; i <= 4; i++) {
              if (IPArray[i] > 255) {
                 return false;
              }
           }
           return true;
       }
       var domainArray=domain.match(domainPat);
       if (domainArray == null) {
           return false;
       }
       var atomPat=new RegExp(atom,"g");
       var domArr=domain.match(atomPat);
       var len=domArr.length;
       if ((domArr[domArr.length-1].length < 2) ||
           (domArr[domArr.length-1].length > 3)) {
           return false;
       }
       if (len < 2) {
           return false;
       }
       return true;
    }

  


    /*$RCSfile: validateMask.js,v $ $Revision: 1.10 $ $Date: 2004/03/28 16:53:21 $ */
    /**
    * Check to see if fields are a valid using a regular expression.
    * Fields are not checked if they are disabled.
    * <p>
    * @param form The form validation is taking place on.
    */
    function validateMask(form) {
        var isValid = true;
        var focusField = null;
        var i = 0;
        var fields = new Array();
        var formName = form.getAttributeNode("name"); 

        oMasked = eval('new ' + formName.value + '_mask()');      
        for (x in oMasked) {
            var field = form[oMasked[x][0]];

            if ((field.type == 'hidden' ||
                field.type == 'text' ||
                 field.type == 'textarea' ||
				 field.type == 'file') &&
                 (field.value.length > 0) &&
                 field.disabled == false) {

                if (!matchPattern(field.value, oMasked[x][2]("mask"))) {
                    if (i == 0) {
                        focusField = field;
                    }
                    fields[i++] = oMasked[x][1];
                    isValid = false;
                }
            }
        }

        if (fields.length > 0) {
           focusField.focus();
           alert(fields.join('\n'));
        }
        return isValid;
    }

    function matchPattern(value, mask) {
       return mask.exec(value);
    }


    /*$RCSfile: validateMinLength.js,v $ $Revision: 1.11 $ $Date: 2004/03/28 16:53:21 $ */
    /**
    * A field is considered valid if greater than the specified minimum.
    * Fields are not checked if they are disabled.
    * <p>
    * <strong>Caution:</strong> Using <code>validateMinLength</code> on a password field in a 
    *  login page gives unnecessary information away to hackers. While it only slightly
    *  weakens security, we suggest using it only when modifying a password.</p>
    * @param form The form validation is taking place on.
    */
    function validateMinLength(form) {
        var isValid = true;
        var focusField = null;
        var i = 0;
        var fields = new Array();
        var formName = form.getAttributeNode("name");


        oMinLength = eval('new ' + formName.value + '_minlength()');

        for (x in oMinLength) {
            var field = form[oMinLength[x][0]];

            if ((field.type == 'hidden' ||
                field.type == 'text' ||
                field.type == 'password' ||
                field.type == 'textarea') &&
                field.disabled == false) {

                var iMin = parseInt(oMinLength[x][2]("minlength"));
                if ((trim(field.value).length > 0) && (field.value.length < iMin)) {
                    if (i == 0) {
                        focusField = field;
                    }
                    fields[i++] = oMinLength[x][1];
                    isValid = false;
                }
            }
        }
        if (fields.length > 0) {
           focusField.focus();
           alert(fields.join('\n'));
        }
        return isValid;
    }

