/**
 Ex: Se vc come�ar a digitar 'Ba' em 'campoTexto' o value=2 do select vai
     ser selecionado automaticamente.

 <html:text styleClass="campo" maxlength="25" property="campoTexto"
             size="25" onkeyup="findCombo(this, form['campoSelect']);"/>
 <html:select styleClass="campo" property="campoSelect" >
    <html:option value=""> </html:option>
    <html:option value="1">Aaabc Unidade Emissora 001</html:option>
    <html:option value="2">Babc Unidade Emissora 002</html:option>
    <html:option value="3">Bbbc Unidade Emissora 003</html:option>
  </html:select>

  Import: <script language="JavaScript" src='../js/util.js'></script>
 */
  function findTextInSelect(textField, combo) {
    combo.options[0].selected=true;
    for(i=0; i<combo.options.length; i++) {
      texto = combo.options[i].text.substring(0, textField.value.length);
      if(texto.toUpperCase() == textField.value.toUpperCase()) {
        combo.options[i].selected=true;
        break;
      }
    }
  }

  function submitWizardAbas(form, step) {
    if(step == 3) {
       form.action = "exibeDevedoresRD.do";
    }
    else {
       form.action = "wizardRegistroDebitoAutuacao.do";
       form.stepWizard.value = step;
    }
    form.onsubmit = "";
    form.submit();
  }

  function submitWizardAbasGeneric(form, step, action) {
    if(step == 3) {
       form.action = "exibeDevedoresRD.do";
    }
    else {
      if(action != undefined) {
        form.action = action;
      }
      else {
        form.action = "dispatchRegistroDebitoAction.do"
      }
    }
    form.stepWizard.value = step;
    form.onsubmit = "";
    form.submit();
  }

//Formata qualquer dado num�rico durante a digita��o conforme m�scara passada
function formatarDados(obj,evento,mascara){
  var caracteres = "0123456789";
  var code;

  if(document.all){
    code = evento.keyCode;
  }
  else if(evento != null && evento.which){
    code = evento.which;
  }

  if (code == 8) return true;
  if (code == undefined) return true;

  if(obj.value.length == mascara.length) {
    return false;
  }
  pos = obj.value.length;
  if (mascara.charAt(pos) != '0'){
    obj.value = obj.value + mascara.charAt(pos);
    pos++;
  }
  if(mascara.charAt(obj.value.length) == '0') {
    if(caracteres.indexOf(String.fromCharCode(code)) >= 0) {
      return true;
    }
  }
  return false;
}

/*****************************************************************************/

function confirmaAcao(acao) {
  return confirm("Tem certeza que deseja " + acao + "?");
}

/*****************************************************************************/

function disableTargetWhenZeroSelected(obj,target) {

  if (obj.value != "") {
    target.value = obj.options[obj.options.selectedIndex].text;
    target.readOnly = true;
  } else {
    target.readOnly = false;
    target.value = "";
  }

}

/*
*	Esta fun��o compara duas datas retornando true se dataInicio < dataFim.
*/
	function comparaDatas(dataInicio, dataFim){

		campoInicio =           dataInicio;
		dia  		=	campoInicio.substring(0,2);
		mes 		= 	campoInicio.substring(3,5);
		ano 		= 	campoInicio.substring(6,10);

	  	campoFim	=       dataFim;
		diaFim  	=	campoFim.substring(0,2);
		mesFim 		= 	campoFim.substring(3,5);
		anoFim 		= 	campoFim.substring(6,10);


		inicio 		=       new Date(mes, dia, ano);
		fim 		=       new Date(mesFim, diaFim, anoFim);

		if(inicio.getTime() <= fim.getTime()){
			return true;
		}
		else{
			return false;
		}
	}


