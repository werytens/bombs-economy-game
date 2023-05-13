var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createElements } from "../modules/createElements.js";
import { drawWinMoney, setNowBalance } from "../modules/balances.js";
const gameStartButton = document.querySelector(".start_game");
export function gameStart() {
    return __awaiter(this, void 0, void 0, function* () {
        createElements();
        let allCells = document.querySelectorAll(".bomb");
        let arrayOfCells = yield eel.startgame()();
        let userBet = document.querySelector(".bet_input").value;
        if (Number(document.querySelector(".bet_input").value) > 0 && Number(document.querySelector(".bet_input").value) <= Number(document.querySelector(".ys_money").innerHTML.split(": ")[1])) {
            gameStartButton.style.color = "red";
            allCells.forEach((element, index) => element.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
                if (arrayOfCells[index] == 1) {
                    element["style"].cssText = "background: rgb(238, 123, 123);";
                    if (document.querySelector(".ys_win").innerHTML.split(": ")[1] == String(0)) {
                        drawWinMoney(Number(document.querySelector(".bet_input").value) * 5);
                    }
                    else {
                        drawWinMoney(Number(document.querySelector(".ys_win").innerHTML.split(": ")[1]) * 5);
                    }
                }
                else {
                    drawWinMoney(0);
                    yield eel.setnewbalance(Number(document.querySelector(".ys_money").innerHTML.split(": ")[1]) - Number(userBet));
                    alert("Вы проиграли!");
                    document.querySelector(".bet_input").value = "";
                    yield setNowBalance();
                    gameFinish();
                }
            })));
        }
        else {
            alert("Вы ввели неправильное значение баланса");
            gameFinish();
        }
    });
}
export function gameWin() {
    return __awaiter(this, void 0, void 0, function* () {
        if (document.querySelector(".ys_win").innerHTML.split(": ")[1] == String(0)) {
            alert("Ошибка финиша!");
        }
        else {
            yield eel.setnewbalance(Number(document.querySelector(".ys_money").innerHTML.split(": ")[1]) + Number(document.querySelector(".ys_win").innerHTML.split(": ")[1]));
            alert("Вы победили!");
            document.querySelector(".bet_input").value = "";
            yield setNowBalance();
        }
        gameFinish();
    });
}
export function gameFinish() {
    gameStartButton.style.color = "var(--text-first)";
    document.querySelector(".ys_win").innerHTML = "You Win: 0";
    let allCells = document.querySelectorAll(".bomb");
    let allCellsStrings = document.querySelectorAll(".bomb_string");
    allCells.forEach(element => {
        element.remove();
    });
    allCellsStrings.forEach(element => {
        element.remove();
    });
}
//# sourceMappingURL=game.js.map