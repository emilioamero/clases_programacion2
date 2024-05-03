

function mostrarList() {
  // Elemento ul donde se insertará el listado
  var list = document.createElement("ul");
  document.body.appendChild(list);
  // Array con los elementos del listado
  let frutas = ["Manzana", "Banana", "Naranja", "Pera"];
  list.innerHTML = "";
  // Recorrer el array y crear elementos li para cada item
  for (var i = frutas.length - 1; i >= 0; i--) {
    var item = document.createElement("li");
    item.textContent = frutas[i];
    list.appendChild(item);
  }

}