function currencyFormat(fld, milSep, decSep, e)
{
	var sep = 0;
	var key = '';
	var i = j = 0;
	var len = len2 = 0;
	var strCheck = '0123456789';
	var aux = aux2 = '';
	var whichCode = (window.Event) ? e.which : e.keyCode;
	if (whichCode == 13) return true;
	if (whichCode == 8) return true;
	if (whichCode == 0) return true;
        if(fld.maxLength <= fld.value.length){
         return false;
        }
	key = String.fromCharCode(whichCode);
	if (strCheck.indexOf(key) == -1) return false;
	len = fld.value.length;
	for(i = 0; i < len; i++)
	if ((fld.value.charAt(i) != '0') && (fld.value.charAt(i) != decSep)) break;
	aux = '';
	for(; i < len; i++)
	if (strCheck.indexOf(fld.value.charAt(i))!=-1) aux += fld.value.charAt(i);
	aux += key;
	len = aux.length;
	if (len == 0) fld.value = '';
	if (len == 1) fld.value = '0'+ decSep + '0' + aux;
	if (len == 2) fld.value = '0'+ decSep + aux;
	if (len > 2)
	{
		aux2 = '';
		for (j = 0, i = len - 3; i >= 0; i--)
		{
			if (j == 3)
			{
				aux2 += milSep;
				j = 0;
			}
			aux2 += aux.charAt(i);
			j++;
		}
		fld.value = '';
		len2 = aux2.length;
		for (i = len2 - 1; i >= 0; i--)
		fld.value += aux2.charAt(i);
		fld.value += decSep + aux.substr(len - 2, len);
	}
	return false;
}

function telefoneFormat(fld, chrSep, e)
{
	var sep = 0;
	var key = '';
	var i = j = 0;
	var len = len2 = 0;
	var strCheck = '0123456789';
	var aux = aux2 = '';
	var whichCode = (window.Event) ? e.which : e.keyCode;
	if (whichCode == 13) return true;
	if (whichCode == 8) return true;
	if (whichCode == 0) return true;
        if(fld.maxLength <= fld.value.length){
         return false;
        }
	key = String.fromCharCode(whichCode);
	if (strCheck.indexOf(key) == -1) return false;
	len = fld.value.length;
	for(i = 0; i < len; i++)
	if ((fld.value.charAt(i) != '0') && (fld.value.charAt(i) != chrSep)) break;
	aux = '';
	for(; i < len; i++)
	if (strCheck.indexOf(fld.value.charAt(i))!=-1) aux += fld.value.charAt(i);
	aux += key;

	len = aux.length;
	if (len == 0) fld.value = '';
	if (len > 0 && len <= 4 ) fld.value = aux;
	if (len > 4)
	{
		for (i = len - 5; i >= 0; i--)
                   aux2 += aux.charAt(i);
		fld.value = '';
		len2 = aux2.length;
		for (i = len2 - 1; i >= 0; i--)
 		   fld.value += aux2.charAt(i);
		fld.value += chrSep + aux.substr(len - 4, len);
	}
	return false;
}


function replaceAll(text, strA, strB)
{
    return text.replace( new RegExp(strA, "g"), strB );
}

function trim(s) {
	return ltrim(rtrim(s));
}

function ltrim(s) {
	return s.replace( /^\s*/, "" );
}

function rtrim(s) {
	return s.replace( /\s*$/, "" );
}

function reverse(str) {
  var str1 = '';
  for(i = str.length-1;i>=0;i--) {
	str1 += str.charAt(i);
  }
  return str1;
}

function validaTamanhoOnKeyPress(campo, size, e) {
  var keynum;
  if(window.event) {// IE
    keynum = e.keyCode
  } else if(e.which) {// Netscape/Firefox/Opera
    keynum = e.which
  }

  if(!keynum || keynum == 8) {
    return true;
  }
  return campo.value.length < size;
}

function validaTamanho(campo, qtChr) {
  if(campo.value.length > qtChr) {
    return false;
  }
  return true;
}

function getScrollPos(){
	if(typeof window.pageYOffset=="number") {
		return {x:window.pageXOffset, y:window.pageYOffset};
	} else {
		var c=getCompatModeElement();
		if(c){
			return {x:c.scrollLeft, y:c.scrollTop};
		} else {
			return {x:-1, y:-1};
		}
	}
}

function getCompatModeElement(){
	if(document.compatMode &&
		document.compatMode.indexOf("CSS")!=-1 &&
		document.documentElement) {
		return document.documentElement;
	} else if(document.body) {
		return document.body;
	} else {
		return null;
	}
}

function scroll(pos) {
	window.scrollPosition = function() {
		if(typeof window.document.body.scrollTop != "undefined")
			return window.document.body.scrollTop;
		else if(typeof window.pageYOffset != "undefined")
			return window.pageYOffset;
		else
			return -20;
	}
        window.scrollTo(0, pos);
}

