function init() {
    document.getElementById("output").readOnly = true;
}

function input() {
    let text = document.getElementById("input").value
    let output = binary(text);
    document.getElementById("output").value = output;
}

function binary(text) {

}

function hex() {

}

function english() {

}

window.onload = init;