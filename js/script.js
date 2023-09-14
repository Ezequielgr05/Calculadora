botonesCalculadora = document.querySelector(".btn-calculadora")
pantalla = document.querySelector("#pantalla")
botonesCalculadora = Array.from(botonesCalculadora)

for (const indice of miArray.keys()) {
    botonesCalculadora[indice].addEventListener("click", () => {
        if (indice >= 1 && indice <= 18) {
            // los botones
        } else if (indice == 0){
            // el que borra
        } else {
            // el igual
        }
    })
}
