var counter = 0;
const counterDisplay = document.querySelector(".counter-display");
const btns = document.querySelectorAll("button");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;

        if(styles.contains("decrease")) {
            counter--;
        } else if(styles.contains("increase")){
            counter++
        } else {
            counter = 0;
        }

        if(counter > 0){
            counterDisplay.style.color = "#3AFC93"
        }
        if (counter < 0){
            counterDisplay.style.color = "#E95353"
        } 
        if(counter === 0){
            counterDisplay.style.color = "white"
        }

        counterDisplay.textContent = counter;
    })
})