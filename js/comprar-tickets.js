/* 
TAREAS:
    PRINCIPAL: CALCULAR EL VALOR DE TICKETS ADQUIRIDOS SEGUN CANTIDAD Y CATEGORIA DE DESCUENTO
    1. ESTABLECER VALOR DE UN TICKET
    2. ESTABLECER PORCENTAJES DE LOS DESCUENTOS
    3. CONOCER LA CANTIDAD DE TICKETS Y EL DESCUENTO CORRESPONDIENTE
    4. EN CASO QUE EXISTA DESCUENTO APLICARLO AL VALOR UNITARIO DEL TICKET
    5. MULTIPLICAR LA CANTIDAD DE TICKETS POR EL VALOR UNITARIO DE TICKET CON EL DESCUENTTO SI CORRESPONDE
    6. MOSTRAR EL TOTAL DE LA COMPRA EN LA PANTALLA
    
    SECUNDARIAS:
    1. VALIDAR LOS DATOS INGRESADOS POR EL USUARIO
    2. PODER BORRAR EL FORMULARIO AL PRESIONAR UN BOTON


*/
//  1. ESTABLECER VALOR DE UN TICKET
const TICKET = 200;

// 2. ESTABLECER PORCENTAJES DE LOS DESCUENTOS

const ESTUDIANTE = 80;
const TRAINEE = 50;
const JUNIOR = 30;

// 3. CREAR VARIABLES DE LOS ELEMENTOS
let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let email = document.querySelector("#mail");
let cantidad = document.querySelector("#cantidadTickets");
let categoria = document.querySelector("#categoriaSelect");
let resultado = document.querySelector("#totalPago");
let btnBorrar = document.querySelector("#btnBorrar");
let btnResumen = document.querySelector("#btnResumen");

// 4. APLICAR LA ESTRATEGIA PARA ESCUCHAR O CAPTURAR EL EVENTO

btnResumen.addEventListener("click", calcularTotal);
btnBorrar.addEventListener("click", borrar);

function calcularTotal() {
  let descuento = calcularDescuento(categoria.value);
  resultado.textContent = (TICKET - descuento) * cantidad.value;
}
function calcularDescuento() {
  switch (categoria.value) {
    case "0":
      return 0;
    case "1":
      return (TICKET * ESTUDIANTE) / 100;
    case "2":
      return (TICKET * TRAINEE) / 100;
    case "3":
      return (TICKET * JUNIOR) / 100;
    default:
      break;
  }
}

function borrar() {
  nombre.value = "";
  apellido.value = "";
  cantidad.value = "";
  categoria.value = "";
  resultado.textContent = "";
}

/*
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

 let form = document.querySelector(".formulario");

function inputCheck(form){
  let arrayCheck = [];
  for (i=0; i<3; i++) {
    arrayCheck[i] = form[i].value;
    if (form[i].value =="") {
         document.querySelector("." + form[i].className).style.border = "2px solid red";
    }else{
      document.querySelector("." + form[i].className).style.border = "1px solid var(--grey-300)";

    }
  }
}

if (arrayCheck.every(element => element !="")) {
  if (form[2].value.includes("@") && form [2].value.includes(".")) {
    alert("Formulario enviado");
    form.submit();
    document.querySelector("." + form[2].className).style.border = "1px solid var (--grey-300)";

  }else {
    alert("Debe ingresar un correo válido");
    document.querySelector("." + form[2].className).style.border = "2px solid red"
  }else {
    alert("Completar los campos en rojo");
  }
}
*/