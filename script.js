var pontos = 0;
var ganhou1 = 0;
var ganhou2 = 0;
var ganhou3 = 0;
var ganhou4 = 0;
var ganhou5 = 0;
var ganhou6 = 0;
var ganhou7 = 0;
var ganhou8 = 0;
var ganhou9 = 0;
var ganhou10 = 0;
var ganhou11 = 0;
var ganhou12 = 0;
var ganhou13 = 0;
var ganhou14 = 0;
var ganhou15 = 0;

function Pergunta1() {
    alert("PERGUNTA 1: Arquitetura presente nos dispositivos (desktops, notebooks, celulares e tablets) hoje em dia.")
  }
function Pergunta2() {
    alert("PERGUNTA 2: Considerado o “cérebro” do computador.")
}
function Pergunta3() {
    alert("PERGUNTA 3: Ocorre devido a utilização indevida de instruções ou de dados (divisão por zero, acesso a uma posição de memória protegida, overflow...).")
}
function Pergunta4() {
    alert("PERGUNTA 4: Mecanismo pelo qual outros módulos interrompem o processamento normal da CPU.")
}
function Pergunta5() {
    alert("PERGUNTA 5: Apesar de existir um conjunto significativo, apenas 20% delas são realmente usadas por programas e sistemas operacionais. ")
}
function Pergunta6() {
    alert("PERGUNTA 6: Barramento que fornece informações adicionais como, por exemplo, se a operação é de leitura ou escrita.")
}
function Pergunta7() {
    alert("PERGUNTA 7: Realiza ações indicadas nas instruções, executando operações numéricas (aritméticas) e não numéricas (lógicas) além da preparação para desvios dos programas.")
}
function Pergunta8() {
    alert("PERGUNTA 8: Memória que traz os dados da memória principal, que estão sendo mais utilizados, para a memória rápida e mais próxima do processador.")
}
function Pergunta9() {
    alert("PERGUNTA 9: Via de comunicação por onde circulam os dados tratados pelo computador.")
}
function Pergunta10() {
    alert("PERGUNTA 10: Neste processador, como não existem instruções complexas, o compilador deve converter comandos complexos em diversas instruções simples que deem o mesmo resultado de operação.")
}

function resposta1() {
    if (ganhou1 == 1) {
        alert("Você já acertou.")
    } else {
         vP1_nvl1_1= P1_nvl1_1.value.toUpperCase();
         vP1_nvl1_2 = P1_nvl1_2.value.toUpperCase();
         vP1_nvl1_3 = P1_nvl1_3.value.toUpperCase();
         vP1_nvl1_4 = P1_nvl1_4.value.toUpperCase();
         vP1_nvl1_5 = P1_nvl1_5.value.toUpperCase();
         vP1_nvl1_6 = P1_nvl1_6.value.toUpperCase();
         vP1_nvl1_7 = P1_nvl1_7.value.toUpperCase();
         vP1_nvl1_8 = P1_nvl1_8.value.toUpperCase();
         vP1_nvl1_9 = P1_nvl1_9.value.toUpperCase();
         vP1_nvl1_10 = P1_nvl1_10.value.toUpperCase();

        if (vP1_nvl1_1 == 'V' && vP1_nvl1_2 == 'O' && vP1_nvl1_3 == 'N' && vP1_nvl1_4 == 'N' && vP1_nvl1_5 == 'E' && vP1_nvl1_6 == 'U' && vP1_nvl1_7 == 'M' && vP1_nvl1_8 == 'A' && vP1_nvl1_9 == 'N' && vP1_nvl1_10 == 'N' ) {
            document.getElementById("P1_nvl1_1").style.backgroundColor = "green";
            document.getElementById("P1_nvl1_2").style.backgroundColor = "green";
            document.getElementById("P1_nvl1_3").style.backgroundColor = "green";
            document.getElementById("P1_nvl1_4").style.backgroundColor = "green";
            document.getElementById("P1_nvl1_5").style.backgroundColor = "green";
            document.getElementById("P1_nvl1_6").style.backgroundColor = "green";
            document.getElementById("P1_nvl1_7").style.backgroundColor = "green";
            document.getElementById("P1_nvl1_8").style.backgroundColor = "green";
            document.getElementById("P1_nvl1_9").style.backgroundColor = "green";
            document.getElementById("P1_nvl1_10").style.backgroundColor = "green";
            alert("Acertou! +1 pontos")
            pontos += 1;
            ganhou1++;
            if (pontos == 10) {
                alert("Parabéns!! Você acertou tudo!");
                proxNvl();
            }

        } else {
            alert("Sua resposta não está certa")
        }
    }

}

