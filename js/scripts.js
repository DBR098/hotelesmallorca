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
        let htmlSegment = `<div class="hotel">
                            <img src="${hotel.icones[0]}">
                            <h2>${hotel.nom}</h2>
                            <a>${hotel.descripcio}</a>
                        </div>`;
        html += htmlSegment;
    });
    let container = document.querySelector('#lista-hoteles');
    container.innerHTML = html;
}