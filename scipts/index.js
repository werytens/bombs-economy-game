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
const gameStartButton = document.querySelector(".start_game");
const allCells = document.querySelectorAll(".bomb");
document.addEventListener("DOMContentLoaded", setNowBalance);
gameStartButton.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    let input = document.querySelector(".bet_input");
    let balance = document.querySelector(".ys_money");
    if (Number(input.value) > 0 && Number(input.value) < Number(balance.innerHTML.split(": ")[1])) {
        gameStartButton.style.color = "red";
        let arrayOfCells = yield eel.startgame()();
        console.log(arrayOfCells.length);
        console.log(allCells.length);
        allCells.forEach((element, index) => element.addEventListener("click", () => {
            if (arrayOfCells[index] == 1) {
                element["style"].cssText = "background: rgb(238, 123, 123);";
            }
        }));
    }
    else {
        alert("Вы ввели неправильное значение баланса");
    }
}));
function gameFuncion() {
}