function resposta2() {
    if (ganhou2 == 1) {
        alert("Você já acertou.")
    } else {
        vP2_nvl1_1 = P2_nvl1_1.value.toUpperCase();
        vP2_nvl1_2 = P2_nvl1_2.value.toUpperCase();
        vP2_nvl1_3 = P2_nvl1_3.value.toUpperCase();
        vP2_nvl1_4 = P2_nvl1_4.value.toUpperCase();
        vP2_nvl1_5 = P2_nvl1_5.value.toUpperCase();
        vP2_nvl1_6 = P2_nvl1_6.value.toUpperCase();
        vP2_nvl1_7 = P2_nvl1_7.value.toUpperCase();
        vP2_nvl1_8 = P2_nvl1_8.value.toUpperCase();
        vP2_nvl1_9 = P2_nvl1_9.value.toUpperCase();
        vP2_nvl1_10 = P2_nvl1_10.value.toUpperCase();
        vP2_nvl1_11 = P2_nvl1_11.value.toUpperCase();
        vP7_nvl1_2 = P7_nvl1_2.value.toUpperCase();

            if (vP2_nvl1_1 == 'P' && vP2_nvl1_2 == 'R' && vP2_nvl1_3 == 'O' && vP2_nvl1_4 == 'C' && vP2_nvl1_5 == 'E' && vP2_nvl1_6 == 'S' && vP2_nvl1_7 == 'S' && vP2_nvl1_8 == 'A' && vP2_nvl1_9 == 'D' && vP2_nvl1_10 == 'O' && vP2_nvl1_11 == 'R') {
                document.getElementById("P2_nvl1_1").style.backgroundColor = "green";
                document.getElementById("P2_nvl1_2").style.backgroundColor = "green";
                document.getElementById("P2_nvl1_3").style.backgroundColor = "green";
                document.getElementById("P2_nvl1_4").style.backgroundColor = "green";
                document.getElementById("P2_nvl1_5").style.backgroundColor = "green";
                document.getElementById("P2_nvl1_6").style.backgroundColor = "green";
                document.getElementById("P2_nvl1_7").style.backgroundColor = "green";
                document.getElementById("P2_nvl1_8").style.backgroundColor = "green";
                document.getElementById("P2_nvl1_9").style.backgroundColor = "green";
                document.getElementById("P2_nvl1_10").style.backgroundColor = "green";
                document.getElementById("P2_nvl1_11").style.backgroundColor = "green";
                if(vP7_nvl1_2=='L'){
                    resposta7();
                }

                alert("Acertou! +1 pontos")
                pontos += 1;
                ganhou2++;
                if (pontos == 10) {
                    alert("Parabéns!! Você acertou tudo!");
                    proxNvl();
                }
            } else {
                alert("Sua resposta não está certa")
            }
		}
    }
