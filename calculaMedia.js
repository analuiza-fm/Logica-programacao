	function fazCalculoMedia(notaN1, notaN2) {
			
			var notaMedia = ((notaN1 + notaN2)/2);			
			return notaMedia;
		}

		function mostraResultadoMedia() {
			
			var nome = document.getElementById('campoNome').value;
			var notaN1 = parseInt(document.getElementById('campoNotaN1').value);
			var notaN2 = parseInt(document.getElementById('campoNotaN2').value);

			var media = fazCalculoMedia(notaN1, notaN2);	

			alert(nome + ", sua nota final é: " + media + ".");

			if(media >= 0 && media < 5) {
				alert("REPROVADO!");
			}

			else if(media >= 5 && media < 7){
				alert ("RECUPERAÇÃO!");
			}

			else if(media >= 7 && media <= 10){
				alert ("APROVADO!");
			} 

			else{
				alert ("NOTA INVÁLIDA");
			}
		}

function mostraResultadoMediaTabela() {
	
	var alunos = document.querySelectorAll(".aluno");
	console.log(alunos[1]);


	for(var i = 0; i < alunos.length; i++){
		var aluno = alunos[i];

		var tdN1 = aluno.querySelector(".info-n1");
		var notaN1 = parseInt(tdN1.textContent);

		var tdN2 = aluno.querySelector(".info-n2");
		var notaN2 = parseInt(tdN2.textContent);

		var tdmedia = aluno.querySelector(".info-media");
		var media = calculaMedia(notaN1, notaN2);
		tdmedia.textContent = media;

		var statusNota = aluno.querySelector(".info-status");

	        if(media >= 0 && media < 5) {
					statusNota.textContent = ("REPROVADO");
				}

				else if(media >= 5 && media < 7){
					statusNota.textContent = ("RECUPERAÇÃO");
				}

				else if(media >= 7 && media <= 10){
					statusNota.textContent = ("APROVADO");
				} 

				else{
					statusNota.textContent = ("NOTA INVÁLIDA");
				}
	}
}

function calculaMedia(notaN1, notaN2) {
	var media = parseInt((notaN1 + notaN2)) / 2;
	return media.toFixed(1)
}


