var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { setNowBalance } from "./modules/setNowBalance.js";
import { drawWinMoney } from "./modules/drawWin.js";
const gameStartButton = document.querySelector(".start_game");
const gameFinishButton = document.querySelector(".finish_game");
document.addEventListener("DOMContentLoaded", setNowBalance);
gameStartButton.addEventListener("click", gameStart);
function gameStart() {
    return __awaiter(this, void 0, void 0, function* () {
        let input = document.querySelector(".bet_input");
        let userBet = document.querySelector(".bet_input").value;
        let balance = document.querySelector(".ys_money");
        let arrayOfCells = yield eel.startgame()();
        let allCells = document.querySelectorAll(".bomb");
        console.log(arrayOfCells);
        if (Number(input.value) > 0 && Number(input.value) < Number(balance.innerHTML.split(": ")[1])) {
            gameStartButton.style.color = "red";
            allCells.forEach((element, index) => element.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
                if (arrayOfCells[index] == 1) {
                    element["style"].cssText = "background: rgb(238, 123, 123);";
                    if (document.querySelector(".ys_win").innerHTML.split(": ")[1] == String(0)) {
                        drawWinMoney(Number(input.value) * 5);
                    }
                    else {
                        drawWinMoney(Number(document.querySelector(".ys_win").innerHTML.split(": ")[1]) * 5);
                    }
                }
                else {
                    drawWinMoney(0);
                    yield eel.setnewbalance(Number(balance.innerHTML.split(": ")[1]) - Number(userBet));
                    alert("Вы проиграли!");
                    document.querySelector(".bet_input").value = "";
                    yield setNowBalance();
                    gameFinish();
                }
            })));
        }
        else {
            alert("Вы ввели неправильное значение баланса");
        }
        return 0;
    });
}
function gameFinish() {
    let allCells = document.querySelectorAll(".bomb");
    gameStartButton.style.color = "var(--text-first)";
    document.querySelector(".ys_win").innerHTML = "You Win: 0";
    allCells.forEach(element => {
        element["style"].cssText = "background: rgb(141, 226, 141);";
    });
    document.querySelector(".bet_input").value = "";
    return 0;
}
gameFinishButton.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    let balance = document.querySelector(".ys_money");
    if (document.querySelector(".ys_win").innerHTML.split(": ")[1] == String(0)) {
        alert("Ошибка финиша!");
    }
    else {
        yield eel.setnewbalance(Number(balance.innerHTML.split(": ")[1]) + Number(document.querySelector(".ys_win").innerHTML.split(": ")[1]));
        alert("Вы победили!");
        document.querySelector(".bet_input").value = "";
        yield setNowBalance();
        gameFinish();
    }
}));
//# sourceMappingURL=index.js.map