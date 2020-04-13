
//DOM Manipulation1: Button UI Interaktion
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let timeout;


button1.addEventListener("click", function () {
    button1.style.backgroundColor="#0537CC";
});

button2.addEventListener("mouseover", function () {
    button2.style.backgroundColor="#0537CC";
});

button3.addEventListener("mouseover", function () {
    button3.style.backgroundColor="#0537CC";

});
button3.addEventListener("mouseout", function () {
    button3.style.backgroundColor="black";
});

button4.addEventListener("mouseover", function () {
    button4.style.borderStyle="solid";
    button4.style.borderColor="#0537CC";
    button4.style.color="#0537CC";
})
button4.addEventListener("mouseout", function () {
    button4.style.borderStyle="none";
    button4.style.color="white";
})

//DOM Manipulation2: Animation with Canvas inklusive settimeout
function drawCanvas(text, xPos, yPos) {
       let canvas = document.getElementById("canvasNextEmployee");
       var canvasRect = canvas.getContext("2d");
       canvasRect.font = "200px Changa One";
       canvasRect.fillStyle = "red";
       canvasRect.fillText(text, xPos, yPos);
    }

    function animate1(text, xPos, yPos) {
    timeout = setTimeout(function () {
         drawCanvas("I", 10, 180)
    }, 1000)};

animate1();

function animate2(text, xPos, yPos) {
    timeout = setTimeout(function () {
        drawCanvas("NEED", 120, 180)
    }, 2000)};
animate2();

function animate3(text, xPos, yPos) {
    timeout = setTimeout(function () {
        drawCanvas("YOU", 640, 180)
    }, 3000)};
animate3();


/*3 Manipulation with AJAX: fetching data from server*/
    var ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
    ajax.onload = function(){
        console.log(ajax.responseText);
    };
    ajax.send()


/*4 Manipulation with AJAX: printing data to the web page from other server*/

var ajaxOutput = document.getElementById("ajax");
var ajaxButton = document.getElementById("button3d");
ajaxButton.addEventListener("click", function httprequest(event) {
    event.preventDefault();
    ajax.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
    ajax.onload = function(){
        var mydata = JSON.parse(ajax.responseText);
        createHTML(mydata)
    };
    ajax.send();
});

function createHTML(data) {
    let html = "<div>";
    for (let i=0; i<data.length; i++){
        html += "<p>" + data[i].name + "</p>";  //adds a paragraph for each data object from the json file + outputs name of object: name acceses the name value in the object
    }
    html += "</div>";
    ajaxOutput.insertAdjacentHTML("beforeend", html);
}

/*Manipulation 5: Add a click counter and show UI Manipulaton depending on it*/
var pageCounter = 1;
button1.addEventListener("click", function () {
    pageCounter++;
    if (pageCounter >2){
        button1.style.backgroundColor="red";
    }
});




