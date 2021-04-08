function prueba() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange == function() {
        alert('ESPAÑA');
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("myCarousel").innerHTML = this.responseText();
        }
    };
    xhttp.open("GET", 'js/prueba.txt', true);
    xhttp.send(null);
}

function muestraOculta(id) {
    var elemento = document.getElementById('contenidos_'+id);
    var enlace = document.getElementById('enlace_'+id);
 
    if(elemento.style.display == "" || elemento.style.display == "block") {
        elemento.style.display = "none";
        enlace.innerHTML = 'Mostrar contenidos';
    } else {
        elemento.style.display = "block";
        enlace.innerHTML = 'Ocultar contenidos';
    }
}