function saveScrollPosition(form) {
  if(form.action.indexOf('?') > -1) {
    form.action += '&scrollPosition=';
  } else {
    form.action += '?scrollPosition=';
  }
  form.action += getScrollPos().y;
}

function openWindow(mypage, w, h, scroll, modal) {
  try {
    var leftPosition = (screen.width) ? (screen.width-w)/2 : 0;
    var topPosition = (screen.height) ? (screen.height-h)/2 : 0;

    if (window.showModalDialog && modal) {
      var settings = 'dialogWidth:' + w + 'px;dialogHeight:' + h + 'px';
      window.showModalDialog(mypage,'',settings);
    } else {
      var settings = 'height='+h+',width='+w+',top='+topPosition+',left='+leftPosition;
      window.open(mypage,'',settings);
    }
  } catch(e) {
    alert(e.message);
  }
}

function validaCampoCpf(campo) {
  if(trim(campo.value) != '' && !validaCpf(campo.value)) {
    alert('CPF inv�lido.');
    campo.focus();
    return false;
  } else {
	  return true;
  }
}

function validaCampoPis(campo) {
  if(trim(campo.value) != '' && !validaPis(campo.value)) {
    alert('PIS inv�lido.');
    campo.focus();
    return false;
  } else {
	  return true;
  }
}

function validaCampoCnpj(campo) {
  if(trim(campo.value) != '' && !validaCnpj(campo.value)) {
    alert('CNPJ inv�lido.');
    campo.focus();
    return false;
  } else {
	  return true;
  }
}

function validaCampoCpfCnpj(campo) {
  if(trim(campo.value) != '' && (!validaCpf(campo.value) && !validaCnpj(campo.value))) {
    alert('CPF/CNPJ inv�lido.');
    campo.focus();
    return false;
  } else {
	  return true;
  }
}

function validaCpf(cpf) {

  cpf = replaceAll(cpf, "\\.", "");
  cpf = replaceAll(cpf, "/", "");
  cpf = replaceAll(cpf, "-", "");

  if(cpf.length != 11) {
    return false;
  }

  var n = 9;
  var n1 = cpf.charAt(0);
  var n2 = cpf.charAt(1);
  var n3 = cpf.charAt(2);
  var n4 = cpf.charAt(3);
  var n5 = cpf.charAt(4);
  var n6 = cpf.charAt(5);
  var n7 = cpf.charAt(6);
  var n8 = cpf.charAt(7);
  var n9 = cpf.charAt(8);

  var d1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*10;
  d1 = 11 - ( mod(d1,11) );

  if (d1>=10) d1 = 0;

  var d2 = d1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11;
  d2 = 11 - ( mod(d2,11) );
  if (d2>=10) d2 = 0;

  if(d1 != cpf.charAt(9) || d2 != cpf.charAt(10)) {
    return false;
  }

  return true;
}

function validaCnpj(cnpj) {
  cnpj = replaceAll(cnpj, "\\.", "");
  cnpj = replaceAll(cnpj, "/", "");
  cnpj = replaceAll(cnpj, "-", "");

  if(cnpj.length != 14) {
    return false;
  }

  var n = 9;
  var n1 = cnpj.charAt(0);
  var n2 = cnpj.charAt(1);
  var n3 = cnpj.charAt(2);
  var n4 = cnpj.charAt(3);
  var n5 = cnpj.charAt(4);
  var n6 = cnpj.charAt(5);
  var n7 = cnpj.charAt(6);
  var n8 = cnpj.charAt(7);
  var n9 = cnpj.charAt(8);
  var n10 = cnpj.charAt(9);
  var n11 = cnpj.charAt(10);
  var n12 = cnpj.charAt(11);

  var d1 = n12*2+n11*3+n10*4+n9*5+n8*6+n7*7+n6*8+n5*9+n4*2+n3*3+n2*4+n1*5;
  d1 = 11 - ( mod(d1,11) );
  if (d1>=10) d1 = 0;

  var d2 = d1*2+n12*3+n11*4+n10*5+n9*6+n8*7+n7*8+n6*9+n5*2+n4*3+n3*4+n2*5+n1*6;
  d2 = 11 - ( mod(d2,11) );
  if (d2>=10) d2 = 0;

  if(d1 != cnpj.charAt(12) || d2 != cnpj.charAt(13)) {
    return false;
  }

  return true;
}


