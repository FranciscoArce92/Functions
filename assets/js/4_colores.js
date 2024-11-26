// Variable que almacena el color
let color;

// Selectores
const boxes = [...document.querySelectorAll("#box-1, #box-2, #box-3, #box-4")];

// Evento para capturar las teclas
document.addEventListener("keydown", ({ key }) => {
    const colors = { a: "#db23ea", s: "#e75b16", d: "#0ee2df" };
    if (key in colors) color = colors[key];
});

// Función para cambiar el color
const cambiarColor = (element) => element.style.backgroundColor = color;

// Evento de click para las cajas
boxes.forEach(box => box.addEventListener("click", () => cambiarColor(box)));

//Evento para capturar las teclas para los nuevos cuadrados

const container = document.querySelector(".box-container2");
document.addEventListener("keydown", ({ key }) => {
    const colores = { q: "#b80ee2", w: "#676468", e: "#9e8d81"};

    if (key in colores) {
        //Crea un nuevo cuadrado
        const cuadrado = document.createElement("div");
        cuadrado.className = "cuadrado";
        cuadrado.style.backgroundColor = colores[key];

        //Eliminar el cuadrado al hacer click en él
        cuadrado.addEventListener("click", () => {
            cuadrado.remove();
        });

        //Añadir el div al body
        container.appendChild(cuadrado);
    }
});
