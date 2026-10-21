/* =========================================
   VARIABLES
========================================= */

let canvas;

let sliderC;
let sliderK;

let valorC = 2;
let valorK = 0.3;


/* =========================================
   CONFIGURACIÓN
========================================= */

function setup() {

    canvas = createCanvas(700, 430);

    canvas.parent("canvas-container");

    sliderC =
        document.getElementById("valorC");

    sliderK =
        document.getElementById("valorK");

}


/* =========================================
   GRÁFICA
========================================= */

function draw() {

    background(2, 6, 23);

    /*
        Leer parámetros
    */

    valorC =
        parseFloat(sliderC.value);

    valorK =
        parseFloat(sliderK.value);


    /*
        Actualizar valores HTML
    */

    document.getElementById("mostrarC")
        .textContent =
        valorC.toFixed(1);

    document.getElementById("mostrarK")
        .textContent =
        valorK.toFixed(2);


    /*
        Sistema de coordenadas
    */

    let margen = 55;

    let xInicio = margen;
    let xFinal = width - margen;

    let yCentro = height - margen;


    /*
        Ejes
    */

    stroke(100, 116, 139);

    strokeWeight(1);

    line(
        xInicio,
        yCentro,
        xFinal,
        yCentro
    );

    line(
        xInicio,
        30,
        xInicio,
        yCentro
    );


    /*
        Líneas horizontales
    */

    stroke(
        30,
        41,
        59
    );

    for (
        let y = 50;
        y < yCentro;
        y += 50
    ) {

        line(
            xInicio,
            y,
            xFinal,
            y
        );

    }


    /*
        Etiquetas
    */

    fill(148, 163, 184);

    noStroke();

    textSize(13);

    text(
        "t",
        xFinal + 10,
        yCentro + 5
    );

    text(
        "y",
        xInicio - 5,
        25
    );


    /*
        Dibujar solución
       
        y(t) = C e^(kt)
    */

    noFill();

    stroke(
        56,
        189,
        248
    );

    strokeWeight(3);

    beginShape();


    for (
        let px = xInicio;
        px <= xFinal;
        px++
    ) {

        let t =
            map(
                px,
                xInicio,
                xFinal,
                0,
                5
            );

        let y =
            valorC *
            Math.exp(valorK * t);


        /*
            Escala vertical
        */

        let py =
            yCentro -
            y * 45;


        /*
            Evitar valores fuera
            del canvas
        */

        if (
            py >= 30 &&
            py <= yCentro
        ) {

            vertex(
                px,
                py
            );

        }

    }

    endShape();


    /*
        Punto inicial
    */

    let puntoX =
        xInicio;

    let puntoY =
        yCentro -
        valorC * 45;


    fill(251, 191, 36);

    noStroke();

    circle(
        puntoX,
        puntoY,
        12
    );


    /*
        Texto de la ecuación
    */

    fill(226, 232, 240);

    textSize(17);

    text(
        "y(t) = " +
        valorC.toFixed(1) +
        "e^(" +
        valorK.toFixed(2) +
        "t)",
        75,
        35
    );


    /*
        Tipo de comportamiento
    */

    textSize(14);

    if (valorK > 0) {

        fill(74, 222, 128);

        text(
            "Crecimiento exponencial",
            75,
            60
        );

    } else if (valorK < 0) {

        fill(251, 146, 60);

        text(
            "Decrecimiento exponencial",
            75,
            60
        );

    } else {

        fill(250, 204, 21);

        text(
            "Solución constante",
            75,
            60
        );

    }

}


/* =========================================
   RESPONSIVE
========================================= */

function windowResized() {

    let container =
        document.getElementById(
            "canvas-container"
        );

    let nuevoAncho =
        Math.min(
            700,
            container.clientWidth - 30
        );

    resizeCanvas(
        nuevoAncho,
        430
    );

}
