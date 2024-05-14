var nvl2pontos = 0;
var nvl2ganhou1 = 0;
var nvl2ganhou2 = 0;
var nvl2ganhou3 = 0;
var nvl2ganhou4 = 0;
var nvl2ganhou5 = 0;
var nvl2ganhou6 = 0;
var nvl2ganhou7 = 0;
var nvl2ganhou8 = 0;
var nvl2ganhou9 = 0;
var nvl2ganhou10 = 0;

function nvl2dica1() {
    alert("PERGUNTA 1: Várias unidades de processamento executando programas de forma cooperativa, com controle centralizado ou não.")
}
function nvl2dica2() {
    alert("PERGUNTA 2: Um programa quando armazenado em ROM, recebe o nome de ______.")
}
function nvl2dica3() {
    alert("PERGUNTA 3: Registrador que guarda a instrução atual.")
}
function nvl2dica4() {
    alert("PERGUNTA 4: A localidade _______ está relacionada com a localidade sequencial, pela qual elementos em posições consecutivas da memória tem chance de serem acessadas em sequência.")
}
function nvl2dica5() {
    alert("PERGUNTA 5: Registrador que recebe o resultado da instrução.")
}
function nvl2dica6() {
    alert("PERGUNTA 6: Neste tipo de localidade de referência, os itens referenciados no passado têm maior chance de serem novamente referenciados em um futuro próximo.")
}
function nvl2dica7() {
    alert("PERGUNTA 7: Método que consiste em dividir o processo de execução da instrução em partes. Visa aproveitar as unidades – que a princípio ficariam ociosas – para começarem a executar a próxima instrução do programa.")
}
function nvl2dica8() {
    alert("PERGUNTA 8: lei que é caracterizada pela quantidade de transistores em um chip dobrar a cada 18 meses.")
}
function nvl2dica9() {
    alert("PERGUNTA 9: Neste processador, uma instrução complexa equivale a várias microinstruções presentes no microcódigo do processador.")
}
function nvl2dica10() {
    alert("PERGUNTA 10: Faz a interface entre o hardware e as funções de mais alto nível do sistema operacional.")
}

