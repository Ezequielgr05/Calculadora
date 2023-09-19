// Constantes 
const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const simbolosAritmeticos = ["+", "-", "÷", "x", "%", " ", "."];

// Variables
var botonesCalculadora = document.querySelectorAll(".btn-calculadora");
var pantalla = document.querySelector("#pantalla");
var botonesCalculadora = Array.from(botonesCalculadora);
var parentesis = 0;
var numeroNegativo = false;

// Funciones 
function aritmetica(simbolo, bool = true) {
  contenidoPantalla = pantalla.innerHTML;

  if (contenidoPantalla.length === 0 && !bool) {
    pantalla.innerHTML = "-";
  } else if (contenidoPantalla.length > 0 && bool) {
    ultimoCaracter = contenidoPantalla.charAt(contenidoPantalla.length - 1);

    if (numeros.includes(ultimoCaracter)) {
      contenidoPantalla += simbolo;
      pantalla.textContent = contenidoPantalla;
    } else if (contenidoPantalla.includes("%")) {
      contenidoPantalla += simbolo;
      pantalla.textContent = contenidoPantalla;
    } else if (simbolosAritmeticos.includes(ultimoCaracter)) {
      contenidoPantalla = contenidoPantalla.slice(0, -1);
      contenidoPantalla += simbolo;
      pantalla.textContent = contenidoPantalla;
    }
  } else if (!bool) {
    contenidoPantalla = `(-${contenidoPantalla}) `;
    pantalla.textContent = contenidoPantalla;
  }
}



function numero(numero) {
  contenidoPantalla = pantalla.textContent; 
  numero = String(numero)
          if (!contenidoPantalla.includes("%")) {
            contenidoPantalla += numero; 
            pantalla.textContent = contenidoPantalla; 
          } else {
            pantalla.innerHTML = "Sintax Error..."
            setTimeout(() => {
              pantalla.innerHTML = " "
            }, 1000)
          }
}

// Ejecuciones
for (const indice of botonesCalculadora.keys()) {
  botonesCalculadora[indice].addEventListener("click", () => {
    if (indice >= 1 && indice <= 18) {
      switch (indice) {
        case 1:
          if (parentesis == 1) {
            pantalla.innerHTML += ")";
            parentesis--;
          } else {
            pantalla.innerHTML += "(";
            parentesis++;
          }
        break;
        case 2:
          contenidoPantalla = pantalla.innerHTML;
          if (contenidoPantalla.length > 0) {
            ultimoCaracter = contenidoPantalla.charAt(
              contenidoPantalla.length - 1
            );

            if (numeros.includes(ultimoCaracter)) {
              contenidoPantalla += "%";
              pantalla.textContent = contenidoPantalla;
            } else if (simbolosAritmeticos.includes(ultimoCaracter)) {
              contenidoPantalla = contenidoPantalla.slice(0, -1);
              contenidoPantalla += "%";
              pantalla.textContent = contenidoPantalla;
            }
          }
          break;
        case 3:
          aritmetica("÷")
          break;
        case 4:
          numero(7)
          break;
        case 5:
          numero(8)
          break;
        case 6:
          numero(9)
          break;
        case 7:
          aritmetica("x")
          break;
        case 8:
          numero(4)
          break;
        case 9:
          numero(5)
          break;
        case 10:
          numero(6)
          break;
        case 11:
          aritmetica("-")
          break;
        case 12:
          numero(1)
          break;
        case 13:
          numero(2)
          break;
        case 14:
          numero(3)
          break;
        case 15:
          aritmetica("+")
          break;
        case 16:
          aritmetica("-", false)
          break;
        case 17:
          numero(0)
          break;
        case 18:
          aritmetica(".")
          break;
        default:
          break;
      }
    } else if (indice == 0) {
      pantalla.innerHTML = "";
    } else {
      // el igual
    }
  });
}
