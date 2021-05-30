var matricula = new Array();
var quantidadeHoraTrabalhada = new Array();
var salario = new Array();
var totalAPagar = new Array();
var somaTotalDasHoras = 0;
var somaTotalSalarios = 0;



function acrescentar() {


    //Fazer um validador de números repetidos ou não....
    //-----------------------------Quadrado Esquerdo ----------------------------

    matricula.push(document.querySelector(".campo_matricula"))
    quantidadeHoraTrabalhada.push(document.querySelector(".campo_qtdHoraTrabalhada"))
    salario.push(document.querySelector(".campo_salario"))


    console.log(matricula.length)
    console.log(quantidadeHoraTrabalhada[0].value)
    console.log(salario[0].value)


    /* ------Valor total da Hora trabalhada Com o Salario e depois adicionar em uma array ------
        
    for (i = 0; i < quantidadeHoraTrabalhada.length; i++) {
        totalAPagar += parseInt(quantidadeHoraTrabalhada[i].value) * parseInt(salario[i].value)

    }
    console.log(totalAPagar)
    */

    //----------------------------Quadrado Direito -------------------

    document.querySelector(".totalMatricula").innerHTML = matricula.length


    console.log("Qtd Horaa Trabalhada" + quantidadeHoraTrabalhada[0].value)
    console.log("Qtd Horaa Trabalhada" + quantidadeHoraTrabalhada[1].value)

    /////@fazer um for, foreach somar quantidadeHoraTrabalhada dentro do array todo
    /*for (i = 0; i < quantidadeHoraTrabalhada.length; i++) {
        var valor = parseInt(quantidadeHoraTrabalhada[i].value)
            //somaTotalDasHoras = parseInt(quantidadeHoraTrabalhada[i].value)
        somaTotalDasHoras += valor;
    }
    quantidadeHoraTrabalhada.forEach((valorAtual) => {

        somaTotalDasHoras += valorAtual
        console.log(somaTotalDasHoras)
    })
*/

    document.querySelector(".totalHoraTrabalhada").innerHTML = somaTotalDasHoras



    /////@fazer um for, foreach somar salario dentro do array todo
    /* for (i = 0; i <= quantidadeHoraTrabalhada.length; i++) {
         somaTotalDasHoras += parseInt(quantidadeHoraTrabalhada[i].value);
         console.log("SomaTorio " + somaTotalDasHoras);

     }*/


    document.querySelector(".totalSalario").innerHTML = somaTotalSalarios




    //-------------Seção das notas -----------------------------






}

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