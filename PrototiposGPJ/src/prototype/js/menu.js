   addmenu(
    menu=["Movimenta��o",,,180,1,"",style1,,"",effect,,,,,,,,,,,,
    
      ,"Tela de Entrada", "./Entrada.html",,,1
    
      ,"Cadastro de Pessoas", "./pesquisaPessoa.do?act=init",,,1
    
      ,"Pesquisa de A��o", "./PesquisaAcao.html",,,1
    
      ,"Pesquisa de A��o Avan�ada", "./montaPesquisaAcaoJudicial.do",,,1
    
      ,"Cadastro de A��o", "./CadastroAcaoProcesso.html",,,1
    
      ,"Pesquisa de Processo - CAP", "./montaPesquisaAcaoCap.do",,,1
    
      ,"Novo Processo - CAP", "./cadastroAcaoCap.do?registroNovo=S",,,1
    
      ,"Pesquisa de Processo Administrativo", "./montaPesquisaProcessoAdmin.do",,,1
    
      ,"Cadastro de Processo Administrativo", "./montaInclusaoProcessoAdmin.do?act=init",,,1
    
      ,"Publica��es", "./montaPesquisaPublicacao.do",,,1
    
      ,"Tramita��es em Lote", "./montaDadosTramitacaoEmLote.do?act=novoLote",,,1
    
      ,"Atualiza Valor A��o", "./montaAtualizacaoValorAcaoJudicial.do",,,1
    
      ,"Andamentos em Lote", "./montaDadosAndamentoEmLote.do?act=init",,,1
    
      ,"Cadastro de A��o Simplificado", "./montaDadosAcaoJudicialSimplificada.do?act=init",,,1
    
      ,"Pesquisa de A��o Simplificada", "./montaPesquisaAcaoJudicialSimplificada.do?act=init",,,1
	  
	  ,"Cadastro de Bloqueios", "./ConsultaBloqueios.html",,,1
    
    ])
  

  
    addmenu(
    menu=["Pagamentos",,,180,1,"",style1,,"",effect,,,,,,,,,,,,
    
      ,"Pesquisa de Solicita��o Aut�noma", "./pesquisaSolicitacaoAutonoma.do",,,1
    
      ,"Pesquisa Despesas e Honor�rios", "./pesquisaDespesasHonorarios.do",,,1
    
      ,"Pesquisa de Solicita��es de Pagamento/Reembolso", "./pesquisaSolicitacaoPagamento.do",,,1
    
      ,"Pend�ncias Para Confer�ncia", "./listaDespesaCustasEntrada.do?tipoDespesa=despesascustas",,,1
    
    ])
  

  
    addmenu(
    menu=["Manuten��o",,,180,1,"",style1,,"",effect,,,,,,,,,,,,
    
      ,"CAP Contratados", "./listaContratadosCap.do",,,1
    
      ,"Despesas/Honor�rios", "./despesaHonorarios.do",,,1
    
      ,"Escrit�rio Contratado", "./pesquisaSociedadeCredenciada.do",,,1
    
      ,"Usu�rios de Escrit�rio Contratado", "./pesquisaUsuarioSociedadeCredenciada.do",,,1
    
      ,"Par�metros", "./listaParametro.do",,,1
    
      ,"Par�metros de Mem�ria de C�lculo", "./listaParametroMemoriaCalculo.do",,,1
    
      ,"Grupo Cont�bil", "./listaGrupoContabil.do",,,1
    
      ,"Grupo Cont�bil", "./listaGrupoContabil.do",,,1
    
      ,"Grupo Cont�bil", "./listaGrupoContabil.do",,,1
    
      ,"Par�metros de Integra��o TOTVS", "./parametroIntegracao.do?acao=init",,,1
    
      ,"Empreendimento", "./montaPesquisaEmpreendimento.do",,,1
    
      ,"Valor �ndice", "./montaPesquisaValorIndice.do",,,1
    
      ,"Tipo de Andamento", "./montaPesquisaTipoAndamento.do",,,1
    
      ,"Classifica��o/Distribui��o de Processos", "./montaClassificacaoDistribuicao.do",,,1
    
      ,"TESTE", "",,,1
    
      ,"Pedidos", "./pesquisaPedido.do",,,1
    
    ])
  
    addmenu(
    menu=["Relat�rios",,,180,1,"",style1,,"",effect,,,,,,,,,,,,
    
      ,"Empreendimento", "./prepareFiltroRelatorioEmpreendimento.do",,,1
    
      ,"Importar Planilha", "./importacaoPlanilha.do",,,1
    
      ,"Hist�rico de Importa��es", "./historicoImportacaoPlanilha.do",,,1
    
      ,"Geral de Provisionamento", "./relatorioProvisionamento.do?acao=init",,,1
    
      ,"Hist�rico de Provis�es", "./relatorioProvisionamento.do?acao=initHistorico",,,1
    
      ,"Emiss�o de Relat�rios Gerenciais", "./montaDadosRelatorioGerencial.do",,,1
    
      ,"Hist�rico de Planilha de Processos", "./montaRelatorioProcessosHistorico.do?acao=init",,,1
	  
	  ,"Pagamentos aos Escrit�rios Contratados", "./RelatorioPagamentos.html",,,1
    
    ])
  

  
    addmenu(
    menu=["Seguran�a",,,180,1,"",style1,,"",effect,,,,,,,,,,,,
    
      ,"Altera Senha", "./novaTrocaSenha.do",,,1
    
    ])
  


    addmenu(
    menu=["Vers�o",,,180,1,"",style1,,"",effect,,,,,,,,,,,,
      ,"Info", "./showVersion.do",,,1
    ])

