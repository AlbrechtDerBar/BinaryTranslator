function init() {
    document.getElementById("output").readOnly = true;
}

function input() {
    let text = document.getElementById("input").value
    let output = binary(text);
    document.getElementById("output").value = output;
}

function binary(text) {
 let output = 0;
    for(i = 0; i < text.length; i++) {
        if (text.charAt(i) == "1") {
            output += Math.pow(2, (text.length - (i + 1)));
        }
        else {
            continue;
        }
    }

    return output
}

function hex(text) {

}

function english(text) {

}

function decimal(text) {

}

window.onload = init;