function validaPis(PIS_PASEP)
{

   try {
      PIS_PASEP = PIS_PASEP.replace('.', '').replace('.', '').replace('-', '');

      if(PIS_PASEP.length != 11)
         return false; // 'PIS/PASEP inv�lido!';
      if(isNaN(PIS_PASEP))
         return false; //'PIS/PASEP inv�lido!';
      if(PIS_PASEP == '00000000000')
         return false; //'PIS/PASEP inv�lido!';

      var intResultado = new String();
      var intTotal = 0;
      var strPeso = '3298765432';

      for(i = 1; i <= 10; i++) {
         intResultado = PIS_PASEP.substring(i, i - 1) * strPeso.substring(i, i - 1);
         intTotal += intResultado;
      }

      var intResto = intTotal % 11;
      if(intResto != 0)
         intResto = 11 - intResto;
      if(intResto == 10 || intResto == 11)
         intResto = intResto.toString().substring(2, 1);
      if(parseInt(intResto, 10) != parseInt(PIS_PASEP.substring(11, 10), 10))
         return false; //'PIS/PASEP inv�lido!';

      return true;
   } catch(excecao) {
      return false; //'valPISPASEP(): ' + excecao.description;
   }
}


function mod(dividendo,divisor) {
  return Math.round(dividendo - (Math.floor(dividendo/divisor)*divisor));
}

var enviado = false;

function eviadoTimeout() {
   enviado = false;
}

function changeLocation(link) {
   if (!enviado) {
     location = link;
     setTimeout("eviadoTimeout()",60000);
     enviado = true;
   }
}

function submitForm(form) {
   if (!enviado) {
     form.submit();
     setTimeout("eviadoTimeout()",60000);
     enviado = true;
   }
}

function postForm(form, action, setReload) {
   form.action = action;
   submitForm(form);
   if (setReload != undefined) {
      parent.top.reload = setReload;
   }
   return true;
}

/**
 *  Transfere o focus para o proximo elemento baseando-se no maxlength e tabindex
 */

function doNext(el)
{
   if (el.value.length < el.getAttribute('maxlength')) return;
   var nextEl = el.form.elements[el.tabIndex+1];
   if (nextEl && nextEl.focus) nextEl.focus();
}


function loading(b){
    document.getElementById("divTravaTela").style.display = (b?"block":"none");
    document.getElementById("divAguarde").style.display = (b?"block":"none");
}

function centralizarLoading(){
    var theBody = document.getElementsByTagName("BODY")[0];
    document.getElementById("divTravaTela").style.top = theBody.scrollTop +"px";
    document.getElementById("divAguarde").style.marginTop = (theBody.scrollTop - 25) +"px";
}

function segurarFoco(){
    document.getElementById("txtLoading").focus();
}

function verificaESC(evnt){
    if(evnt.keyCode == 27) loading(false);
}

function addEvent(to, type, fn){
    if(document.addEventListener){
        to.addEventListener(type, fn, false);
    } else if(document.attachEvent){
        to.attachEvent('on'+type, fn);
    } else {
        to['on'+type] = fn;
    }  
}




<script type="text/javascript">

function remover(pathArquivo) {
	  var form = document.forms['SociedadeCredenciadaForm'];
	
	  document.getElementById("socrEmail").value = document.getElementById("email").value;
	  saveScrollPosition(form);
	  form.action = './adicionaArquivoSociedadeCredenciadaAlteracao.do?actArquivo=removerArquivo&pathArquivo='+pathArquivo;
	  form.submit();
}

function isComma(e) {
	
	return( e != 44 && e != 59);
}


function mostrar(pathArquivo) {
    window.open('./adicionaArquivoSociedadeCredenciadaAlteracao.do?actArquivo=mostrarArquivo&pathArquivo='+pathArquivo,'','width=800,height=600,scrollbars=yes');
}

function voltar() {
	document.getElementById("idExibeCampo").value = false;
    location.href="./listaSociedadeCredenciada.do";
}


function buscaCombo(campo, opcao) {
	
	  var form = document.forms[0];
	  form.act.value=opcao;
	  document.getElementById("socrEmail").value = document.getElementById("email").value;
	  form.action = './carregaMunicipiosAction.do';
	  form.submit();
}




