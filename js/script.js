function mostrarMenu() {
    var nav = document.getElementById("menu-principal");
    nav.classList.toggle('mostrar');
}
function mostrarHostName() {
    var Dominio = window.location.hostname;
    alert(Dominio);
}