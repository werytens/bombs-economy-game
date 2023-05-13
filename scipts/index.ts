import { setNowBalance } from "./modules/setNowBalance.js"
import { drawWinMoney } from "./modules/drawWin.js";

const gameStartButton: HTMLElement = document.querySelector(".start_game");
const gameFinishButton: HTMLElement = document.querySelector(".finish_game");

document.addEventListener("DOMContentLoaded", setNowBalance);

gameStartButton.addEventListener("click", gameStart);

async function gameStart(): Promise<number> {
    let input: HTMLInputElement = document.querySelector(".bet_input");
    let userBet: string = document.querySelector<HTMLInputElement>(".bet_input").value;
    let balance: HTMLElement = document.querySelector(".ys_money");
    let arrayOfCells: number[] = await eel.startgame()();
    let allCells: NodeListOf<Element> = document.querySelectorAll(".bomb");

    console.log(arrayOfCells);

    if (Number(input.value) > 0 && Number(input.value) < Number(balance.innerHTML.split(": ")[1])) {
        gameStartButton.style.color = "red";
        
        allCells.forEach((element, index) => element.addEventListener("click", async () => {

            if (arrayOfCells[index] == 1) {
                element["style"].cssText = "background: rgb(238, 123, 123);";

                if (document.querySelector(".ys_win").innerHTML.split(": ")[1] == String(0)) {
                    drawWinMoney(Number(input.value) * 5);
                } else {
                    drawWinMoney(Number(document.querySelector(".ys_win").innerHTML.split(": ")[1]) * 5);
                }
            } else {
                drawWinMoney(0);
                await eel.setnewbalance(Number(balance.innerHTML.split(": ")[1]) - Number(userBet));
                alert("Вы проиграли!");
                document.querySelector<HTMLInputElement>(".bet_input").value = "";
                await setNowBalance();

                gameFinish();
            }
        }))
    } else {
        alert("Вы ввели неправильное значение баланса");
    }

    return 0;
}

function gameFinish(): number {
    let allCells: NodeListOf<Element> = document.querySelectorAll(".bomb");

    gameStartButton.style.color = "var(--text-first)";
    document.querySelector(".ys_win").innerHTML = "You Win: 0";

    allCells.forEach(element => {
        element["style"].cssText = "background: rgb(141, 226, 141);";
    })

    document.querySelector<HTMLInputElement>(".bet_input").value = "";

    return 0;
}

gameFinishButton.addEventListener("click", async () => {
    let balance: HTMLElement = document.querySelector(".ys_money");

    if (document.querySelector(".ys_win").innerHTML.split(": ")[1] == String(0)) {
        alert("Ошибка финиша!")
    } else {
        await eel.setnewbalance(Number(balance.innerHTML.split(": ")[1]) + Number(document.querySelector(".ys_win").innerHTML.split(": ")[1]));
        alert("Вы победили!");
        document.querySelector<HTMLInputElement>(".bet_input").value = "";
        await setNowBalance();

        gameFinish();
    }
})