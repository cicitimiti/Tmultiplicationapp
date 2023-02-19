const questionE = document.getElementById("question");
const inputE = document.getElementById("input")
const formE = document.getElementById("form")
const scoreE = document.getElementById("score")

const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
    score = 0;
}

scoreE.innerText = `Score: ${score}`
questionE.innerText = `What is ${num1} Multiplied by ${num2}?`;

const correctA = num1 * num2;

formE.addEventListener("submit", () => {
    const userAns = +inputE.value
    if (userAns === correctA){
        score++;
        updateLocalStorage()
    }else {
        score--;
        updateLocalStorage()
    }
})

function updateLocalStorage(){
         localStorage.setItem("score", JSON.stringify(score))
}