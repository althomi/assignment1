
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
<<<<<<< Updated upstream

function animate1() {
    timeout = setInterval(function () {
        let canvas = document.getElementById("canvasNextEmployee");
        var canvasRect = canvas.getContext("2d");
        canvasRect.font = "200px Changa One,  cursive";
        canvasRect.fillStyle = "red";
        canvasRect.fillText("I", 10, 180);
        }, 1000)
};
animate1();

function animate2() {
<<<<<<< Updated upstream
    /*setTimeout(animate, 2000)*/

=======
<<<<<<< HEAD

function animate1() {
=======

function animate1() {
    /*setTimeout(animate, 2000)*/

>>>>>>> e3d91e7b06312ed63383dfab73aaa6d0e4d7535f
    timeout = setInterval(function () {
        let canvas = document.getElementById("canvasNextEmployee");
        var canvasRect = canvas.getContext("2d");
        canvasRect.font = "200px Changa One,  cursive";
        canvasRect.fillStyle = "red";
        canvasRect.fillText("I", 10, 180);
        }, 1000)
};
animate1();

<<<<<<< HEAD

function animate2() {
=======
function animate2() {
    /*setTimeout(animate, 2000)*/

>>>>>>> e3d91e7b06312ed63383dfab73aaa6d0e4d7535f
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    timeout = setInterval(function () {
        let canvas = document.getElementById("canvasNextEmployee");
        var canvasRect = canvas.getContext("2d");
        canvasRect.font = "200px Changa One,  cursive";
        canvasRect.fillStyle = "red";
        canvasRect.fillText( " NEED ", 100, 180);
    }, 2000)
};
animate2();
<<<<<<< Updated upstream

=======

<<<<<<< HEAD

=======
>>>>>>> e3d91e7b06312ed63383dfab73aaa6d0e4d7535f
>>>>>>> Stashed changes
function animate3() {
    timeout = setInterval(function () {
        let canvas = document.getElementById("canvasNextEmployee");
        var canvasRect = canvas.getContext("2d");
        canvasRect.font = "200px Changa One,  cursive";
        canvasRect.fillStyle = "red";
        canvasRect.fillText( "YOU!", 640, 180);
    }, 3000)
};
animate3();





