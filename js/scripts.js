$(document).ready(function () {
    $('#open').on('click', function () {
        $('#popup').fadeIn('slow');
        $('.popup-overlay').fadeIn('slow');
        document.getElementById("popup-overlay").style.width = "100%";
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
        document.getElementById("popup-overlay").style.width = "100%";
        return false;
    });

    $('#close2').on('click', function () {
        $('#popup2').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
        return false;
    });
});

function abrirpopup(nom, img, desc, precio, valoracion, longitud, latitud) {
    let tval = pintar(valoracion);
    let tprecio = pintar(precio);

    var texto =
        `<div>
            <h2>`+ nom + `</h2>
            <div class="desc">
                <table>
                    <tr>
                        <td>
                            <img src="`+ img + `">
                        </td>
                        <td>
                            <p>`+ desc + `</p>
                            <table>
                                <tr>
                                    <td style="padding-right:10px">
                                        <label>Precio: </label>
                                        `+ tprecio + `
                                    </td>
                                    <td style="padding-right:10px; padding-left:10%">
                                        <label>Valoración: </label>
                                        `+ tval + `
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <hr style="margin:1rem 0;width:98%">
                <table> 
                    <tr>
                        <td>
                            <div id='map' style='width: 400px; height: 300px; '></div>
                        </td>
                        <td>
                            <div id="openweathermap-widget-15"></div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>`;

    var c = document.getElementById("codigo");
    c.innerHTML = texto;
    crearMapa(longitud, latitud);
    crearTiempo();

    $('#popup-hotel').fadeIn('slow');
    $('.popup-overlay').fadeIn('slow');
    document.getElementById("overlay").style.width = "100%";
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
        let htmlSegment = crearDivHotel(hotel.geoposicionament1.city, hotel.preu.import, hotel.dadesPropies.estrellas, hotel.puntuacio, hotel.dadesPropies.extras);
        htmlSegment +=
            ` onclick="abrirpopup('${hotel.nom}','${hotel.icones[0]}','${hotel.descripcio}',
            '${hotel.preu.import}', '${hotel.puntuacio}', '${hotel.geoposicionament1.long}', '${hotel.geoposicionament1.lat}')">
                <table>
                    <tr>
                        <td>
                            <img src="${hotel.icones[0]}">
                        </td>
                        <td>
                            <h2>${hotel.nom}</h2>
                            <p>${hotel.descripcio}</p>
                            <table>
                                <tr>
                                    <td style="padding-right:10px">
                                        <label for="input-3" class="control-label">Precio: </label>
                                        `+ tprecio + `
                                    </td>
                                    <td style="padding-right:10px; padding-left:10%">
                                        <label for="input-3" class="control-label">Valoración: </label>
                                        `+ tval + `
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

function pintar(num) {
    let codigo = '';
    var i = 0;
    while (i < num) {
        codigo += '<span class="fa fa-star checked"></span>'
        i++;
    }
    while (i < 5) {
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

function crearMapa(longitud, latitud) {
    mapboxgl.accessToken = 'pk.eyJ1IjoicGFjb2J1eW8iLCJhIjoiY2tvYmt4d2pjMGhpaTJwb2RwYzZ6bnB3byJ9.AvkluL71BHQMl_N0EZx7xA';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [longitud, latitud],
        zoom: 12
    });

    // Set options
    var marker = new mapboxgl.Marker({
        color: "#FF0000"
    }).setLngLat([longitud, latitud])
        .addTo(map);
}

function crearTiempo() {
    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
    window.myWidgetParam.push({ id: 15, cityid: '2512935', appid: 'a4d03e4faf79fe8e453dcdd13174dea9', units: 'metric', containerid: 'openweathermap-widget-15', });
    (function () {
        var script = document.createElement('script');
        script.async = true;
        script.charset = "utf-8";
        script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script, s);
    })();
}

function getIDCiudad(ciudad) {
    //Buscar dentro del JSON de ciudades españolas el ID de la ciudad que le pasemos por parámetro
}

function crearDivHotel(zona, precio, estrellas, valoracion, extras) {
    var extra = "";
    var arrayExtras = extras.map(o => Object.values(o))[0];
    if (arrayExtras[0] === 1) {
        extra += " todo_incluido";
    }
    if (arrayExtras[1] == 1) {
        extra += " wifi";
    }
    if (arrayExtras[2] == 1) {
        extra += " suites";
    }
    if (arrayExtras[3] == 1) {
        extra += " nevera";
    }
    if (arrayExtras[4] == 1) {
        extra += " piscina";
    }
    if (arrayExtras[5] == 1) {
        extra += " aparcamiento";
    }
    return `<div class= "` + zona + ` ` + precio + 'precio' + ` ` + estrellas + 'estrellas' + ` ` + valoracion + 'valoracion' + `` + extra + `"`;
}

function actualizaFiltros() {
    var zona = document.querySelectorAll("#zona-collapse input[type='checkbox']");
    var precio = document.querySelectorAll("#precio-collapse input[type='checkbox']");
    var estrella = document.querySelectorAll("#categoria-collapse input[type='checkbox']");
    var valoracion = document.querySelectorAll("#valoracion-collapse input[type='checkbox']");
    var extra = document.querySelectorAll("#extras-collapse input[type='checkbox']");
    var filters = {
        zonas: getClassOfCheckedCheckboxes(zona),
        precios: getClassOfCheckedCheckboxes(precio),
        estrellas: getClassOfCheckedCheckboxes(estrella),
        valoraciones: getClassOfCheckedCheckboxes(valoracion),
        extras: getClassOfCheckedCheckboxes(extra)
    };
    console.log(filters);
    filtrarBusqueda(filters);
}

function getClassOfCheckedCheckboxes(checkboxes) {
    var classes = [];

    if (checkboxes && checkboxes.length > 0) {
        for (var i = 0; i < checkboxes.length; i++) {
            var cb = checkboxes[i];

            if (cb.checked) {
                classes.push(cb.getAttribute("rel"));
            }
        }
    }

    return classes;
}

function filtrarBusqueda(filters) {
    var rElems = document.querySelectorAll("#lista-hoteles div");
    var hiddenElems = [];

    if (!rElems || rElems.length <= 0) {
        return;
    }

    for (var i = 0; i < rElems.length; i++) {
        var el = rElems[i];
        //Zonas
        if (filters.zonas.length > 0) {
            var isHidden = true;

            for (var j = 0; j < filters.zonas.length; j++) {
                var filter = filters.zonas[j];

                if (el.classList.contains(filter)) {
                    isHidden = false;
                    break;
                }
            }

            if (isHidden) {
                hiddenElems.push(el);
            }
        }
        //Precios
        if (filters.precios.length > 0) {
            var isHidden = true;

            for (var j = 0; j < filters.precios.length; j++) {
                var filter = filters.precios[j];

                if (el.classList.contains(filter)) {
                    isHidden = false;
                    break;
                }
            }

            if (isHidden) {
                hiddenElems.push(el);
            }
        }
        //Estrellas
        if (filters.estrellas.length > 0) {
            var isHidden = true;

            for (var j = 0; j < filters.estrellas.length; j++) {
                var filter = filters.estrellas[j];

                if (el.classList.contains(filter)) {
                    isHidden = false;
                    break;
                }
            }

            if (isHidden) {
                hiddenElems.push(el);
            }
        }
        //Valoracion
        if (filters.valoraciones.length > 0) {
            var isHidden = true;

            for (var j = 0; j < filters.valoraciones.length; j++) {
                var filter = filters.valoraciones[j];

                if (el.classList.contains(filter)) {
                    isHidden = false;
                    break;
                }
            }

            if (isHidden) {
                hiddenElems.push(el);
            }
        }
        //Extras
        if (filters.extras.length > 0) {
            var isHidden = true;

            for (var j = 0; j < filters.extras.length; j++) {
                var filter = filters.extras[j];

                if (el.classList.contains(filter)) {
                    isHidden = false;
                    break;
                }
            }

            if (isHidden) {
                hiddenElems.push(el);
            }
        }
    }

    for (var i = 0; i < rElems.length; i++) {
        rElems[i].style.display = "block";
    }

    if (hiddenElems.length <= 0) {
        return;
    }

    for (var i = 0; i < hiddenElems.length; i++) {
        hiddenElems[i].style.display = "none";
    }
}