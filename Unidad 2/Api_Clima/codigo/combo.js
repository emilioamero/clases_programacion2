cargarCiudades();

function cargarCiudades() {
  let selectciudades = document.getElementById("select1");

  let ciudades = [
    { codigo: "ar.X5900", descripcion: "Villa Maria" },
    { codigo: "ar.X5186", descripcion: "Alta Gracia" },
    { codigo: "ar.X2553", descripcion: "Justiniano Posse" },
    { codigo: "ar.V9410", descripcion: " Tierradel Fuego" },
    { codigo: "es.28001", descripcion: " Madrid (España)" },
    { codigo: "-23.49,-46.71", descripcion: "Rio de Janeiro (Brazil)" },
    { codigo: "40.7247, -74.09", descripcion: "Nueva York (EEUU)" },
  ];

   let opciondisabled = document.createElement("option");

  opciondisabled.disabled = true;
  opciondisabled.value = 0;
  opciondisabled.textContent = "Selecione una ciudad";
  opciondisabled.selected = true;

  selectciudades.appendChild(opciondisabled); 

  for (let index = 0; index < ciudades.length; index++) {
    const option = document.createElement("option");
    option.value = ciudades[index].codigo;
    option.textContent = ciudades[index].descripcion.trim();

    selectciudades.appendChild(option);
  }
}
