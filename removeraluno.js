var alunos = document.querySelectorAll(".aluno");
/*
//pra cada item do item, vou fazer uma função
alunos.forEach(function(aluno) {
    //escutar o duplo click em aluno e fazer algo definido na função
    aluno.addEventListener("dblclick", function() {
        console.log("Fui clicado");
        //this é quem sofreu o evento de dupli clik
        this.remove();
    })

})*/

//Colocando o evento na tabela, ou seja, no pai do Tr e Td, conseguimos escutar os alunos adicionados depois que abrimos o site
var tabela = document.querySelector("#tabela-alunos");
tabela.addEventListener("dblclick", function(event){
    //o event identica qual foi o alvo do click
    console.log(event.target);
    //event.target.remove();
    event.target.parentNode.remove();
})