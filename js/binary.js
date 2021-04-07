function init() {
    document.getElementById("output").readOnly = true;
}

function input() {
    let text = document.getElementById("input").value
    let output = binary(text);
    document.getElementById("output").value = output;
}

function binary(text) {
    let output = [""];
    let bytes = Math.floor(text.length / 8);
    let bits = text.length % 8;
    let result = 0;
        // if (bytes == 0) {
        //     for(let i=0; i < text.length; i++) {
        //         result = Math.pow(2, (text.length - ((bytes*8 + i) + 1)));
        //         dec += result;
        //     }
        // }
        // else {
        //     for(let i=0; i < bytes; i++) {
        //         alert("I: " +i)
        //         for(let j=0; j < 8; j++) {
        //             alert(j + " " + output)
        //             if (text.charAt((i*8 + j)) == "1") {
        //                 result = Math.pow(2, (text.length - ((i*8 + j) + 1)));
        //                 dec += result
        //                 output[i] = dec;
        //             }
        //             else {
        //                 continue;
        //             }
        //         }
        //         output.push(dec);
        //         console.log(output)
        //     }
        //     for(let i=0; i < bits; i++) {
        //         result = Math.pow(2, (text.length - ((bytes*8 + i) + 1)));
        //         dec += result;
        //         output[bytes+1] = dec;
        //     }
        // }

        for(i=0;i<bytes;i++) {
            let dec = 0;
            for(j=0;j<8;j++) {
                result = Math.pow(2, (8 - (j + 1)));
                dec += result;
                output[i] = i+ ": "+dec;
            }
        }

    if (document.getElementById("ODecimal").selected == true) {
        return dec;
    }
    else {
        return output;
    }
}

function hex(text) {
    let output = 0;
    for(i = 0; i < text.length; i++) {
        switch (text.charAt(i).toLowerCase()) {
            case "1":
                output += (Math.pow(16, (text.length - (i + 1))) * 1);
                break;
            case "2":
                output += (Math.pow(16, (text.length - (i + 1))) * 2);
                break;
            case "3":
                output += (Math.pow(16, (text.length - (i + 1))) * 3);
                break;
            case "4":
                output += (Math.pow(16, (text.length - (i + 1))) * 4);
                break;
            case "5":
                output += (Math.pow(16, (text.length - (i + 1))) * 5);
                break;
            case "6":
                output += (Math.pow(16, (text.length - (i + 1))) * 6);
                break;
            case "7":
                output += (Math.pow(16, (text.length - (i + 1))) * 7);
                break;
            case "8":
                output += (Math.pow(16, (text.length - (i + 1))) * 8);
                break;
            case "9":
                output += (Math.pow(16, (text.length - (i + 1))) * 9);
                break;
            case "a":
                output += (Math.pow(16, (text.length - (i + 1))) * 10);
                break;
            case "b":
                output += (Math.pow(16, (text.length - (i + 1))) * 11);
                break;
            case "c":
                output += (Math.pow(16, (text.length - (i + 1))) * 12);
                break;
            case "d":
                output += (Math.pow(16, (text.length - (i + 1))) * 13);
                break;
            case "e":
                output += (Math.pow(16, (text.length - (i + 1))) * 14);
                break;
            case "f":
                output += (Math.pow(16, (text.length - (i + 1))) * 15);
                break;
        
            default:
                output += 0;
                break;
        }
    }
    return output;
}

function english(text) {
    let output = 0;
    for(i = 0; i < text.length; i++) {
        output += text.charCodeAt(i);
    }
    return output;
}

function decimal(text) {

}

window.onload = init;