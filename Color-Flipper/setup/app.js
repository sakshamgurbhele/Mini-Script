const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener('click', function(e){

    const number = 3;
    document.body.style.backgroundColor = colors[number];
    color.textContent = colors[number];

});

