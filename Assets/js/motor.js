function disableButton(control1)
{
    control1.disable = true;
}

function enableButton(control1)
{
    control1.disable = false;
}

/* INICIO - ajaxPost1 - Devuelve el resultado a un DIV (POST) */
function ajaxPost1(form1, controlador1, div1)
{

  // 1.- Creación del objeto XMLHttpRequest (Ajax1)
  const Ajax1 = new XMLHttpRequest();

  // 2.- Enlace del formulario a un objeto FormData (FormData1)
  const FormData1 = new FormData( form1 );
  
  // 5.-Éxito en el envío
  Ajax1.addEventListener("load", function(event) {
    document.getElementById(div1.id).innerHTML = this.responseText;
  });
  
  // 5.-Error en el envío
  Ajax1.addEventListener("error", function( event ) {
    alert( 'Error: no se ha enviado la informacion' );
  } );
  
  // 3.-Configuración del envío del formulario a través del FormData
  Ajax1.open("POST", controlador1);
  
  // 4.-Envío del formulario a través del FormData
  Ajax1.send( FormData1 );
  
}
/* FIN - ajaxPost1 - Devuelve el resultado a un DIV (POST) */

/* INICIO - ajaxPost2 - Devuelve el resultado a una Alert (POST) */
function ajaxPost2(form1, controlador1, div1)
{

  // 1.- Creación del objeto XMLHttpRequest (Ajax1)
  const Ajax1 = new XMLHttpRequest();

  // 2.- Enlace del formulario a un objeto FormData (FormData1)
  const FormData1 = new FormData( form1 );
  
  // 5.-Éxito en el envío
  Ajax1.addEventListener("load", function(event) {
    alert(this.responseText);
  });
  
  // 5.-Error en el envío
  Ajax1.addEventListener("error", function( event ) {
    alert( 'Error: no se ha enviado la informacion' );
  } );
  
  // 3.-Configuración del envío del formulario a través del FormData
  Ajax1.open("POST", controlador1);
  
  // 4.-Envío del formulario a través del FormData
  Ajax1.send( FormData1 );
  
}
/* FIN - ajaxPost2 - Devuelve el resultado a una Alert (POST) */

/* INICIO - ajaxGet1 - Devuelve el resultado a un DIV (GET) */
function ajaxGet1(controlador1, div1) {
 
  let ajax1 = new XMLHttpRequest();
  ajax1.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)
    {
      document.getElementById(div1.id).innerHTML = this.responseText;
    }
  };
  ajax1.open("GET", controlador1, true);
  ajax1.send();

}
/* FIN - ajaxGet1 - Devuelve el resultado a un DIV (GET) */

function seleccionarDatos1(form1, boton1, controlador1, div1)
{    
    deshabilitarControl1(boton1);
    ajaxPost1(form1,controlador1,div1);
    habilitarControl1(boton1);
    form1.reset();
}

function seleccionarDatos2(form1, boton1, controlador1, div1)
{
  deshabilitarControl1(boton1);
  ajaxGet1(controlador1, div1);
  habilitarControl1(boton1);
  form1.reset();
}

function seleccionarDatos3(form1, boton1, controlador1, div1)
{
  deshabilitarControl1(boton1);
  ajaxGet1(controlador1+'?valor=' + campo1.value, div1);
  //ajaxGet1('Controllers/Buscador1Controller.php?valor=' + campo1.value, divResultado1.id);
  habilitarControl1(boton1);
  form1.reset();
}

function insertarDatos1(form1, boton1, controlador1, div1)
{      
  deshabilitarControl1(boton1);
  // Opcion 1: El mensaje se muestra en un div (ajaxPost1)
  ajaxPost1(form1,controlador1,div1);
  // Opcion 2: El mensaje se muestra en una alert (ajaxPost2)
  // ajaxPost2(form1,controlador1,div1);
  habilitarControl1(boton1);
  form1.reset();
}

function modificarDatos1(form1, boton1, controlador1, div1)
{      
  deshabilitarControl1(boton1);
  // Opcion 1: El mensaje se muestra en un div (ajaxPost1)
  ajaxPost1(form1,controlador1,div1);
  // Opcion 2: El mensaje se muestra en una alert (ajaxPost2)
  // ajaxPost2(form1,controlador1,div1);
  habilitarControl1(boton1);
}

// INICIO - makeFetchFormRequest - Función que devuelve una promesa para formularios usando fetch
// Función para realizar la petición con fetch
async function makeFetchFormRequest(method, url, form) {
  const formData1 = new FormData(form);

  try {
      const response = await fetch(url, {
          method: method,
          body: formData1,
      });

      if (!response.ok) {
          throw new Error(`Error de red: ${response.statusText}`);
      }

      return await response.json();
  } catch (error) {
      throw new Error(`Captura del error: ${error.message}`);
  }
}
// FIN - makeFetchFormRequest - Función que devuelve una promesa para formularios usando fetch

