let count = 0;

const btns = document.querySelector(".btn");
const value = document.querySelector("#value");

btns.forEach(function (btn){
    btns.document.addEventListener("click", function (e){
        const style = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
          } else if (styles.contains("increase")) {
            count++;
          } else {
            count = 0;
          }
      
          if (count > 0) {
            value.style.color = "green";
          }
          if (count < 0) {
            value.style.color = "red";
          }
          if (count === 0) {
            value.style.color = "#222";
          }
          value.textContent = count;
        });
});