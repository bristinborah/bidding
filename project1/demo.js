let button = document.querySelector("button");
let h4 = document.querySelector("h4");
let input = document.querySelector("input");
let h5 = document.querySelector("h5")

button.addEventListener('click', () => {
    if (h5.innerHTML = input.value > 24) {
        console.log("YOU won the bid")
    }
    else {
        console.log("you lost the bid")
    }

})