// INICIO - Creción de los bloques HTML de respuesta
function createResponseBlock(item) {
  const bloque0 = document.createElement("div");
  bloque0.classList.add("bloque0");

  const fields = ["mar_coc", "mod_coc", "aut_coc"];
  fields.forEach(field => {
      const div = document.createElement("div");
      div.classList.add("bloque1");

      const link = document.createElement("a");
      link.href = `xxx.php?ide_coc=${item.ide_coc}`;
      link.textContent = item[field];
      
      div.appendChild(link);
      bloque0.appendChild(div);
  });

  return bloque0;
}
// FIN - Creción de los bloques HTML de respuesta

window.addEventListener('load', function(){

  /* INICIO  - Enter tras escribir en el campo buscar */
  /*
  const botonConsulta1 = document.getElementById('botonConsulta1');
  if(botonConsulta1)
  {
    botonConsulta1.addEventListener('keydown', (e) => {
      if(e.key === 'Enter')
      {
        buscar1(botonConsulta1);
      }
    });     
  }
  */
  /* FIN  - Enter tras escribir en el campo buscar */

  // ---------------------------------- INICIO - (submit) Seleccionar 1
    // Paso 1 - Referencia de los elementos 
    const formConsulta1 = document.getElementById("formConsulta1");

    // Paso 2 - Asociar el elemento al evento y llamada a la función
    if (formConsulta1)
    {
        // Referencia de los elementos
        const button1 = document.getElementById("botonConsulta1");
        const controller1 = "Controllers/Consulta1Controller.php";
        const divResponse1 = document.getElementById("contenedor2");

        // Manejo del evento submit
        formConsulta1.addEventListener("submit", async function (event) {
          event.preventDefault();

          try {
              const response1 = await makeFetchFormRequest('POST', controller1, formConsulta1);
              divResponse1.innerHTML = '';  // Limpiar div antes de añadir elementos

              if (response1.length > 0) {
                  // Encabezado de la tabla
                  const header = createResponseBlock({
                      mar_coc: "Marca",
                      mod_coc: "Modelo",
                      aut_coc: "Autonomía (km)"
                  });
                  header.classList.add("negrita");
                  divResponse1.appendChild(header);

                  // Datos
                  response1.forEach(item => {
                      divResponse1.appendChild(createResponseBlock(item));
                  });
              } else {
                  divResponse1.textContent = 'No hay datos que coincidan con la búsqueda realizada';
              }

              formConsulta1.reset();
          } catch (error) {
              console.error("Error en la petición:", error.message);
              divResponse1.textContent = 'No se ha realizado la acción';
              formConsulta1.reset();
          } finally {
              enableButton(button1);
          }
        });        
    }
  // ---------------------------------- FIN - (submit) Seleccionar 1  

  /* ---------------------------------- INICIO - (click) Seleccionar 2 */
  // Paso 1 - Referencia del elemento que tiene asociado el evento
  const botonConsulta2 = document.getElementById("botonConsulta2");
  // Paso 2 - Asociación del elemento al evento y llamada a la función
  if(botonConsulta2)
  {
    // Referencia de los elementos
    controlador2 = "Controllers/Consulta2Controller.php";
    div2 = document.getElementById("contenedor2");
    // Evento y llamada a la función
    botonConsulta2.addEventListener("click", function(event){
      event.preventDefault();
      seleccionarDatos2(formConsulta1,botonConsulta2,controlador2,div2);
    });
  }
  /* ---------------------------------- FIN - (click) Seleccionar 2 */

  /* ---------------------------------- INICIO - (submit) Insertar 1 */
  // Paso 1: Obtener referencias:
  const formInsert = document.getElementById("formInsercion1");
  // Paso 2 - Asociación del elemento al evento (submit) y llamada a la función
  if (formInsert) {
    const button1 = document.getElementById("botonInsercion1");
    const controller1 = "Controllers/Insercion1Controller.php";
    const divResponse1 = document.getElementById("contenedor2");

    // Manejo del evento submit para insertar los datos
    formInsert.addEventListener("submit", function (event) {
        event.preventDefault();  // Evita el envío por defecto del formulario
        button1.disabled = true;  // Desactiva el botón para evitar envíos múltiples

        // Llamada a la función de inserción con fetch
        makeFetchFormRequest('POST', controller1, formInsert)
            .then(response => {
                if (response.status === "success") {
                    divResponse1.textContent = response.message;  // Muestra el mensaje de éxito
                    formInsert.reset();  // Limpia el formulario
                } else {
                    divResponse1.textContent = response.message || 'Error desconocido.';
                }
            })
            .catch(error => {
                console.error("Error en la inserción:", error.message);  // Muestra el error en la consola
                divResponse1.textContent = 'No se pudo realizar la inserción';
            })
            .finally(() => {
                button1.disabled = false;  // Habilita el botón nuevamente
            });
    });
  }
  /* ---------------------------------- FIN - (submit) Insertar 1 */

  /* ---------------------------------- INICIO - (submit) Insertar 2 */

  const formInsercion = document.getElementById('formInsercion2');
  const contenedor2 = document.getElementById('contenedor2');
  
  let headerAdded = false; // Inicializar la variable para controlar si el encabezado fue agregado
  
  // Función para crear un bloque de respuesta
  function createResponseBlock(item) {
      const div = document.createElement('div');
      div.classList.add('item-coche');
      div.innerHTML = `<strong>Marca:</strong> ${item.mar_coc}, <strong>Modelo:</strong> ${item.mod_coc}, <strong>Autonomía:</strong> ${item.aut_coc}`;
      return div;
  }
  
  // Función para mostrar todos los datos en el contenedor2
  function mostrarDatos(data) {
      // Limpiar contenido previo
      contenedor2.innerHTML = '';
  
      // Agregar encabezado solo una vez
      if (!headerAdded) {
          const header = createResponseBlock({
              mar_coc: "Marca",
              mod_coc: "Modelo",
              aut_coc: "Autonomía (km)"
          });
          header.classList.add("negrita");
          contenedor2.appendChild(header);
          headerAdded = true; // Cambiar el estado a true
      }
  
      // Datos
      data.forEach(item => {
          contenedor2.appendChild(createResponseBlock(item));
      });
  }
  
  // Cargar los datos al inicio o después de una inserción
  function cargarDatos() {
      fetch('Controllers/InsercionConsulta1Controller.php')
          .then(response => response.json())
          .then(data => {
              if (data.data) {
                  mostrarDatos(data.data);
              } else {
                  contenedor2.textContent = 'No hay datos disponibles';
              }
          })
          .catch(error => console.error('Error:', error));
  }
  
  // Evento para insertar datos y actualizar la lista
  formInsercion.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = new FormData(formInsercion);
  
      fetch('Controllers/InsercionConsulta1Controller.php', {
          method: 'POST',
          body: formData
      })
      .then(response => response.json())
      .then(data => {
          if (data.status === 'success') {
              // Cargar datos solo después de insertar exitosamente
              cargarDatos(); // Cargar y mostrar los datos
              alert(data.message);
          } else {
              alert(data.message || 'Error al insertar datos.');
          }
      })
      .catch(error => console.error('Error:', error));
  });
  
  // Cargar los datos al inicio si es necesario

  
  
  /* ---------------------------------- FIN - (submit) Insertar 3 */

  /* ---------------------------------- INICIO - (submit) Insertar y subir archivos 1 */
  // Paso 1: Obtener referencias:
  const formSubidaArchivos1 = document.getElementById("formSubidaArchivos1");
  // Paso 2 - Asociación del elemento al evento (submit) y llamada a la función
  if(formSubidaArchivos1)
  {
    // Referencia de los elementos
    boton1 = document.getElementById("botonInsercion1");
    controlador1 = "Controllers/InsercionConSubidaDeArchivos1Controller.php";
    div1 = document.getElementById("contenedor2");
    // Evento y llamada a la función
    formSubidaArchivos1.addEventListener("submit", function(event){
      event.preventDefault();
      insertarDatos1(formSubidaArchivos1,boton1,controlador1,div1);
    });
  }
  /* ---------------------------------- FIN - (submit) Insertar y subir archivos 1  */

  /* ---------------------------------- INICIO - (submit) Insertar 3 */
  // Paso 1: Obtener referencias:
  const formEdicion1 = document.getElementById("formEdicion1");
  // Paso 2 - Asociación del elemento al evento (submit) y llamada a la función
  if(formEdicion1)
  {
    // Referencia de los elementos
    boton1 = document.getElementById("botonEdicion1");
    controlador1 = "Controllers/EdicionDeclaracionesPreparadas1Controller.php";
    div1 = document.getElementById("contenedor2");
    // Evento y llamada a la función
    formEdicion1.addEventListener("submit", function(event){
      event.preventDefault();
      modificarDatos1(formEdicion1,boton1,controlador1,div1);
    });
  }
  /* ---------------------------------- FIN - (submit) Insertar 3 */  

});