// ======================================
// GRÁFICO INTERACTIVO CON p5.js
// ======================================

let canvas;

function setup() {

    canvas = createCanvas(600, 350);

    canvas.parent("canvas-container");

    background(33, 37, 41);
}


function draw() {

    background(33, 37, 41);

    // Ejes
    stroke(150);
    strokeWeight(1);

    // Eje X
    line(0, height / 2, width, height / 2);

    // Eje Y
    line(width / 2, 0, width / 2, height);

    // Curva matemática
    noFill();
    stroke(13, 110, 253);
    strokeWeight(3);

    beginShape();

    for (let x = -width / 2; x < width / 2; x++) {

        // Convertimos las coordenadas
        // para que el origen esté en el centro
        let xReal = x / 50;

        // Función y = x²
        let yReal = xReal * xReal;

        let px = width / 2 + x;
        let py = height / 2 - yReal * 30;

        vertex(px, py);
    }

    endShape();


    // Punto controlado por el mouse
    let mouseXReal = (mouseX - width / 2) / 50;

    let mouseYReal = mouseXReal * mouseXReal;

    let pointX = width / 2 + (mouseXReal * 50);
    let pointY = height / 2 - (mouseYReal * 30);

    fill(255, 193, 7);
    noStroke();

    circle(pointX, pointY, 15);


    // Texto
    fill(255);
    textSize(16);

    text(
        "Función: y = x²",
        20,
        30
    );

    text(
        "x = " + mouseXReal.toFixed(2),
        20,
        55
    );

    text(
        "y = " + mouseYReal.toFixed(2),
        20,
        80
    );
}


// Ajustar el canvas cuando cambia el tamaño de la ventana
function windowResized() {

    let container = document.getElementById("canvas-container");

    let nuevoAncho = Math.min(600, container.clientWidth - 40);

    resizeCanvas(nuevoAncho, 350);
}
s