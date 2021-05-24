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
        document.getElementById("overlay").style.width = "100%";
        return false;
    });

    $('#close2').on('click', function () {
        $('#popup2').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
        return false;
    });
});

function abrirpopup(nom, media, desc, precio, valoracion, estrellas, ciudad, longitud, latitud, twitter, facebook, instagram, web, telefono, correo) {
    let tval = pintar(valoracion);
    let tprecio = pintar(precio);
    let testrellas = pintar(estrellas);

    let ticonos = '';

    if (twitter != "") {
        ticonos += `<a href="${twitter}" target="_blank" rel="noopener noreferrer"><img src="img/twitter.svg" height=80 alt="Nicegreen circle"/></a>`
    }
    if (facebook != "") {
        ticonos += `<a href="${facebook}" target="_blank" rel="noopener noreferrer"><img src="img/facebook.svg" height=80 alt="Nicegreen circle"/></a>`
    }
    if (instagram != "") {
        ticonos += `<a href="${instagram}" target="_blank" rel="noopener noreferrer"><img src="img/instagram.svg" height=90 alt="Nicegreen circle"/></a>`
    }
    if (web != "") {
        ticonos += `<a href="${web}" target="_blank" rel="noopener noreferrer"><img src="img/web.svg" height=70 alt="Nicegreen circle"/></a>`
    }

    var texto =
        `<div>
            <h2 align="center">`+ nom + `</h2>
            <div class="desc">
                <table>
                    <tr>
                        <td id="carrusel" style="width:40%">
                        </td>
                        <td id="datos">
                            <p>`+ desc + `</p>
                            <table>
                                <tr>
                                    <td>
                                        <label>Precio: </label>
                                        `+ tprecio + `
                                    </td>
                                    <td style="padding-right:7%; padding-left:7%">
                                        <label>Valoración: </label>
                                        `+ tval + `
                                    </td>
                                    <td>
                                        <label>Categoria: </label>
                                        `+ testrellas + `
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <hr style="margin:1rem 0;width:98%"> 
                <table> 
                    <tr>
                        <td align="center" style="width:70%">
                            <div id="map"></div>
                        </td>   
                        <td align="center" id="tiempo">
                            <div id="openweathermap-widget-15"></div>
                        </td>
                    </tr>
                </table>
                <hr style="margin:1rem 0;width:98%">
                <div class="iconos" align="center">
                    `+ ticonos + `
                </div>
                <hr style="margin:1rem 0;width:98%">
                <table> 
                    <tr>
                        <td align="center">
                            <p>Telefono de contacto: ${telefono}</p>
                        </td>
                        <td align="center">
                            <p>Correo electronico: <a type="email" href="mailto:${correo}">${correo}</a></p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>`;
    var c = document.getElementById("codigo");
    c.innerHTML = texto;
    crearMapa(longitud, latitud);
    crearTiempo(ciudad);
    var carrusel = document.getElementById("carrusel");
    carrusel.innerHTML = getMedia(media);

    $('#popup-hotel').fadeIn('slow');
    $('.popup-overlay').fadeIn('slow');
    document.getElementById("overlay").style.width = "100%";
}

function cerrarpopup() {
    $('#popup-hotel').fadeOut('slow');
    $('.popup-overlay').fadeOut('slow');
}

/* comentarios */

var coment = `<div class="comentario">
    <h2 align="center">Sebastian Rodriguez</h2>
    <hr style="margin:1rem 0;width:98%">
    <p style="margin:10px">Valoración: 2</p>
    <p style="margin:10px">Este hotel es demasiado caro para lo que ofrece. 
        No merece la pena teniendo otros hoteles más baratos y con mejores prestaciones.
    </p>
  </div>

  <div class="comentario">
    <h2 align="center">Paco Buyo</h2>
    <hr style="margin:1rem 0;width:98%">
    <p style="margin:10px">Valoración: 4</p>
    <p style="margin:10px">Este hotel es de los mejores en los que he estado. Muy recomendado.</p>
  </div>

  <div class="comentario">
    <h2 align="center">Alfredo Hernández</h2>
    <hr style="margin:1rem 0;width:98%">
    <p style="margin:10px">Valoración: 3</p>
    <p style="margin:10px">El hotel no esta mal, la atencion al cliente ha sido buena, pero creo que hay 
        mejores hoteles.</p>
  </div>`;
var coment2 = "";

function ponercomentarios() {
    var nom = document.getElementById("nombre").value;
    var val = document.getElementById("valoracion").value;
    var com = document.getElementById("comentario").value;

    if (nom != "" && com != "") {
        var coment3 = `<div class="comentario">
            <h2 align="center">`+ nom + `</h2>
            <hr style="margin:1rem 0;width:98%">
            <p style="margin:10px">Valoración: `+ val + `</p>
            <p style="margin:10px">`+ com + `</p>
        </div>` + coment2;
        coment2 = coment3;

        document.getElementById("nombre").value = "";
        document.getElementById("valoracion").value = "5";
        document.getElementById("comentario").value = "";

        coment3 += coment;
        var d = document.getElementById("lista-comentarios");
        d.innerHTML = coment3;
    }
}

