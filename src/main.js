import data from './data/dataset.js';
import { renderItems } from './view.js';
import { filterDataHabitat, filterDataTamaño} from './dataFunctions.js';
import { sortData } from './dataFunctions.js'

const arregloDeFlores = document.querySelector("#root");
arregloDeFlores.appendChild(renderItems(data));

const contenedorHabitat = document.querySelector("#flor-habitat");
contenedorHabitat.addEventListener("change", selectDeHabitat);

function selectDeHabitat(event){
  const opcionDeHabitat= event.target.value;

  if (opcionDeHabitat === "acuáticas"){
    const items = renderItems(filterDataHabitat(data, "tipoDeHabitat", "Acuática"));
    arregloDeFlores.replaceChildren(items);
  }else if (opcionDeHabitat === "terrestres"){
    const items = renderItems(filterDataHabitat(data, "tipoDeHabitat", "Terrestre"));
    arregloDeFlores.replaceChildren(items);
  }else if(opcionDeHabitat === "epífitas"){
    const items = renderItems(filterDataHabitat(data, "tipoDeHabitat", "Epífita"));
    arregloDeFlores.replaceChildren(items);
  }
}

const contenedorTamaño = document.querySelector("#flor-tamaño");
contenedorTamaño.addEventListener("change", selectDeTamaño);

function selectDeTamaño(event){
  const opcionDeTamaño = event.target.value;

  if (opcionDeTamaño === "pequeñas"){
    const items = renderItems(filterDataTamaño(data, "tamañoDeFlor", "Pequeña"));
    arregloDeFlores.replaceChildren(items);
  }else if (opcionDeTamaño === "medianas"){
    const items = renderItems(filterDataTamaño(data, "tamañoDeFlor", "Mediana"));
    arregloDeFlores.replaceChildren(items);
  }else if(opcionDeTamaño === "grandes"){
    const items = renderItems(filterDataTamaño(data, "tamañoDeFlor", "Grande"));
    arregloDeFlores.replaceChildren(items);
  }
}

const contenedorOrdenar = document.querySelector("#ordenar-flor");
contenedorOrdenar.addEventListener("change", selectDeOrdenar);

function selectDeOrdenar(event){
  const opcionDeOrden = event.target.value;

  if (opcionDeOrden === "asc"){
    const items = renderItems(sortData(data, "name", "asc"));
    arregloDeFlores.replaceChildren(items);
  }else if (opcionDeOrden === "des"){
    const items = renderItems (sortData(data, "name", "des"));
    arregloDeFlores.replaceChildren(items);
  }
}

const botonRecargar = document.querySelector('[data-testid = "button-clear"]');
botonRecargar.addEventListener("click", () => {
  location.reload();
});



// console.log (filterData, renderItems(data), data);
