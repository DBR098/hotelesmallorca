$(document).ready(function () {
    $('#open').on('click', function () {
        $('#popup').fadeIn('slow');
        $('.popup-overlay').fadeIn('slow');
        $('.popup-overlay').height($(window).height());
        return false;
    });

    $('#close').on('click', function () {
        $('#popup').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
        return false;
    });
});

$(document).ready(function () {
    $('#open2').on('click', function () {
        $('#popup2').fadeIn('slow');
        $('.popup-overlay').fadeIn('slow');
        $('.popup-overlay').height($(window).height());
        return false;
    });

    $('#close2').on('click', function () {
        $('#popup2').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
        return false;
    });
});

function abrirpopup(nom, img, desc, precio, valoracion) {
    let tval = pintar(valoracion);
    let tprecio = pintar(precio);
    var texto =
        `<div>
            <h2>`+ nom + `</h2>
            <img src="`+ img + `">
            <div id="desc">
                <p>`+ desc + `</a>
                <table>
                    <tr>
                        <td style="padding-right:10px">
                            <label>Precio: </label>
                            `+tprecio+`
                        </td>
                        <td style="padding-right:10px;padding-left:100px">
                            <labelx>Valoración: </label>
                            `+tval+`
                        </td>
                    </tr>
                </table>
            </div>
        </div>`;
    var c = document.getElementById("codigo");
    c.innerHTML = texto;

    $('#popup-hotel').fadeIn('slow');
    $('.popup-overlay').fadeIn('slow');
    $('.popup-overlay').height($(window).height());
}

function cerrarpopup() {
    $('#popup-hotel').fadeOut('slow');
    $('.popup-overlay').fadeOut('slow');
}

async function getHoteles() {
    let url = 'js/hoteles.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function printHoteles() {
    let hoteles = await getHoteles();
    let html = '';

    hoteles.forEach(hotel => {
        let tval = pintar(hotel.puntuacio);
        let tprecio = pintar(hotel.preu.import);
        
        let htmlSegment =
            `<div class="hotel" onclick="abrirpopup('${hotel.nom}','${hotel.icones[0]}','${hotel.descripcio}',
            '${hotel.preu.import}', '${hotel.puntuacio}')">
            <table>
                <tr>
                    <td>
                        <img src="${hotel.icones[0]}">
                    </td>
                    <td>
                        <h2>${hotel.nom}</h2>
                        <p>${hotel.descripcio}</a>
                        <table>
                            <tr>
                                <td style="padding-right:10px">
                                    <label for="input-3" class="control-label">Precio: </label>
                                    `+tprecio+`
                                </td>
                                <td style="padding-right:10px; padding-left:10%">
                                    <label for="input-3" class="control-label">Valoración: </label>
                                    `+tval+`
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>`;

        html += htmlSegment;
    });
    let container = document.querySelector('#lista-hoteles');
    container.innerHTML = html;
}

function pintar(num){
    let codigo = '';
    var i = 0;
    while (i<num){
        codigo += '<span class="fa fa-star checked"></span>'
        i++;
    }
    while(i<5){
        codigo += '<span class="fa fa-star"></span>'
        i++
    }
    return codigo;
}

/* mostrar-ocultar */

function muestraOculta(id) {
    var elemento = document.getElementById('contenidos_' + id);
    var enlace = document.getElementById('enlace_' + id);

    if (elemento.style.display == "" || elemento.style.display == "block") {
        elemento.style.display = "none";
        enlace.innerHTML = 'Mostrar contenidos';
    }
    else {
        elemento.style.display = "block";
        enlace.innerHTML = 'Ocultar contenidos';
    }
}