function abrircomentarios(nom) {
    var texto =
        `<div>
            <h2 align="center">`+ nom + `</h2>
            <hr style="margin:1rem 0;width:98%">
            <div class="esc-comentario">
                <table>
                    <tr>
                        <td>
                            <p>Nombre de usuario: </p>
                        </td>

                        <td>
                            <p>Valoración del hotel: </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <input type="text" id="nombre" size="50%">
                        </td>
                        <td>
                            <select class="form-control" style="width:60%" id="valoracion">
                                <option value="5">5 estrellas</option>
                                <option value="4">4 estrellas</option>
                                <option value="3">3 estrellas</option>
                                <option value="2">2 estrellas</option>
                                <option value="1">1 estrellas</option>
                            </select>
                        </td>
                    </tr>
                </table>

                <div id="coment">
                    <p>Comentario:</p>
                    <textarea id="comentario" required></textarea>
                </div>

                <button type="button" id="botoncomentario" onclick="ponercomentarios()">Enviar comentario</button>
                <hr style="margin:1rem 0;width:98%"> 
            </div>
            
            <fieldset id="lista-comentarios"></fieldset>
        </div>`;

    var c = document.getElementById("contenido");
    c.innerHTML = texto;

    var d = document.getElementById("lista-comentarios");
    d.innerHTML = coment;

    $('#comentarios').fadeIn('slow');
    $('.popup-overlay').fadeIn('slow');
    document.getElementById("overlay").style.width = "100%";
}

function cerrarcomentarios() {
    coment2 = "";
    $('#comentarios').fadeOut('slow');
    $('.popup-overlay').fadeOut('slow');
}

