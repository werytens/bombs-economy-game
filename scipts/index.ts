import { setNowBalance } from "./modules/setNowBalance.js"

const gameStartButton: HTMLElement = document.querySelector(".start_game")
const allCells: NodeListOf<Element> = document.querySelectorAll(".bomb");

document.addEventListener("DOMContentLoaded", setNowBalance);

gameStartButton.addEventListener("click", async () => {
    let input: HTMLInputElement = document.querySelector(".bet_input");
    let balance: HTMLElement = document.querySelector(".ys_money");

    if (Number(input.value) > 0 && Number(input.value) < Number(balance.innerHTML.split(": ")[1])) {
        

        gameStartButton.style.color = "red";
        let arrayOfCells: number[] = await eel.startgame()();

        console.log(arrayOfCells.length);
        console.log(allCells.length);
        allCells.forEach((element, index) => element.addEventListener("click", () => {
            if (arrayOfCells[index] == 1) {
                element["style"].cssText = "background: rgb(238, 123, 123);";
            }
        }))
    } else {
        alert("Вы ввели неправильное значение баланса");
    }
});

function gameFuncion() {

}