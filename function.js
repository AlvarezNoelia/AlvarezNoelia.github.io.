
window.alert("Bienvenido al CV de Alvarez Noelia!");

let now = new Date();
alert( now );


window.addEventListener("load", (event) => {
  console.log("Proyecto final integrador");
});

 
document.getElementById("foto").src = "FotoCV_color.jpg";
document.getElementById("foto").addEventListener("mouseover", mouseOver);
document.getElementById("foto").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("foto").src = "FotoCV_ByN.jpg";
}

function mouseOut() {
  document.getElementById("foto").src = "FotoCV_color.jpg";
}