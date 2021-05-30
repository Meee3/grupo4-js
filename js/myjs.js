var matricula = new Array();
var quantidadeHoraTrabalhada = new Array();
var salario = new Array();
var somaTotalSalarios = 0
var somaTotalDasHoras = 0;
var ValorTotalAqui = 0;

var QuantidadeTotalDeHoraTrabalhada = 0;
var QuantidadeTotalDoSalario = 0;

var salarioFunc = new Array();

function acrescentar() {


    //Fazer um validador de números Vazio e nulo....


    //-----------------------------Quadrado Esquerdo ----------------------------

    matricula.push(document.querySelector(".campo_matricula"))
    quantidadeHoraTrabalhada.push(document.querySelector(".campo_qtdHoraTrabalhada"))
    salario.push(document.querySelector(".campo_salario"))


    console.log("Comprimento da matricula " + matricula.length)
    console.log("quantidade da hora Trampada " + quantidadeHoraTrabalhada[0].value)
    console.log("salario " + salario[0].value)

    //------------------------------------------------------------------------

    // Soma Total Individual
    // var somaAlgumValor = parseInt(quantidadeHoraTrabalhada[0].value * salario[0].value)

    function SomaTotal() {
        var interna = -1;
        for (var i = 0; i < matricula.length; i++) {
            salarioFunc[i] += parseInt(quantidadeHoraTrabalhada[i].value * salario[i].value)
            interna = i;
        }
        return salarioFunc[interna];

    }

    //------------------------------------------------------------------------

    //Totais Quantidade de Hora Trabalhada
    function QuantidadeDeHoraTrabalhadaTotal() {
        QuantidadeTotalDeHoraTrabalhada = 0;
        for (var i = 0; i < matricula.length; i++) {
            QuantidadeTotalDeHoraTrabalhada += parseInt(quantidadeHoraTrabalhada[i].value);
            //  alert(QuantidadeDeHoraTrabalhadaTotal())

        }

        //alert(QuantidadeDeHoraTrabalhadaTotal)
        return QuantidadeTotalDeHoraTrabalhada

    }

    alert(QuantidadeDeHoraTrabalhadaTotal())

    //Totais do Salario
    function somaSalario() {
        QuantidadeTotalDoSalario = 0;
        for (var i = 0; i < matricula.length; i++) {
            QuantidadeTotalDoSalario += parseInt(salario[i].value);
        }
        return QuantidadeTotalDoSalario;
    }


    //Total de Ambos
    function somatorioSalario() {
        somaTotalSalarios = 0;
        for (var i = 0; i < matricula.length; i++) {
            somaTotalSalarios += parseInt(salario[i].value * quantidadeHoraTrabalhada[i].value);
        }
        return somaTotalSalarios;
    }



    alert(somatorioSalario());
    //------------------------------------------------------------------------


    // console.log("Total de trabalhada" + QuantidadeDeHoraTrabalhadaTotal())
    //alert("Total de Salario " + somaSalario())

    /*for (var i = 0; i < matricula.length; i++) {
        ValorTotalAqui += parseInt(quantidadeHoraTrabalhada[i].value * salario[i].value);
        console.log("Novo Valor " + ValorTotalAqui);
        alert(ValorTotalAqui);
    }*/


    // console.log("Total a pagar " + totalAPagarSeparado)
    // console.log("comprimento do total " + totalAPagarSeparado.length)

    // ------Valor total da Hora trabalhada Com o Salario e depois adicionar em uma array ------


    /*  for (var valor = 0; valor <= matricula.length; valor++) {
          totalAPagarSeparado += totalAPagarSeparado;

      }*/

    /*
    for (var i = 0; i < matricula.length; i++) {
        totalAPagarJunto += parseInt(totalAPagarSeparado[i].value);

        console.log(totalAPagarJunto)
    }*/

    console.log("Valor Total a pagar dos Funcionaarios " + ValorTotalAqui)

    //----------------------------Quadrado Direito -------------------

    document.querySelector(".totalMatricula").innerHTML = matricula.length



    /////@fazer um for, foreach somar quantidadeHoraTrabalhada dentro do array todo
    /*for (var i = 0; i < quantidadeHoraTrabalhada.length; i++) {
            var valor = parseInt(quantidadeHoraTrabalhada[i].value)
                //somaTotalDasHoras = parseInt(quantidadeHoraTrabalhada[i].value)
            somaTotalDasHoras += valor;
        }
        quantidadeHoraTrabalhada.forEach((valorAtual) => {

            somaTotalDasHoras += valorAtual
            console.log(somaTotalDasHoras)
        })
    */

    //document.querySelector(".totalHoraTrabalhada").innerHTML = QuantidadeDeHoraTrabalhadaTotal();
    document.querySelector(".totalHoraTrabalhada1").innerHTML = QuantidadeDeHoraTrabalhadaTotal();


    /////@fazer um for, foreach somar salario dentro do array todo
    /* for (i = 0; i <= quantidadeHoraTrabalhada.length; i++) {
         somaTotalDasHoras += parseInt(quantidadeHoraTrabalhada[i].value);
         console.log("SomaTorio " + somaTotalDasHoras);

     }*/


    document.querySelector(".totalSalario").innerHTML = somaSalario();




    //-------------Seção das notas -----------------------------

    document.querySelector(".valorTotalAqui").innerHTML = somatorioSalario();
    var umReal = 0;
    var doisReais = 0;
    var cincoReais = 0;
    var dezReais = 0;
    var vinteReais = 0;
    var cinquentaReais = 0;
    var cemReais = 0;

    var recebeSoma = somatorioSalario();


    /*if (recebeSoma >= 200) {
        nota200 = parseInt(recebeSoma / 200.00);
        recebeSoma -= 200.00 * nota200;
    }*/
    if (recebeSoma >= 100) {
        cemReais = parseInt(recebeSoma / 100);
        recebeSoma -= 100 * cemReais;
    }
    if (recebeSoma >= 50) {
        cinquentaReais = parseInt(recebeSoma / 50);
        recebeSoma -= 50 * cinquentaReais;
    }
    if (recebeSoma >= 20) {
        vinteReais = parseInt(recebeSoma / 20);
        recebeSoma -= 20 * vinteReais;
    }
    if (recebeSoma >= 10) {
        dezReais = parseInt(recebeSoma / 10);
        recebeSoma -= 10 * dezReais;
    }
    if (recebeSoma >= 5) {
        cincoReais = parseInt(recebeSoma / 5);
        recebeSoma -= 5 * cincoReais;

    }
    if (recebeSoma >= 2) {
        doisReais = parseInt(recebeSoma / 2);
        recebeSoma -= 2 * doisReais;
    }
    if (recebeSoma >= 1) {
        umReal = (recebeSoma / 1);
        recebeSoma -= 1 * umReal;
    }

    //document.querySelector(".duzentos").innerHTML = nota200;
    document.querySelector('.pagar_100real').innerHTML = cemReais;
    document.querySelector('.pagar_50real').innerHTML = cinquentaReais;
    document.querySelector('.pagar_20real').innerHTML = vinteReais;
    document.querySelector('.pagar_10real').innerHTML = dezReais;
    document.querySelector('.pagar_5real').innerHTML = cincoReais;
    document.querySelector('.pagar_2real').innerHTML = doisReais;
    document.querySelector('.pagar_1real').innerHTML = umReal;






    //-------------Decrementar -----------------------------


    function decrementar() {

        if (matricula.length <= 0) {

        } else if (matricula.length >= 0) {
            matricula.pop();
            quantidadeHoraTrabalhada.pop();
            salario.pop();

            console.log(matricula.length)
            console.log(quantidadeHoraTrabalhada)
            console.log(salario)

        }
    }


    document.querySelector(".totalMatricula").innerHTML = matricula.length

    /*for (i = 0; i < quantidadeHoraTrabalhada.length; i++) {
        var valor = parseInt(quantidadeHoraTrabalhada[i].value)
            //somaTotalDasHoras = parseInt(quantidadeHoraTrabalhada[i].value)
        somaTotalDasHoras += valor;
    }*/

    document.querySelector(".totalHoraTrabalhada").innerHTML = somaTotalDasHoras


    /////@fazer um for, foreach Subtrair salario dentro do array todo
    /* for (i = 0; i <= quantidadeHoraTrabalhada.length; i++) {
         somaTotalDasHoras += parseInt(quantidadeHoraTrabalhada[i].value);
         console.log("SomaTorio " + somaTotalDasHoras);

     }*/

    document.querySelector(".totalSalario").innerHTML = somaTotalSalarios
}