function validaDadosForm() {	

	var form = document.forms[0];

	if(form['vo.idMacroRegiao'].value == "") {
	   alert("É obrigatório informar a Região.");
	   form['vo.idMacroRegiao'].focus();
	   return false;
	}	

	if(form['vo.longAsString(ordem)'].value == "") {
		alert("É obrigatório informar o Número de Ordem.");
		form['vo.longAsString(ordem)'].focus();
		return false;
	}
	
	if(form['vo.descricao'].value == "") {
		alert("É Obrigatório informar a Razao Social.");
		form['vo.descricao'].focus();
		return false;	
	}

	if(form['vo.cnpj'].value == "") {
		alert("É Obrigatório informar o CNPJ.");
		form['vo.cnpj'].focus();
		return false;
	}


	if(ValidarCNPJ(form['vo.cnpj'].value) == false) {
		form['vo.cnpj'].focus();
		return false;		
	}
	

	if(form['vo.endereco'].value == "") {
	   alert("É Obrigatório informar o Endereco.");
	   form['vo.endereco'].focus();
	   return false;
	}
	
	if(form['vo.bairro'].value == "") {
	   alert("É Obrigatório informar o Bairro.");
	   form['vo.bairro'].focus();
	   return false;
	}
	
	if(form['vo.idMunicipio'].value == "") {
	   alert("É Obrigatório informar o Municipio.");
	   form['vo.idMunicipio'].focus();
	   return false;
	}

	if(form['vo.cep'].value == "") {
	   alert("É Obrigatório informar o CEP.");
	   form['vo.cep'].focus();
	   return false;
	}

	if(form['vo.telefone'].value == "") {
	   alert("É Obrigatório informar o Telefone.");
	   form['vo.telefone'].focus();
	   return false;
	}

	if(document.getElementById("email").value == "") {
	   alert("É Obrigatório informar o Email.");
	   document.getElementById("email").focus();
	   return false;
	}

	if (!valid_email(document.getElementById("email"))) {
		document.getElementById("email").focus();
		return false;
	}

	if(form['vo.longAsString(banco)'].value == "") {
	   alert("É Obrigatório informar o Banco.");
	   form['vo.longAsString(banco)'].focus();
	   return false;
	}

	if(form['vo.agencia'].value == "") {
	   alert("É Obrigatório informar a Agencia.");
	   form['vo.agencia'].focus();
	   return false;
	}	
	
	if(form['vo.conta'].value == "") {
	   alert("É Obrigatório informar a Conta.");
	   form['vo.conta'].focus();
	   return false;
	}		   

//     if(form['modalidade1'].value == "" && form['modalidade2'].value == "" && form['modalidade3'].value == "" && form['modalidade4'].value == "") {
// 	   alert("É Obrigatório informar pelo menos uma Modalidade.");
// 	   return false;
// 	}

    document.getElementById("socrEmail").value = document.getElementById("email").value;
}


//valida o CNPJ digitado
function ValidarCNPJ(cnpj){
	
	var valida = new Array(6,5,4,3,2,9,8,7,6,5,4,3,2);
	var dig1= new Number;
	var dig2= new Number;
	
	exp = /\.|\-|\//g
	cnpj = cnpj.toString().replace( exp, "" ); 
	var digito = new Number(eval(cnpj.charAt(12)+cnpj.charAt(13)));
		
	for(i = 0; i<valida.length; i++){
		dig1 += (i>0? (cnpj.charAt(i-1)*valida[i]):0);	
		dig2 += cnpj.charAt(i)*valida[i];	
	}
	dig1 = (((dig1%11)<2)? 0:(11-(dig1%11)));
	dig2 = (((dig2%11)<2)? 0:(11-(dig2%11)));
	
	if(((dig1*10)+dig2) != digito)	{
		alert('CNPJ Inválido!');
		return false;
	    //clean();
	}
 }





function only_LowerCase(evento) {
	   if (navigator.appName != 'Netscape') {
	  		charCode = evento.keyCode;
	  	}
	  	else {
	  		charCode = evento.which;
	  	}	  	

		if (charCode >= 65 && charCode <= 90) {
			return false;
		}

		return( charCode != 44 && charCode != 59);
		
}







