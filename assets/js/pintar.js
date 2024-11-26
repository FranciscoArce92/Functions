// ele = document.getElementById("ele1");
// ele.style.color = "green";
// ele.addEventListener("click", function(event, color = "yellow") {
//     ele.style.backgroundColor = "yellow";
//     ele.style.color = color;
// });

//modificado requerimiento 3.1

function pintar(ele) {
    ele.style.backgroundColor = 'yellow'
}

ele = document.getElementById("ele1");

ele.addEventListener("click", () => {
    pintar(ele)
});

// modificado requerimiento 3.2

function pintar(ele, color = 'green') {
    ele.style.backgroundColor = color
}

pintar(ele);
ele.addEventListener("click", () => {
    pintar(ele, "yellow");
});