nome = prompt("Nome completo")
nasc = prompt("Data de nascimento")
idade = prompt("Idade")
temCond = confirm("Você tem alguma condição pré-existente?")
medico = temCond

if (temCond){estadoDeSaude= "Sim"}
if (temCond==false){estadoDeSaude= "Não"}

if (temCond){medico= "Sim"}
if (temCond==false){medico= "Não"}

tagh1.innerHTML= "Nome: " + nome
lista.innerHTML=
  `<li> Data de nascimento: ${nasc}
   <li> Idade: ${idade} anos </li>
   <li> Tem condição pré-existente: ${estadoDeSaude}</li>
   <li> Precisa de acompanhamento médico ${medico}`