function only_numbers(objeto,sinal,pontovirgula,casas,simboloponto,evento) {
	   if (navigator.appName != 'Netscape') {
	  		charCode = evento.keyCode;
	  	}
	  	else {
	  		charCode = evento.which;
	  	}

		if (8 == charCode || 0 == charCode){
	  		return true;
	  	}

		if (charCode < 48 || charCode > 57) {
			/* if (charCode == 46 || charCode == 44 || simboloponto == String.fromCharCode(charCode)) {
			    alert("fifi");
				if (pontovirgula == 'Y') {
				  	if (navigator.appName != 'Netscape') {
				  		charCode = simboloponto.charCodeAt();
				  	}
				  	else{
				  		if (simboloponto != String.fromCharCode(charCode)){
				  			alert ('O ponto decimal é representado pelo caracter: '+simboloponto);
				  			charCode = 0;
				  		}
				  		else{
				  			charCode = simboloponto.charCodeAt();
				  		}
				  	}
					if (casas == 0) {
						charCode = 0;
					}
					else {
						array_counter = objeto.value.split(simboloponto);
						if (array_counter.length > 1) {
							charCode = 0;
						}
					}
				}
				else {
				    alert("fofo");
					charCode=0;
				}
			}
			else {
				if (charCode == 45 ) {
					if (sinal == 'Y') {
						array_counter = objeto.value.split("-");
						if (array_counter.length == 1) {
							objeto.value = "-" + objeto.value;
						}
					}
					charCode=0;
				}
				else {
					charCode=0;
					only_numbers_blur(objeto,sinal,pontovirgula,casas,simboloponto,1)
				}
			} */
		}
		else {
		 	if (!only_numbers_blur(objeto,sinal,pontovirgula,casas,simboloponto,1)){
				charCode = 0;
//				alert ("01 Apenas "+casas+" Casas Decimais !");
			}
		    array_split = objeto.lang.split(',');
	      	if (array_split.length > 2) {
				if (objeto.value.length == 3){
					if (array_split [2] == "Year") {
						objeto.value = objeto.value + String.fromCharCode(charCode);
	                    charCode = 0;
						nextfocus = false;
						for (i = 0 ; i < document.forms.length; i++){
							for(j = 0; j < document.forms[i].elements.length; j++){
								elem = document.forms[i].elements[j];
								if(elem.type != "hidden" && elem.disabled != true){
							    	if(elem.name == objeto.name){
							        	nextfocus = true;
							        }
							        else {
							        	if( true == nextfocus ){
							            	elem.focus();
							                break;
							            }
							        }
							  	}
							}
						}
	       			}
	       		}
	       	}
		}
		
		result = false;
	  	if (navigator.appName != 'Netscape') {
			evento.keyCode = charCode;
	  	}
		else {
			if (0 == charCode){
				result = false;
			}
		}
		
		return result;
}

function isAlphaNumeric(e){ // Alphanumeric only
    var k;


    var palavra = String.fromCharCode(e.keyCode); 
    
    var acento = "´`^¨~"; 

    var caracteresValidos = 'àèìòùâêîôûäëïöüáéíóúãõçÇÀÈÌÒÙÂÊÎÔÛÄËÏÖÜÁÉÍÓÚÃÕ'; 
    
    if(caracteresValidos.indexOf(palavra) != -1) {
       return true; 
    }      
         
    return( (e>47 && e<58)||(e>64 && e<91)||(e>96 && e<123)||e==0 || e==32);
 }

function addRow() {
    var div = document.createElement('div');

    div.className = 'row';

    div.innerHTML = '<input id="inputFile" name="fileName" size="1" type="file">\
        <input type="button" value="-" onclick="removeRow(this)">';

     document.getElementById('content').appendChild(div);
}

function removeRow(input) {
    document.getElementById('content').removeChild( input.parentNode );
}

function baixa(valor){
	return valor.value=valor.value.toLowerCase();
}

function enviar() {
	var form = document.forms[0];
	form.action = './enviarEmailSociedadeCredenciada.do';
	form.submit();
	
}

function adicionarContrato() {
	var form = document.forms[0];
	form.action = './montaInclusaoContratoEscritorio.do';
	form.submit();
}

function editarContrato(id) {
	var form = document.forms[0];
	form.action = './montaInclusaoContratoEscritorio.do?id=' + id ;
	form.submit()
}
