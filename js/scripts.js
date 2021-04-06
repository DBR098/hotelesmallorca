function prueba() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange == function() {
        if(this.readyState == 4 && this.status == 1) {
            document.getElementById("myCarousel") = this.responseText();
        }
    }
    xhttp.open("GET", "prueba.txt", true);
    xhttp.send();
}