function resposta3() {
    if (ganhou3 == 1) {
        alert("Você já acertou.")
    } else {
        vP3_nvl1_1 = P3_nvl1_1.value.toUpperCase();
        vP3_nvl1_2 = P3_nvl1_2.value.toUpperCase();
        vP3_nvl1_3 = P3_nvl1_3.value.toUpperCase();
        vP3_nvl1_4 = P3_nvl1_4.value.toUpperCase();
        vP3_nvl1_5 = P3_nvl1_5.value.toUpperCase();
        vP3_nvl1_6 = P3_nvl1_6.value.toUpperCase();
        vP3_nvl1_7 = P3_nvl1_7.value.toUpperCase();

        if (vP3_nvl1_1 == 'E' && vP3_nvl1_2 == 'X' && vP3_nvl1_3 == 'C' && vP3_nvl1_4 == 'E' &&  vP3_nvl1_5 == 'Ç' && vP3_nvl1_6 == 'Ã' && vP3_nvl1_7 == 'O'){
            document.getElementById("P3_nvl1_1").style.backgroundColor = "green";
            document.getElementById("P3_nvl1_2").style.backgroundColor = "green";
            document.getElementById("P3_nvl1_3").style.backgroundColor = "green";
            document.getElementById("P3_nvl1_4").style.backgroundColor = "green";
            document.getElementById("P3_nvl1_5").style.backgroundColor = "green";
            document.getElementById("P3_nvl1_6").style.backgroundColor = "green";
            document.getElementById("P3_nvl1_7").style.backgroundColor = "green";
            alert("Acertou! +1 pontos")
            pontos += 1;
            ganhou3++;
            if (pontos == 10) {
                alert("Parabéns!! Você acertou tudo!");
                proxNvl();
            }
        } else {
            alert("Sua resposta não está certa")
        }
    }
}
function resposta4() {
    if (ganhou4 == 1) {
        alert("Você já acertou.")
    } else {
        vP4_nvl1_1 = P4_nvl1_1.value.toUpperCase();
        vP1_nvl1_9 = P1_nvl1_9.value.toUpperCase();
        vP4_nvl1_3 = P4_nvl1_3.value.toUpperCase();
        vP2_nvl1_5 = P2_nvl1_5.value.toUpperCase();
        vP4_nvl1_5 = P4_nvl1_5.value.toUpperCase();
        vP4_nvl1_6 = P4_nvl1_6.value.toUpperCase();
        vP4_nvl1_7 = P4_nvl1_7.value.toUpperCase();
        vP4_nvl1_8 = P4_nvl1_8.value.toUpperCase();
        vP3_nvl1_5 = P3_nvl1_5.value.toUpperCase();
        vP4_nvl1_10 = P4_nvl1_10.value.toUpperCase();
        vP4_nvl1_11 = P4_nvl1_11.value.toUpperCase();

        vP1_nvl1_8 = P1_nvl1_8.value.toUpperCase();
        vP2_nvl1_5 = P2_nvl1_5.value.toUpperCase();
        vP2_nvl1_4 = P2_nvl1_4.value.toUpperCase();
        vP3_nvl1_5 = P3_nvl1_5.value.toUpperCase();
        vP3_nvl1_4 = P3_nvl1_4.value.toUpperCase();

        if (vP1_nvl1_9=='N' && vP1_nvl1_8=='' ||vP2_nvl1_5=='E' && vP2_nvl1_4==''||vP3_nvl1_5=='C' && vP3_nvl1_4==''){
            if (vP2_nvl1_5=='E' && vP2_nvl1_4==''){
                       
                alert("Você deve informar a Resposta da Pergunta 1, a Resposta da Pergunta 2 e a resposta da Pergunta 3 para poder responder a Pergunta 4 ");
                if (vP1_nvl1_8==''){
                    document.getElementById('P1_nvl1_9').value  = '';  
                }
                if (P3_nvl1_4==''){
                    document.getElementById('P3_nvl1_5').value  = '';
                }
                if (P2_nvl1_5==''){
                    document.getElementById('P2_nvl1_5').value  = '';
                }
    }
            else{
                if(vP1_nvl1_9=='N' && vP1_nvl1_8==''){
                alert("Você deve informar a Resposta da Pergunta 1 para poder responder a Pergunta 4")
                if (vP1_nvl1_8==''){
                    document.getElementById('P1_nvl1_9').value  = '';  
                }
                if (P3_nvl1_4==''){
                    document.getElementById('P3_nvl1_5').value  = '';
                }
                if (P2_nvl1_4==''){
                    document.getElementById('P2_nvl1_5').value  = '';
                }}else{
                    }}}
            else{if(vP3_nvl1_5=='C' && vP3_nvl1_4==''){
                alert("Você deve informar a Resposta da Pergunta 3 para poder responder a Pergunta 4")
                if (vP1_nvl1_8==''){
                    document.getElementById('P1_nvl1_9').value  = '';  
                }
                if (P3_nvl1_4==''){
                    document.getElementById('P3_nvl1_5').value  = '';
                }
                if (P2_nvl1_5==''){
                    document.getElementById('P2_nvl1_5').value  = '';
                } }
    
        if (vP4_nvl1_1 == 'I' && vP1_nvl1_9 == 'N' && vP4_nvl1_3 == 'T' && vP2_nvl1_5 == 'E' && vP4_nvl1_5 == 'R' && vP4_nvl1_6 == 'R' && vP4_nvl1_7 == 'U' && vP4_nvl1_8 == 'P' && vP3_nvl1_5 == 'Ç' && vP4_nvl1_10 == 'Ã' && vP4_nvl1_11 == 'O') {
                document.getElementById("P4_nvl1_1").style.backgroundColor = "green";
                document.getElementById("P1_nvl1_9").style.backgroundColor = "green";
                document.getElementById("P4_nvl1_3").style.backgroundColor = "green";
                document.getElementById("P2_nvl1_5").style.backgroundColor = "green";
                document.getElementById("P4_nvl1_5").style.backgroundColor = "green";
                document.getElementById("P4_nvl1_6").style.backgroundColor = "green";
                document.getElementById("P4_nvl1_7").style.backgroundColor = "green";
                document.getElementById("P4_nvl1_8").style.backgroundColor = "green";
                document.getElementById("P3_nvl1_5").style.backgroundColor = "green";
                document.getElementById("P4_nvl1_10").style.backgroundColor = "green";
                document.getElementById("P4_nvl1_11").style.backgroundColor = "green";
            alert("Acertou! +1 pontos")
            pontos += 1;
            ganhou4++;
            if (pontos == 10) {
                alert("Parabéns!! Você acertou tudo!");
                proxNvl();
            }
        } else {
            alert("Sua resposta não está certa")
            }
        }
    }
}
function resposta5() {
    if (ganhou5 == 1) {
        alert("Você já acertou.")
    } else {
        vP5_nvl1_1 = P5_nvl1_1.value.toUpperCase();
        vP5_nvl1_2 = P5_nvl1_2.value.toUpperCase();
        vP5_nvl1_3 = P5_nvl1_3.value.toUpperCase();
        vP5_nvl1_4 = P5_nvl1_4.value.toUpperCase();
        vP5_nvl1_5 = P5_nvl1_5.value.toUpperCase();
        vP5_nvl1_6 = P5_nvl1_6.value.toUpperCase();
        vP5_nvl1_7 = P5_nvl1_7.value.toUpperCase();
        vP5_nvl1_8 = P5_nvl1_8.value.toUpperCase();
        vP5_nvl1_9 = P5_nvl1_9.value.toUpperCase();
        if (vP5_nvl1_9=='0' && vP5_nvl1_9==''){
            alert("Você deve informar a Resposta da Pergunta 5 para poder responder a Pergunta 6")
            document.getElementById('P5_nvl1_9').value  = '';
        }
        if (vP5_nvl1_1 == 'R' && vP5_nvl1_2 == 'E' && vP5_nvl1_3 == 'G' && vP5_nvl1_4 == 'R' && vP5_nvl1_5 == 'A' && vP5_nvl1_6 == '8' && vP5_nvl1_7 == '0' && vP5_nvl1_8 == '2' && vP5_nvl1_9 == '0') {
                document.getElementById("P5_nvl1_1").style.backgroundColor = "green";
                document.getElementById("P5_nvl1_2").style.backgroundColor = "green";
                document.getElementById("P5_nvl1_3").style.backgroundColor = "green";
                document.getElementById("P5_nvl1_4").style.backgroundColor = "green";
                document.getElementById("P5_nvl1_5").style.backgroundColor = "green";
                document.getElementById("P5_nvl1_6").style.backgroundColor = "green";
                document.getElementById("P5_nvl1_7").style.backgroundColor = "green";
                document.getElementById("P5_nvl1_8").style.backgroundColor = "green";
                document.getElementById("P5_nvl1_9").style.backgroundColor = "green";
            alert("Acertou! +1 pontos")
            pontos += 1;
            ganhou5++;
            if (pontos == 10) {
                alert("Parabéns!! Você acertou tudo!");
                proxNvl();
            }
        } else {
            alert("Sua resposta não está certa")
        }
    }
}
function resposta6() {
    if (ganhou6 == 1 ) {
        alert("Você já acertou.")
    } else {
        vP6_nvl1_1 = P6_nvl1_1.value.toUpperCase();
        vP6_nvl1_2 = P6_nvl1_2.value.toUpperCase();
        vP6_nvl1_3 = P6_nvl1_3.value.toUpperCase();
        vP6_nvl1_4 = P6_nvl1_4.value.toUpperCase();
        vP6_nvl1_5 = P6_nvl1_5.value.toUpperCase();
        vP6_nvl1_6 = P6_nvl1_6.value.toUpperCase();
        vP6_nvl1_7 = P6_nvl1_7.value.toUpperCase();
        vP6_nvl1_8 = P5_nvl1_2.value.toUpperCase();

        if(vP6_nvl1_8=='E'&& vP6_nvl1_7==''){

        }else{
        if (vP6_nvl1_1 == 'C' && vP6_nvl1_2 == 'O' && vP6_nvl1_3 == 'N' && vP6_nvl1_4 =='T' && vP6_nvl1_5 =='R' && vP6_nvl1_6 == 'O' && vP6_nvl1_7 =='L' && vP6_nvl1_8 =='E') {
                document.getElementById("P6_nvl1_1").style.backgroundColor = "green";
                document.getElementById("P6_nvl1_2").style.backgroundColor = "green";
                document.getElementById("P6_nvl1_3").style.backgroundColor = "green";
                document.getElementById("P6_nvl1_4").style.backgroundColor = "green";
                document.getElementById("P6_nvl1_5").style.backgroundColor = "green";
                document.getElementById("P6_nvl1_6").style.backgroundColor = "green";
                document.getElementById("P6_nvl1_7").style.backgroundColor = "green";
                document.getElementById("P5_nvl1_2").style.backgroundColor = "green";
            alert("Acertou! +1 pontos")
            pontos +=1;
            ganhou6++;
            if (pontos == 10) {
                alert("Parabéns!! Você acertou tudo!");
                proxNvl();
            }
        } else {
            alert("Sua resposta não está certa")
        }
    }
    }
}
function resposta7() {
    if (ganhou7 == 1) {
        alert("Você já acertou.")
    } else {
        vP7_nvl1_1 = P7_nvl1_1.value.toUpperCase();
        vP7_nvl1_2 = P7_nvl1_2.value.toUpperCase();
        vP7_nvl1_3 = P2_nvl1_8.value.toUpperCase();
        if(vP7_nvl1_3==''){
            alert("Você deve informar a Resposta da Pergunta 2 para poder responder a Pergunta 7")
        }else{
        if (vP7_nvl1_1 == 'U' && vP7_nvl1_2 == 'L' && vP7_nvl1_3 == 'A') {
                document.getElementById("P7_nvl1_1").style.backgroundColor = "green";
                document.getElementById("P7_nvl1_2").style.backgroundColor = "green";
                document.getElementById("P2_nvl1_8").style.backgroundColor = "green";
            alert("Acertou! +1 pontos")
            pontos += 1;
            ganhou7++;
            if (pontos == 10) {
                alert("Parabéns!! Você acertou tudo!");
                proxNvl();
            }
        } else {
            alert("Sua resposta não está certa")
        }
    }
}
}
function resposta8() {
    if (ganhou8 == 1) {
        alert("Você já acertou.")
    } else {
        vP8_nvl1_1 = P8_nvl1_1.value.toUpperCase();
        vP8_nvl1_2 = P8_nvl1_2.value.toUpperCase();
        vP8_nvl1_3 = P8_nvl1_3.value.toUpperCase();
        vP8_nvl1_4 = P8_nvl1_4.value.toUpperCase();
        vP8_nvl1_5 = P8_nvl1_5.value.toUpperCase();
        if (vP8_nvl1_1 == 'C' && vP8_nvl1_2 == 'A' && vP8_nvl1_3 == 'C' && vP8_nvl1_4 == 'H' && vP8_nvl1_5 == 'E') {
                document.getElementById("P8_nvl1_1").style.backgroundColor = "green";
                document.getElementById("P8_nvl1_2").style.backgroundColor = "green";
                document.getElementById("P8_nvl1_3").style.backgroundColor = "green";
                document.getElementById("P8_nvl1_4").style.backgroundColor = "green";
                document.getElementById("P8_nvl1_5").style.backgroundColor = "green";
            alert("Acertou! +1 pontos")
            pontos += 1;
            ganhou8++;
            if (pontos ==10) {
                alert("Parabéns!! Você acertou tudo!");
                proxNvl();
            }
        } else {
            alert("Sua resposta não está certa")
        }
    }
}