addmenu(menu=["mainmenu",90,0,120,1,"left",style1,1,"center",,,1,,,,,,,,,,

  ,"Movimenta��o","show-menu=Movimenta��o",,"",1

  ,"Pagamentos","show-menu=Pagamentos",,"",1

  ,"Manuten��o","show-menu=Manuten��o",,"",1

  ,"Estat�sticas","show-menu=Estat�sticas",,"",1

  ,"Relat�rios","show-menu=Relat�rios",,"",1

  ,"Seguran�a","show-menu=Seguran�a",,"",1

  ,"Sair","sair.do",,"",1
  
  ,"Ajuda","paginas/helpNovo/HTML/index.html",,"",1
  
  ,"Vers�o","show-menu=Vers�o",,"",1
])


dumpmenus()


menu1=menus[1]; menu2=menus[2]; menu3=menus[3]; menu4=menus[4]; menu5=menus[5]; menu6=menus[6]; menu7=menus[7];


activateMenu = function(nav) {
    /* currentStyle restringe o JavaScript ao IE */
	if (document.all && document.getElementById(nav).currentStyle) {  
        var navroot = document.getElementById(nav);
        /* Encontra os LI dentro do menu */
        var lis=navroot.getElementsByTagName("LI");  
        for (i=0; i<lis.length; i++) {
           /* Caso o LI tiver outro n�vel */
            if(lis[i].lastChild.tagName=="UL"){
                /* Associa a fun��o ao LI */
             	lis[i].onmouseover=function() {	
                   /* Mostra o menu mais interno */
                   this.lastChild.style.display="block";
				   dropdowns('hidden');
                }
                lis[i].onmouseout=function() {                       
                   this.lastChild.style.display="none";
				   dropdowns('visible');
                }}}}}
function dropdowns(){ 

         var sel=document.getElementsByTagName("SELECT") 
         if (arguments.length>0){
         	for(i=0;i<sel.length;i++){ 
			sel[i].style.visibility=arguments[0];
			} 
         }
         else{
		 	for(i=0;i<sel.length;i++){ 
				if(sel[i].style.visibility!="hidden"){
					sel[i].style.visibility="hidden";
				}
				else{
					sel[i].style.visibility="visible";
				}
			} 
         }
}
window.onload= function(){activateMenu('menu');}