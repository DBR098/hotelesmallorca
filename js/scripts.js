function prueba() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange == function() {
        alert('ESPAÑA');
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("myCarousel").innerHTML = this.responseText();
        }
    };
    xhttp.open("GET", "js/prueba.txt", true);
    xhttp.send();
}
