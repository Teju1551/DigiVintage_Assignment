var slider = document.getElementById("slider");
var slider1 = document.getElementById("slider1");
var slider2 = document.getElementById("slider2");
var selector = document.getElementById("selector");
var selector1 = document.getElementById("selector1");
var selector2 = document.getElementById("selector2");
var SelectValue = document.getElementById("SelectValue");
var SelectValue1 = document.getElementById("SelectValue1");
var SelectValue2 = document.getElementById("SelectValue2");

/* for 0 */
SelectValue.innerHTML = slider.value;

slider.oninput = function(){
    SelectValue.innerHTML = this.value;
    selector.style.left = this.value + "%";
    ProgressBar.style.width = this.value + "%";
}

/* for 1 */
SelectValue1.innerHTML = slider1.value;

slider1.oninput = function(){
    SelectValue1.innerHTML = this.value;
    selector1.style.left = this.value + "%";
    ProgressBar.style.width = this.value + "%";
}

/* for 2 */
SelectValue2.innerHTML = slider2.value;

slider2.oninput = function(){
    SelectValue2.innerHTML = this.value;
    selector2.style.left = this.value + "%";
    ProgressBar.style.width = this.value + "%";
}
