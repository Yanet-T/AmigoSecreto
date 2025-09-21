// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];







function agregarAmigo() {

  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte el nombre de un amigo.");
    return;


  }
  amigos.push(nombre);
  input.value = "";
  mostrarLista();
}
function mostrarLista() {
  
  const ul = document.getElementById("listaAmigos");
  ul.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    ul.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Recuerda agregar al menos un amigo antes de sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  const amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}