function resposta9() {
    if (ganhou9 == 1) {
        alert("Você já acertou.")
    } else {
        vP9_nvl1_1 = P9_nvl1_1.value.toUpperCase();
        vP9_nvl1_2 = P9_nvl1_2.value.toUpperCase();
        vP9_nvl1_3 = P9_nvl1_3.value.toUpperCase();
        vP9_nvl1_4 = P9_nvl1_4.value.toUpperCase();
        vP9_nvl1_5 = P5_nvl1_5.value.toUpperCase();
        vP9_nvl1_6 = P9_nvl1_6.value.toUpperCase();
        vP9_nvl1_7 = P9_nvl1_7.value.toUpperCase();
        vP9_nvl1_8 = P9_nvl1_8.value.toUpperCase();
        vP9_nvl1_9 = P9_nvl1_9.value.toUpperCase();
        vP9_nvl1_10 = P2_nvl1_10.value.toUpperCase();
        if (vP9_nvl1_9=='T' && vP9_nvl1_10==''){
            alert("Você deve informar a Resposta da Pergunta 2 para poder responder a Pergunta 9")
                    document.getElementById("P9_nvl1_1").value = '';
                    document.getElementById("P9_nvl1_2").value= '';
                    document.getElementById("P9_nvl1_3").value= '';
                    document.getElementById("P9_nvl1_4").value= '';
                    document.getElementById("P5_nvl1_5").value= '';
                    document.getElementById("P9_nvl1_6").value= '';
                    document.getElementById("P9_nvl1_7").value= '';
                    document.getElementById("P9_nvl1_8").value= '';
                    document.getElementById("P9_nvl1_9").value= '';
        }else{
            if (vP9_nvl1_1 == 'B' && vP9_nvl1_2 == 'A' && vP9_nvl1_3 == 'R' && vP9_nvl1_4 == 'R' && vP9_nvl1_5 == 'A' && vP9_nvl1_6 == 'M' && vP9_nvl1_7 == 'E' && (vP9_nvl1_8 == 'N' && (vP9_nvl1_9 == 'T' && vP9_nvl1_10 == 'O'))) {
                    document.getElementById("P9_nvl1_1").style.backgroundColor = "green";
                    document.getElementById("P9_nvl1_2").style.backgroundColor = "green";
                    document.getElementById("P9_nvl1_3").style.backgroundColor = "green";
                    document.getElementById("P9_nvl1_4").style.backgroundColor = "green";
                    document.getElementById("P5_nvl1_5").style.backgroundColor = "green";
                    document.getElementById("P9_nvl1_6").style.backgroundColor = "green";
                    document.getElementById("P9_nvl1_7").style.backgroundColor = "green";
                    document.getElementById("P9_nvl1_8").style.backgroundColor = "green";
                    document.getElementById("P9_nvl1_9").style.backgroundColor = "green";
                    document.getElementById("P2_nvl1_10").style.backgroundColor = "green";
                alert("Acertou! +1 pontos")
                pontos += 1;
                ganhou9++;
                if (pontos == 10) {
                    alert("Parabéns!! Você acertou tudo!");
                    proxNvl();
                }
            } else {
                alert("Sua resposta não está certa")
            }
        }
    }
}
function resposta10() {
    if (ganhou10 == 1) {
        alert("Você já acertou.")
    } else {
        vP10_nvl1_1 = P2_nvl1_11.value.toUpperCase();
        vP10_nvl1_2 = P10_nvl1_2.value.toUpperCase();
        vP10_nvl1_3 = P10_nvl1_3.value.toUpperCase();
        vP10_nvl1_4 = P8_nvl1_3.value.toUpperCase();
        if (vP10_nvl1_4=='C'&& vP10_nvl1_3!=''){
        if (vP10_nvl1_1 == 'R' && vP10_nvl1_2 == 'I' && vP10_nvl1_3 == 'S' && vP10_nvl1_4 == 'C') {
                document.getElementById("P2_nvl1_11").style.backgroundColor = "green";
                document.getElementById("P10_nvl1_2").style.backgroundColor = "green";
                document.getElementById("P10_nvl1_3").style.backgroundColor = "green";
                document.getElementById("P8_nvl1_3").style.backgroundColor = "green";
            alert("Acertou! +1 pontos")
            pontos += 1;
            ganhou10++;
            if (pontos == 10) {
                alert("Parabéns!! Você acertou tudo!");
                proxNvl();
            }
        } else {
            alert("Sua resposta não está certa")
        }
    }
    }
}

function proxNvl(){
    window.location.href = "index_nvl2.html";
}

function Regras(){
    alert("REGRAS DO JOGO:" +
            "O jogo é dividido em 2 níveis, é necessário responder todas as perguntas para passar para o nível seguinte." +
            "As respostas são validadas ao completar a resposta"+
            "As perguntas podem ser vistas clicando no numero da cruzada!")
}