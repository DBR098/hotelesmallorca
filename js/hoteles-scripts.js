/*--valor rango valoracion--*/
/*
var slider = document.getElementById("rango");
var output = document.getElementById("valor");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
*/

function Add(nombre, imghotel, texto) {
	var txt = '', 
		nomHotel = document.getElementById("nomHotel"),
		img = document.getElementById("img"),
		desc = document.getElementById("descripcion");
	
	nomHotel.innerHTML = nombre;
	img.innerHTML = '<img src="' + imghotel + '" width="300px" height="300px">';
	img.style = "margin:0;display:inline";	
	desc.innerHTML = texto;
	desc.style = "margin:0;display:inline";	
}

/*--botón menu--*/
var menu_btn = document.querySelector("#menu-btn")
var sidebar = document.querySelector("#sidebar")
var container = document.querySelector(".my-container")
menu_btn.addEventListener("click", () => {
  sidebar.classList.toggle("active-nav")
  container.classList.toggle("active-cont")
})

/*--rango precio--*/
var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");

var v1 = document.getElementById("val-left");
var v2 = document.getElementById("val-right");

function setLeftValue() {
	var _this = inputLeft,
	min = parseInt(_this.min),
	max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value));

  v1.innerHTML = _this.value;

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbLeft.style.left = percent + "%";
	range.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
	var _this = inputRight,
	min = parseInt(_this.min),
	max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value));

  v2.innerHTML = _this.value;

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbRight.style.right = (100 - percent) + "%";
	range.style.right = (100 - percent) + "%";
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

inputLeft.addEventListener("mouseover", function() {
	thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", function() {
	thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", function() {
	thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", function() {
	thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", function() {
	thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", function() {
	thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", function() {
	thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", function() {
	thumbRight.classList.remove("active");
});

/*--rango valoración--*/
var inputLeft2 = document.getElementById("input-left2");
var inputRight2 = document.getElementById("input-right2");

var thumbLeft2 = document.querySelector(".slider2 > .thumb.left");
var thumbRight2 = document.querySelector(".slider2 > .thumb.right");
var range2 = document.querySelector(".slider2 > .range");

var v3 = document.getElementById("val-left2");
var v4 = document.getElementById("val-right2");

function setLeftValue2() {
	var _this = inputLeft2,
	min = parseInt(_this.min),
	max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(inputRight2.value));

  v3.innerHTML = _this.value;

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbLeft2.style.left = percent + "%";
	range2.style.left = percent + "%";
}
setLeftValue2();

function setRightValue2() {
	var _this = inputRight2,
	min = parseInt(_this.min),
	max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft2.value));

  v4.innerHTML = _this.value;

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbRight2.style.right = (100 - percent) + "%";
	range2.style.right = (100 - percent) + "%";
}
setRightValue2();

inputLeft2.addEventListener("input", setLeftValue2);
inputRight2.addEventListener("input", setRightValue2);

inputLeft2.addEventListener("mouseover", function() {
	thumbLeft2.classList.add("hover");
});
inputLeft2.addEventListener("mouseout", function() {
	thumbLeft2.classList.remove("hover");
});
inputLeft2.addEventListener("mousedown", function() {
	thumbLeft2.classList.add("active");
});
inputLeft2.addEventListener("mouseup", function() {
	thumbLeft2.classList.remove("active");
});
