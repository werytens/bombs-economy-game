import { drawWinMoney, setNowBalance } from "./modules/balances.js";
import { gameStart, gameWin } from "./modules/game.js";

const gameStartButton: HTMLElement = document.querySelector(".start_game");
const gameFinishButton: HTMLElement = document.querySelector(".finish_game");

document.addEventListener("DOMContentLoaded", setNowBalance);
gameStartButton.addEventListener("click", gameStart);
gameFinishButton.addEventListener("click", gameWin)