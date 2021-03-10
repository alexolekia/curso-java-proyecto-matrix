const element = document.querySelector("#canvas");

const w = document.body.clientWidth;
const h = document.body.clientHeight;

const ls = 12;

element.width = w;
element.height = h;

const number_of_elements = Math.floor(w / ls);
//console.log(number_of_elements);
const position = Array(number_of_elements).join(0).split("");
const saludo = "OLEKIA".split("");
const len = saludo.length;
//console.log(saludo, saludo.length);

const context = canvas.getContext("2d");



const initMatrix = () => {

    context.fillStyle = "rgba(0,15,2,0.2)";
    context.fillRect(0, 0, w, h);
    context.fillStyle = "#4caf50";
    //context.fillStyle = "#0000FF";
    context.font = "16px roboto";

    position.map(
        (y, index) => {
            //const text = String.fromCharCode(1e3 + Math.random() * 30);
            const text = saludo[Math.floor(Math.random() * len)];
            const x = (index * ls) + ls;

            //canvas.getContext("2d").fillText(text, x, y);
            context.fillText(text, x, y);

            y > 100 + Math.random() * 1e5 ? (position[index] = 0) : (position[index] = y + ls);
            //y > h ? (position[index] = 0) : (position[index] = y + 15);
        }
    );


};

setInterval(initMatrix,70);