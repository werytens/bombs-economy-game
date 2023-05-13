import { createElements } from "../modules/createElements.js";
import { drawWinMoney, setNowBalance } from "../modules/balances.js";

const gameStartButton: HTMLElement = document.querySelector(".start_game");

export async function gameStart() {
    createElements();

    let allCells: NodeListOf<Element> = document.querySelectorAll(".bomb");
    let arrayOfCells: number[] = await eel.startgame()();
    let userBet: string = document.querySelector<HTMLInputElement>(".bet_input").value;

    if (Number(document.querySelector<HTMLInputElement>(".bet_input").value) > 0 && Number(document.querySelector<HTMLInputElement>(".bet_input").value) <= Number(document.querySelector(".ys_money").innerHTML.split(": ")[1])) {
        gameStartButton.style.color = "red";
                
        allCells.forEach((element, index) => element.addEventListener("click", async () => {
        
        if (arrayOfCells[index] == 1) {
            element["style"].cssText = "background: rgb(238, 123, 123);";
        
            if (document.querySelector(".ys_win").innerHTML.split(": ")[1] == String(0)) {
                drawWinMoney(Number(document.querySelector<HTMLInputElement>(".bet_input").value) * 5);
            } else {
                drawWinMoney(Number(document.querySelector(".ys_win").innerHTML.split(": ")[1]) * 5);
            }
        } else {
            drawWinMoney(0);
            await eel.setnewbalance(Number(document.querySelector(".ys_money").innerHTML.split(": ")[1]) - Number(userBet));
            alert("Вы проиграли!");
            document.querySelector<HTMLInputElement>(".bet_input").value = "";
            await setNowBalance();
        
            gameFinish()
        }}))
    } else {
        alert("Вы ввели неправильное значение баланса");
        gameFinish()
    }
}

export async function gameWin() {
    if (document.querySelector(".ys_win").innerHTML.split(": ")[1] == String(0)) {
        alert("Ошибка финиша!")
    } else {
        await eel.setnewbalance(Number(document.querySelector(".ys_money").innerHTML.split(": ")[1]) + Number(document.querySelector(".ys_win").innerHTML.split(": ")[1]));
        alert("Вы победили!");
        document.querySelector<HTMLInputElement>(".bet_input").value = "";
        await setNowBalance();
    }

    gameFinish()
}

export function gameFinish() {
    gameStartButton.style.color = "var(--text-first)";
    document.querySelector(".ys_win").innerHTML = "You Win: 0";

    let allCells: NodeListOf<Element> = document.querySelectorAll(".bomb");
    let allCellsStrings: NodeListOf<Element> = document.querySelectorAll(".bomb_string");

    allCells.forEach(element => {
        element.remove()
    })

    allCellsStrings.forEach(element => {
        element.remove()
    })
}