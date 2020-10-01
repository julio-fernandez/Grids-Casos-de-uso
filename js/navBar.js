function cbCambiarUrl() {
    var cbVal = document.getElementById('cbWebUrl').value;
    var url = "";


    switch (cbVal) {
        case "1":
            url = "1.html";
            break;
        case "2":
            url = "2.html";
            break;
        case "3":
            url = "3.html";
            break;
        case "4":
            url = "4.html";
            break;
        case "5":
            url = "5.html";
            break;
        case "6":
            url = "6.html";
            break;
        case "7":
            url = "7.html";
            break;
        case "8":
            url = "8.html";
            break;
        case "9":
            url = "9.html";
            break;
        case "10":
            url = "10.html";
            break;
        case "11":
            url = "conclusion.html";
            break;
    }

    window.location.href = url;
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var boxes = document.getElementsByClassName("box-a");
Array.from(boxes).forEach((el) => {
    // Do stuff here
    //console.log(el.tagName);
    el.style.backgroundColor = getRandomColor();
});