async function getValuesJSON(url) {
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function printHoteles() {
    let hoteles = await getValuesJSON('js/hoteles.json');
    let html = '';

    hoteles.forEach(hotel => {
        let tval = pintar(hotel.puntuacio);
        let tprecio = pintar(hotel.preu.import);
        let testrellas = pintar(hotel.dadesPropies.estrellas);
        let htmlSegment =
            crearDivHotel(hotel.geoposicionament1.city, hotel.preu.import, hotel.dadesPropies.estrellas, hotel.puntuacio, hotel.dadesPropies.extras) + `>
                <table class="hotel">
                    <tr>
                        <td style="width:40%">
                            <img src="${hotel.icones[0]}">
                        </td>
                        <td>
                            <h2>${hotel.nom}</h2>
                            <br>
                            <label for="input-3" class="control-label">Precio: </label>`+ tprecio + `
                            <br>
                            <label for="input-3" class="control-label">Valoración: </label>`+ tval + `
                            <br>
                            <label>Categoria: </label>`+ testrellas + `
                            <br><br>
                            <button type="button" class="btn btn-sm btn-outline-secondary" onclick="abrirpopup('${hotel.nom}',['${hotel.icones[0]}', '${hotel.imatges[0]}', '${hotel.videos[0].url}'],'${hotel.descripcio}','${hotel.preu.import}', '${hotel.puntuacio}', 
                                '${hotel.dadesPropies.estrellas}', '${hotel.geoposicionament1.city}','${hotel.geoposicionament1.long}', '${hotel.geoposicionament1.lat}', 
                                '${hotel.contacte.xarxes.twitter}', '${hotel.contacte.xarxes.facebook}', '${hotel.contacte.xarxes.instagram}', '${hotel.contacte.xarxes.web}', 
                                '${hotel.contacte.telf}', '${hotel.contacte.email}')">Información</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary" onclick="abrircomentarios('${hotel.nom}')">Comentarios</button>
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

function muestraOculta(id) {
    var elemento = document.getElementById('resp_' + id);

    $('#preg_' + id + ' span').toggleClass("rotate");

    if (elemento.style.display == "" || elemento.style.display == "block") {
        elemento.style.display = "none";
    }
    else {
        elemento.style.display = "block";
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
    map.on('load', function () {
        map.resize();
    });
    var marker = new mapboxgl.Marker({
        color: "#FF0000"
    }).setLngLat([longitud, latitud])
        .addTo(map);
}

async function crearTiempo(ciudad) {
    let ciudades = await getValuesJSON('js/ciudadesESP.json');
    var id = 0;
    ciudades.forEach(city => {
        if (city.name == ciudad) {
            id = city.id;
        }
    });
    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
    window.myWidgetParam.push({ id: 15, cityid: id, appid: 'a4d03e4faf79fe8e453dcdd13174dea9', units: 'metric', containerid: 'openweathermap-widget-15', });
    (function () {
        var script = document.createElement('script');
        script.async = true;
        script.charset = "utf-8";
        script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script, s);
    })();
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
        console.log(el.className);
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

function getPopup(numhotel) {
    switch (numhotel) {
        case 1:
            abrirpopup("Sant Francesc Hotel Singular", ["https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/35/81/3581670_v12.jpeg", "https://mk0abcmallorca71dgvy.kinstacdn.com/wp-content/uploads/2015/09/Cuidada-decoracion.jpg", "https://www.youtube.com/embed/L_O0KnUD4hI"], 
                "Sant Francesc Hotel Singular Palma es un Hotel boutique de 5 estrellas, ubicado en una casa señorial neoclásica del S.XIX, en pleno casco antiguo de la ciudad de Palma de Mallorca. Cuenta con 42 habitaciones y suites. En el interior se descubre una decoración cálida y sofisticada. La situación del hotel lo hace ideal para disfrutar la ciudad a pie, así como el resto de la isla de Mallorca.",
                1, 5, 5, "Palma", 2.652615329251165, 39.56900350156376, "https://twitter.com/hotelstfrancesc", "https://www.facebook.com/hotelsantfrancesc", "https://www.instagram.com/hotelsantfrancesc", "https://www.hotelsantfrancesc.com",
                971495000, "INFO@HOTELSANTFRANCESC.COM");
            break;
        case 2:
            abrirpopup("Boutique Hotel Can Alomar", ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/47/79/32/luxury-boutique-hotel.jpg?w=1200&h=-1&s=1", "https://www.boutiquehotelcanalomar.com/backoffice/uploadImages/HOME_02.jpg", "https://www.youtube.com/embed/CgtaXEfl83U"],
                "El Boutique Hotel Can Alomar de 5 estrellas se encuentra ubicado en el edificio del mismo nombre, una antigua casa señorial urbana, catalogada y protegida, de interés histórico, artístico y arquitectónico y gran valor Patrimonial. El hotel dispone de 16 amplias y luminosas habitaciones decoradas dentro de un diseño moderno, un restaurante gastronómico de cocina fusión mediterránea, japonesa, peruana y una terraza solarium para uso exclusivo de los huéspedes del hotel.",
                1, 5, 5, "Palma", 2.646164755620548, 39.57003181501989, "https://twitter.com/hotelcanalomar", "https://www.facebook.com/boutiquehotelcanalomar", "https://www.instagram.com/itmallorcahotels", "https://www.boutiquehotelcanalomar.com",
                871592002, "info@boutiquehotelcanalomar.com");
            break;
        case 3:
            abrirpopup("Hipotels Playa de Palma Palace", ["https://www.hipotels.com/content/imgsxml/panel_slideinterior/playadepalmapalace-portada1237.jpg", "https://www.detectahotel.com/himg/74/63/a7/arbisoftimages-3652772-hipotels_playadepalmapalace_bar_spa1-image.jpg", "https://www.youtube.com/embed/plh8n0Jrs6Q"],
                "El Hipotels Playa de Palma Palace es un espectacular hotel de 5 estrellas ubicado en Playa de Palma, Mallorca. Un hotel de nueva construcción ideal para vacaciones o negocios, con un lujoso spa y precios especiales para jugar al golf. Un interior moderno y elegante con habitaciones amplias de diseño, que te ofrecerán unas vacaciones perfectas con toda la oferta de ocio complementaria de Playa de Palma. No puedes perderte visitar la zona chill out en el último piso del hotel, nuestro Heaven Rooftop Bar con unas vistas únicas a la Bahía de Palma y una puesta de sol que, acompañada de un refrescante cóctel y música en directo, se convertirá en uno de los momentos inolvidables de tus vacaciones.",
                2, 5, 5, "Palma", 2.749959252355224, 39.514941917153024, "https://twitter.com/hipotels", "https://www.facebook.com/Hipotels", "https://www.instagram.com/hipotels", "https://www.hipotels.com/hoteles/playadepalmapalace",
                971260528, "playadepalmapalace@hipotels.com");
            getMedia(["ejemplo.jpg", "ejemplo.jpg", "ejemplo.mp4", "ejemplo.jpg"]);
            break;
    }

}

function getMedia(media) {
    if (media.length == 0) {
        console.log("Media not found!");
        return;
    }
    var text =
        `<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="`+ media[0] + `">
            </div>
            `;
    for (var i = 1; i < media.length; i++) {
        if (getExtension(media[i]) == "jpg") {
            text +=
                ` <div class="carousel-item">
                    <img src="`+ media[i] + `">
                </div>
            `;
        }
        else {
            text +=
                `<div class="carousel-item">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="`+ media[i] + `" allowfullscreen></iframe>
                    </div>
                </div >
                `;
        }
    }
    return text;
}

function getExtension(filename) {
    var parts = filename.split('.');
    return parts[parts.length - 1];
}
