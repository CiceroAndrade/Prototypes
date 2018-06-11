   addmenu(
    menu=["Movimentação",,,180,1,"",style1,,"",effect,,,,,,,,,,,,
    
      ,"Tela de Entrada", "./Entrada.html",,,1
    
      ,"Cadastro de Pessoas", "./pesquisaPessoa.do?act=init",,,1
    
      ,"Pesquisa de Ação", "./PesquisaAcao.html",,,1
    
      ,"Pesquisa de Ação Avançada", "./montaPesquisaAcaoJudicial.do",,,1
    
      ,"Cadastro de Ação", "./CadastroAcaoProcesso.html",,,1
    
      ,"Pesquisa de Processo - CAP", "./montaPesquisaAcaoCap.do",,,1
    
      ,"Novo Processo - CAP", "./cadastroAcaoCap.do?registroNovo=S",,,1
    
      ,"Pesquisa de Processo Administrativo", "./montaPesquisaProcessoAdmin.do",,,1
    
      ,"Cadastro de Processo Administrativo", "./montaInclusaoProcessoAdmin.do?act=init",,,1
    
      ,"Publicações", "./montaPesquisaPublicacao.do",,,1
    
      ,"Tramitações em Lote", "./montaDadosTramitacaoEmLote.do?act=novoLote",,,1
    
      ,"Atualiza Valor Ação", "./montaAtualizacaoValorAcaoJudicial.do",,,1
    
      ,"Andamentos em Lote", "./montaDadosAndamentoEmLote.do?act=init",,,1
    
      ,"Cadastro de Ação Simplificado", "./montaDadosAcaoJudicialSimplificada.do?act=init",,,1
    
      ,"Pesquisa de Ação Simplificada", "./montaPesquisaAcaoJudicialSimplificada.do?act=init",,,1
	  
	  ,"Cadastro de Bloqueios", "./ConsultaBloqueios.html",,,1
    
    ])
  

  
    addmenu(
    menu=["Pagamentos",,,180,1,"",style1,,"",effect,,,,,,,,,,,,
    
      ,"Pesquisa de Solicitação Autônoma", "./pesquisaSolicitacaoAutonoma.do",,,1
    
      ,"Pesquisa Despesas e Honorários", "./pesquisaDespesasHonorarios.do",,,1
    
      ,"Pesquisa de Solicitações de Pagamento/Reembolso", "./pesquisaSolicitacaoPagamento.do",,,1
    
      ,"Pendências Para Conferência", "./listaDespesaCustasEntrada.do?tipoDespesa=despesascustas",,,1
    
    ])
  

  
    addmenu(
    menu=["Manutenção",,,180,1,"",style1,,"",effect,,,,,,,,,,,,
    
      ,"CAP Contratados", "./listaContratadosCap.do",,,1
    
      ,"Despesas/Honorários", "./despesaHonorarios.do",,,1
    
      ,"Escritório Contratado", "./pesquisaSociedadeCredenciada.do",,,1
    
      ,"Usuários de Escritório Contratado", "./pesquisaUsuarioSociedadeCredenciada.do",,,1
    
      ,"Parâmetros", "./listaParametro.do",,,1
    
      ,"Parâmetros de Memória de Cálculo", "./listaParametroMemoriaCalculo.do",,,1
    
      ,"Grupo Contábil", "./listaGrupoContabil.do",,,1
    
      ,"Grupo Contábil", "./listaGrupoContabil.do",,,1
    
      ,"Grupo Contábil", "./listaGrupoContabil.do",,,1
    
      ,"Parâmetros de Integração TOTVS", "./parametroIntegracao.do?acao=init",,,1
    
      ,"Empreendimento", "./montaPesquisaEmpreendimento.do",,,1
    
      ,"Valor Índice", "./montaPesquisaValorIndice.do",,,1
    
      ,"Tipo de Andamento", "./montaPesquisaTipoAndamento.do",,,1
    
      ,"Classificação/Distribuição de Processos", "./montaClassificacaoDistribuicao.do",,,1
    
      ,"TESTE", "",,,1
    
      ,"Pedidos", "./pesquisaPedido.do",,,1
    
    ])
  
    addmenu(
    menu=["Relatórios",,,180,1,"",style1,,"",effect,,,,,,,,,,,,
    
      ,"Empreendimento", "./prepareFiltroRelatorioEmpreendimento.do",,,1
    
      ,"Importar Planilha", "./importacaoPlanilha.do",,,1
    
      ,"Histórico de Importações", "./historicoImportacaoPlanilha.do",,,1
    
      ,"Geral de Provisionamento", "./relatorioProvisionamento.do?acao=init",,,1
    
      ,"Histórico de Provisões", "./relatorioProvisionamento.do?acao=initHistorico",,,1
    
      ,"Emissão de Relatórios Gerenciais", "./montaDadosRelatorioGerencial.do",,,1
    
      ,"Histórico de Planilha de Processos", "./montaRelatorioProcessosHistorico.do?acao=init",,,1
	  
	  ,"Pagamentos aos Escritórios Contratados", "./RelatorioPagamentos.html",,,1
    
    ])
  

  
    addmenu(
    menu=["Segurança",,,180,1,"",style1,,"",effect,,,,,,,,,,,,
    
      ,"Altera Senha", "./novaTrocaSenha.do",,,1
    
    ])
  


    addmenu(
    menu=["Versão",,,180,1,"",style1,,"",effect,,,,,,,,,,,,
      ,"Info", "./showVersion.do",,,1
    ])

addmenu(menu=["mainmenu",90,0,120,1,"left",style1,1,"center",,,1,,,,,,,,,,

  ,"Movimentação","show-menu=Movimentação",,"",1

  ,"Pagamentos","show-menu=Pagamentos",,"",1

  ,"Manutenção","show-menu=Manutenção",,"",1

  ,"Estatísticas","show-menu=Estatísticas",,"",1

  ,"Relatórios","show-menu=Relatórios",,"",1

  ,"Segurança","show-menu=Segurança",,"",1

  ,"Sair","sair.do",,"",1
  
  ,"Ajuda","paginas/helpNovo/HTML/index.html",,"",1
  
  ,"Versão","show-menu=Versão",,"",1
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
           /* Caso o LI tiver outro nível */
            if(lis[i].lastChild.tagName=="UL"){
                /* Associa a função ao LI */
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