function nvl2resposta1() {
    if (nvl2ganhou1 == 1) {
        alert("Você já acertou.")
    } else {
		var PP1_nvl2_1  = P1_nvl2_1.value.toUpperCase();
		var PP1_nvl2_2  = P1_nvl2_2.value.toUpperCase();
		var PP1_nvl2_3  = P1_nvl2_3.value.toUpperCase();
		var PP1_nvl2_4  = P1_nvl2_4.value.toUpperCase();
		var PP1_nvl2_5  = P1_nvl2_5.value.toUpperCase();
		var PP1_nvl2_6  = P1_nvl2_6.value.toUpperCase();
		var PP1_nvl2_7  = P1_nvl2_7.value.toUpperCase();
		var PP1_nvl2_8  = P1_nvl2_8.value.toUpperCase();
		var PP1_nvl2_9  = P1_nvl2_9.value.toUpperCase();
		var PP1_nvl2_10 = P1_nvl2_10.value.toUpperCase();
		var PP1_nvl2_11 = P1_nvl2_11.value.toUpperCase();
		var PP1_nvl2_12 = P1_nvl2_12.value.toUpperCase();
		var PP1_nvl2_13 = P1_nvl2_13.value.toUpperCase();
		var PP1_nvl2_14 = P1_nvl2_14.value.toUpperCase();
		var PP1_nvl2_15 = P1_nvl2_15.value.toUpperCase();

		if (PP1_nvl2_1 == 'M' && PP1_nvl2_2 == 'A' && PP1_nvl2_3 == 'Q' && PP1_nvl2_4 == 'U' && PP1_nvl2_5 == 'I' && PP1_nvl2_6 == 'N' && PP1_nvl2_7 == 'A' && PP1_nvl2_8 == 'P' && PP1_nvl2_9 == 'A' && PP1_nvl2_10 == 'R' && PP1_nvl2_11 == 'A' && PP1_nvl2_12 == 'L' && PP1_nvl2_13 == 'E' && PP1_nvl2_14 == 'L' && PP1_nvl2_15 == 'A'){
                document.getElementById("P1_nvl2_1").style.backgroundColor = "green";
                document.getElementById("P1_nvl2_2").style.backgroundColor = "green";
                document.getElementById("P1_nvl2_3").style.backgroundColor = "green";
                document.getElementById("P1_nvl2_4").style.backgroundColor = "green";
                document.getElementById("P1_nvl2_5").style.backgroundColor = "green";
                document.getElementById("P1_nvl2_6").style.backgroundColor = "green";
                document.getElementById("P1_nvl2_7").style.backgroundColor = "green";
                document.getElementById("P1_nvl2_8").style.backgroundColor = "green";
                document.getElementById("P1_nvl2_9").style.backgroundColor = "green";
                document.getElementById("P1_nvl2_10").style.backgroundColor = "green";
                document.getElementById("P1_nvl2_11").style.backgroundColor = "green";
                document.getElementById("P1_nvl2_12").style.backgroundColor = "green";
                document.getElementById("P1_nvl2_13").style.backgroundColor = "green";
                document.getElementById("P1_nvl2_14").style.backgroundColor = "green";
                document.getElementById("P1_nvl2_15").style.backgroundColor = "green";
            
            alert("Acertou! +1 ponto")
            nvl2pontos += 1;
            nvl2ganhou1++;
            if (nvl2pontos == 10) {
                alert("Parabéns!! Você acertou tudo!")
            }
        } else {
            alert("Errou")
        }
    }

}
function nvl2resposta2() {
    if (nvl2ganhou2 == 1) {
        alert("Você já acertou.")
    } else {
		PP2_nvl2_1 = P2_nvl2_1.value.toUpperCase();
		PP2_nvl2_2 = P2_nvl2_2.value.toUpperCase();
		PP2_nvl2_3 = P2_nvl2_3.value.toUpperCase();
		PP2_nvl2_4 = P2_nvl2_4.value.toUpperCase();
		PP2_nvl2_5 = P2_nvl2_5.value.toUpperCase();
		PP2_nvl2_6 = P1_nvl2_2.value.toUpperCase();
		PP2_nvl2_7 = P2_nvl2_7.value.toUpperCase();
		PP2_nvl2_8 = P2_nvl2_8.value.toUpperCase();

        if (PP2_nvl2_1 == 'F' && PP2_nvl2_2 == 'I' && PP2_nvl2_3 == 'R' && PP2_nvl2_4 == 'M' && PP2_nvl2_5 == 'W' && PP2_nvl2_6 == 'A' && PP2_nvl2_7 == 'R' && PP2_nvl2_8 == 'E') {
            document.getElementById("P2_nvl2_1").style.backgroundColor = "green";
            document.getElementById("P2_nvl2_2").style.backgroundColor = "green";
            document.getElementById("P2_nvl2_3").style.backgroundColor = "green";
            document.getElementById("P2_nvl2_4").style.backgroundColor = "green";
            document.getElementById("P2_nvl2_5").style.backgroundColor = "green";
            document.getElementById("P1_nvl2_2").style.backgroundColor = "green";
            document.getElementById("P2_nvl2_7").style.backgroundColor = "green";
            document.getElementById("P2_nvl2_8").style.backgroundColor = "green";
            alert("Acertou! +1 ponto")
            nvl2pontos += 1;
            nvl2ganhou2++;
            if (nvl2pontos == 10) {
                alert("Parabéns!! Você acertou tudo!")
            }
        } else {
            alert("Errou")
        }
    }
}
function nvl2resposta3() {
    if (nvl2ganhou3 == 1) {
        alert("Você já acertou.")
    } else {
		PP3_nvl2_1 = P1_nvl2_5.value.toUpperCase(); 
		PP3_nvl2_2 = P3_nvl2_2.value.toUpperCase(); 
		PP3_nvl2_3 = P3_nvl2_3.value.toUpperCase(); 
		PP3_nvl2_4 = P3_nvl2_4.value.toUpperCase(); 
		PP3_nvl2_5 = P3_nvl2_5.value.toUpperCase(); 
		PP3_nvl2_6 = P3_nvl2_6.value.toUpperCase(); 
		PP3_nvl2_7 = P3_nvl2_7.value.toUpperCase(); 
		PP3_nvl2_8 = P3_nvl2_8.value.toUpperCase(); 
		PP3_nvl2_9 = P3_nvl2_9.value.toUpperCase();

        if (PP3_nvl2_1 == 'I' && PP3_nvl2_2 == 'N' && PP3_nvl2_3 == 'S' && PP3_nvl2_4 == 'T' && PP3_nvl2_5 == 'R' && PP3_nvl2_6 == 'U' && (PP3_nvl2_7 == 'Ç' || PP3_nvl2_7 == 'C') && (PP3_nvl2_8 == 'Ã' || PP3_nvl2_8 == 'A') && PP3_nvl2_9 == 'O') {
                document.getElementById("P1_nvl2_5").style.backgroundColor = "green";
                document.getElementById("P3_nvl2_2").style.backgroundColor = "green";
                document.getElementById("P3_nvl2_3").style.backgroundColor = "green";
                document.getElementById("P3_nvl2_4").style.backgroundColor = "green";
                document.getElementById("P3_nvl2_5").style.backgroundColor = "green";
                document.getElementById("P3_nvl2_6").style.backgroundColor = "green";
                document.getElementById("P3_nvl2_7").style.backgroundColor = "green";
                document.getElementById("P3_nvl2_8").style.backgroundColor = "green";
                document.getElementById("P3_nvl2_9").style.backgroundColor = "green"
            alert("Acertou! +1 ponto")
            nvl2pontos += 1;
            nvl2ganhou3++;
            if (nvl2pontos == 10) {
                alert("Parabéns!! Você acertou tudo!")
            }
        } else {
            alert("Errou")
        }
    }
}
function nvl2resposta4() {
    if (nvl2ganhou4 == 1) {
        alert("Você já acertou.")
    } else {
		PP4_nvl2_1 = P4_nvl2_1.value.toUpperCase();
		PP4_nvl2_2 = P4_nvl2_2.value.toUpperCase();
		PP4_nvl2_3 = P4_nvl2_3.value.toUpperCase();
		PP4_nvl2_4 = P4_nvl2_4.value.toUpperCase();
		PP4_nvl2_5 = P4_nvl2_5.value.toUpperCase();
		PP4_nvl2_6 = P4_nvl2_6.value.toUpperCase();
		PP4_nvl2_7 = P4_nvl2_7.value.toUpperCase();
		PP4_nvl2_8 = P4_nvl2_8.value.toUpperCase();

        if (PP4_nvl2_1 == 'E' && PP4_nvl2_2 == 'S' && PP4_nvl2_3 == 'P' && PP4_nvl2_4 == 'A' && PP4_nvl2_5 == 'C' && PP4_nvl2_6 == 'I' && PP4_nvl2_7 == 'A' && PP4_nvl2_8 == 'L') {
                document.getElementById("P4_nvl2_1").style.backgroundColor = "green";
                document.getElementById("P4_nvl2_2").style.backgroundColor = "green";
                document.getElementById("P4_nvl2_3").style.backgroundColor = "green";
                document.getElementById("P4_nvl2_4").style.backgroundColor = "green";
                document.getElementById("P4_nvl2_5").style.backgroundColor = "green";
                document.getElementById("P4_nvl2_6").style.backgroundColor = "green";
                document.getElementById("P4_nvl2_7").style.backgroundColor = "green";
                document.getElementById("P4_nvl2_8").style.backgroundColor = "green";
            alert("Acertou! +1 ponto")
            nvl2pontos += 1;
            nvl2ganhou4++;
            if (nvl2pontos == 10) {
                alert("Parabéns!! Você acertou tudo!")
            }
        } else {
            alert("Errou")
        }
    }
}
function nvl2resposta5() {
    if (nvl2ganhou5 == 1) {
        alert("Você já acertou.")
    } else {
		PP5_nvl2_1  = P4_nvl2_4.value.toUpperCase();
		PP5_nvl2_2  = P5_nvl2_2.value.toUpperCase();
		PP5_nvl2_3  = P5_nvl2_3.value.toUpperCase();
		PP5_nvl2_4  = P5_nvl2_4.value.toUpperCase();
		PP5_nvl2_5  = P5_nvl2_5.value.toUpperCase();
		PP5_nvl2_6  = P5_nvl2_6.value.toUpperCase();
		PP5_nvl2_7  = P1_nvl2_9.value.toUpperCase();
		PP5_nvl2_8  = P5_nvl2_8.value.toUpperCase();
		PP5_nvl2_9  = P5_nvl2_9.value.toUpperCase();
		PP5_nvl2_10 = P5_nvl2_10.value.toUpperCase();

        if (PP5_nvl2_1 == 'A' && PP5_nvl2_2 == 'C' && PP5_nvl2_3 == 'U' && PP5_nvl2_4 == 'M' && PP5_nvl2_5 == 'U' && PP5_nvl2_6 == 'L' && PP5_nvl2_7 == 'A' && PP5_nvl2_8 == 'D' && PP5_nvl2_9 == 'O' && PP5_nvl2_10 == 'R') {
                document.getElementById("P4_nvl2_4").style.backgroundColor = "green";
                document.getElementById("P5_nvl2_2").style.backgroundColor = "green";
                document.getElementById("P5_nvl2_3").style.backgroundColor = "green";
                document.getElementById("P5_nvl2_4").style.backgroundColor = "green";
                document.getElementById("P5_nvl2_5").style.backgroundColor = "green";
                document.getElementById("P5_nvl2_6").style.backgroundColor = "green";
                document.getElementById("P1_nvl2_9").style.backgroundColor = "green";
                document.getElementById("P5_nvl2_8").style.backgroundColor = "green";
                document.getElementById("P5_nvl2_9").style.backgroundColor = "green";
                document.getElementById("P5_nvl2_10").style.backgroundColor = "green";
            alert("Acertou! +1 ponto")
            nvl2pontos += 1;
            nvl2ganhou5++;
            if (nvl2pontos == 10) {
                alert("Parabéns!! Você acertou tudo!")
            }
        } else {
            alert("Errou")
        }
    }
}
function nvl2resposta6() {
    if (nvl2ganhou6 == 1) {
        alert("Você já acertou.")
    } else {
		PP6_nvl2_1 = P6_nvl2_1.value.toUpperCase();
		PP6_nvl2_2 = P6_nvl2_2.value.toUpperCase();
		PP6_nvl2_3 = P6_nvl2_3.value.toUpperCase();
		PP6_nvl2_4 = P6_nvl2_4.value.toUpperCase();
		PP6_nvl2_5 = P6_nvl2_5.value.toUpperCase();
		PP6_nvl2_6 = P6_nvl2_6.value.toUpperCase();
		PP6_nvl2_7 = P6_nvl2_7.value.toUpperCase();
		PP6_nvl2_8 = P6_nvl2_8.value.toUpperCase();

        if (PP6_nvl2_1 == 'T' && PP6_nvl2_2 == 'E' && PP6_nvl2_3 == 'M' && PP6_nvl2_4 == 'P' && PP6_nvl2_5 == 'O' && PP6_nvl2_6 == 'R' && PP6_nvl2_7 == 'A' && PP6_nvl2_8 == 'L') {
                document.getElementById("P6_nvl2_1").style.backgroundColor = "green";
                document.getElementById("P6_nvl2_2").style.backgroundColor = "green";
                document.getElementById("P6_nvl2_3").style.backgroundColor = "green";
                document.getElementById("P6_nvl2_4").style.backgroundColor = "green";
                document.getElementById("P6_nvl2_5").style.backgroundColor = "green";
                document.getElementById("P6_nvl2_6").style.backgroundColor = "green";
                document.getElementById("P6_nvl2_7").style.backgroundColor = "green";
                document.getElementById("P6_nvl2_8").style.backgroundColor = "green";
            alert("Acertou! +1 ponto")
            nvl2pontos += 1;
            nvl2ganhou6++;
            if (nvl2pontos == 10) {
                alert("Parabéns!! Você acertou tudo!")
            }
        } else {
            alert("Errou")
        }
    }
}
function nvl2resposta7() {
    if (nvl2ganhou7 == 1) {
        alert("Você já acertou.")
    } else {
		PP7_nvl2_1 = P7_nvl2_1.value.toUpperCase();
		PP7_nvl2_2 = P7_nvl2_2.value.toUpperCase();
		PP7_nvl2_3 = P7_nvl2_3.value.toUpperCase();
		PP7_nvl2_4 = P7_nvl2_4.value.toUpperCase();
		PP7_nvl2_5 = P7_nvl2_5.value.toUpperCase();
		PP7_nvl2_6 = P7_nvl2_6.value.toUpperCase();
		PP7_nvl2_7 = P7_nvl2_7.value.toUpperCase();
		PP7_nvl2_8 = P7_nvl2_8.value.toUpperCase();

        if (PP7_nvl2_1 == 'P' && PP7_nvl2_2 == 'I' && PP7_nvl2_3 == 'P' && PP7_nvl2_4 == 'E' && PP7_nvl2_5 == 'L' && PP7_nvl2_6 == 'I' && PP7_nvl2_7 == 'N' && PP7_nvl2_8 == 'E') {
                document.getElementById("P7_nvl2_1").style.backgroundColor = "green";
                document.getElementById("P7_nvl2_2").style.backgroundColor = "green";
                document.getElementById("P7_nvl2_3").style.backgroundColor = "green";
                document.getElementById("P7_nvl2_4").style.backgroundColor = "green";
                document.getElementById("P7_nvl2_5").style.backgroundColor = "green";
                document.getElementById("P7_nvl2_6").style.backgroundColor = "green";
                document.getElementById("P7_nvl2_7").style.backgroundColor = "green";
                document.getElementById("P7_nvl2_8").style.backgroundColor = "green";
            alert("Acertou! +1 ponto")
            nvl2pontos += 1;
            nvl2ganhou7++;
            if (nvl2pontos == 10) {
                alert("Parabéns!! Você acertou tudo!")
            }
        } else {
            alert("Errou")
        }
    }
}
function nvl2resposta8() {
    if (nvl2ganhou8 == 1) {
        alert("Você já acertou.")
    } else {
		PP8_nvl2_1  = P8_nvl2_1.value.toUpperCase();
		PP8_nvl2_2  = P1_nvl2_13.value.toUpperCase();
		PP8_nvl2_3  = P8_nvl2_3.value.toUpperCase();
		PP8_nvl2_4  = P8_nvl2_4.value.toUpperCase();
		PP8_nvl2_5  = P8_nvl2_5.value.toUpperCase();
		PP8_nvl2_6  = P8_nvl2_6.value.toUpperCase();
		PP8_nvl2_7  = P6_nvl2_5.value.toUpperCase();
		PP8_nvl2_8  = P8_nvl2_8.value.toUpperCase();
		PP8_nvl2_9  = P8_nvl2_9.value.toUpperCase();
        PP8_nvl2_10 = P7_nvl2_4.value.toUpperCase();
        
        if(PP8_nvl2_10=='E' && PP8_nvl2_9!=''){

        
        if (PP8_nvl2_1 == 'L' && PP8_nvl2_2 == 'E' && PP8_nvl2_3 == 'I' && PP8_nvl2_4 == 'D' && PP8_nvl2_5 == 'E' && PP8_nvl2_6 == 'M' && PP8_nvl2_7 == 'O' && PP8_nvl2_8 == 'O' && PP8_nvl2_9 == 'R' && PP8_nvl2_10 == 'E') {
            document.getElementById("P8_nvl2_1").style.backgroundColor = "green";
            document.getElementById("P1_nvl2_13").style.backgroundColor = "green";
            document.getElementById("P8_nvl2_3").style.backgroundColor = "green";
            document.getElementById("P8_nvl2_4").style.backgroundColor = "green";
            document.getElementById("P8_nvl2_5").style.backgroundColor = "green";
            document.getElementById("P8_nvl2_6").style.backgroundColor = "green";
            document.getElementById("P6_nvl2_5").style.backgroundColor = "green";
            document.getElementById("P8_nvl2_8").style.backgroundColor = "green";
            document.getElementById("P8_nvl2_9").style.backgroundColor = "green";
            document.getElementById("P7_nvl2_4").style.backgroundColor = "green";
            alert("Acertou! +1 ponto")
            nvl2pontos += 1;
            nvl2ganhou8++;
            if (nvl2pontos == 10) {
                alert("Parabéns!! Você acertou tudo!")
            }
        } else {
            alert("Errou")
        }
    }
    }
}
function nvl2resposta9() {
    if (nvl2ganhou9 == 1) {
        alert("Você já acertou.")
    } else {
		PP9_nvl2_1 = P9_nvl2_1.value.toUpperCase();
		PP9_nvl2_2 = P9_nvl2_2.value.toUpperCase();
		PP9_nvl2_3 = P9_nvl2_3.value.toUpperCase();
		PP9_nvl2_4 = P9_nvl2_4.value.toUpperCase();

        if (PP9_nvl2_1 == 'C' && PP9_nvl2_2 == 'I' && PP9_nvl2_3 == 'S' && PP9_nvl2_4 == 'C') {
                document.getElementById("P9_nvl2_1").style.backgroundColor = "green";
                document.getElementById("P9_nvl2_2").style.backgroundColor = "green";
                document.getElementById("P9_nvl2_3").style.backgroundColor = "green";
                document.getElementById("P9_nvl2_4").style.backgroundColor = "green";
            alert("Acertou! +1 ponto")
            nvl2pontos += 1;
            nvl2ganhou9++;
            if (nvl2pontos == 10) {
                alert("Parabéns!! Você acertou tudo!")
            }
        } else {
            alert("Errou")
        }
    }
}
function nvl2resposta10() {
    if (nvl2ganhou10 == 1) {
        alert("Você já acertou.")
    } else {
        PP10_nvl2_1 = P10_nvl2_1.value.toUpperCase();
		PP10_nvl2_2 = P7_nvl2_6.value.toUpperCase();
		PP10_nvl2_3 = P10_nvl2_3.value.toUpperCase();
        PP10_nvl2_4 = P9_nvl2_3.value.toUpperCase();
        PP9_nvl2_3 = P9_nvl2_3.value.toUpperCase();

		if(PP10_nvl2_4=='S' && PP9_nvl2_2==''){
            alert("Você deve informar a Resposta da Pergunta 9, para poder responder a Pergunta 10 ");
        }
        if (PP10_nvl2_1 == 'B' && PP10_nvl2_2 == 'I' && PP10_nvl2_3 == 'O' && PP10_nvl2_4 == 'S') {
                 document.getElementById("P10_nvl2_1").style.backgroundColor = "green";
                document.getElementById("P7_nvl2_6").style.backgroundColor = "green";
                document.getElementById("P10_nvl2_3").style.backgroundColor = "green";
                document.getElementById("P9_nvl2_3").style.backgroundColor = "green";
            alert("Acertou! +1 ponto")
            nvl2pontos += 1;
            nvl2ganhou10++;
            if (nvl2pontos == 10) {
                alert("Parabéns!! Você acertou tudo!")
            }
        } else {
            alert("Errou")
        }
    }
}

function Regras(){
    alert("REGRAS DO JOGO:" +
            "O jogo é dividido em 2 níveis, é necessário responder todas as perguntas para passar para o nível seguinte."
            +"As respostas são validadas ao completar a resposta"+
            "As perguntas podem ser vistas clicando no numero da cruzada!")
}