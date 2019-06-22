var botaoAdicionar = document.querySelector("#adicionar-aluno");
botaoAdicionar.addEventListener("click", function(event) {
	event.preventDefault();
	console.log("Oi, cliquei no botão");

/* Extrai do form nome, N1 e N2*/
var form = document.querySelector("#form-adiciona");
	console.log(form);
	console.log(form.nome.value);
	console.log(form.notaN1.value);
	console.log(form.notaN2.value);

	var nome = form.nome.value;
	var notaN1 = parseInt(form.notaN1.value);
	var notaN2 = parseInt(form.notaN2.value);
	console.log(nome);
	console.log(notaN1);
	console.log(notaN2);

	/*Cria Tr e Td para cada aluno*/
	var alunoTr = document.createElement("tr");

		var nomeTd = document.createElement("td");
		var notaN1Td = document.createElement("td");
        var notaN2Td = document.createElement("td");
		var mediaTd = document.createElement("td");

/*Coloca os valores dentro do Td*/

			nomeTd.textContent = nome;
			notaN1Td.textContent = notaN1;
            notaN2Td.textContent = notaN2;
            mediaTd.textContent = calculaMedia (notaN1, notaN2);

/*Coloca o td dentro da tabela */
				alunoTr.appendChild(nomeTd);
				alunoTr.appendChild(notaN1Td);
				alunoTr.appendChild(notaN2Td);
                alunoTr.appendChild(mediaTd);

	console.log(alunoTr)

	var tabela = document.querySelector("#tabela-alunos");
	tabela.appendChild(alunoTr);



});