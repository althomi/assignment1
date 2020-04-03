
//DOM Manipulation1: Button UI Interaktion
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");



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

//DOM Manipulation2: Show Overlay by Interaction



function animate() {
    /*setTimeout(animate, 2000)*/

    setTimeout(function () {
        let canvas = document.getElementById("canvasNextEmployee");
        var canvasRect = canvas.getContext("2d");
        canvasRect.beginPath();
        canvasRect.rect(250, 200, 200, 200);
        canvasRect.stroke();
        canvasRect.font = "30px Franklin Gothik Demi Bold";
        canvasRect.fillStyle = "red";
        canvasRect.fillText("I Need You!", 10, 50);
        }, 2000)

};
animate();


/*
var start = 0;
var end = 500;
for (y = start; y < end; y++) {
window.setTimeout(function () {
    canvasRect.font = "30px Franklin Gothik Demi Bold";
    canvasRect.fillStyle = "red";
    canvasRect.fillText("I Need You!", 10, 50);
};*/


