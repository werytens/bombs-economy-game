export async function setNowBalance(): Promise<void> {
    document.querySelector(".ys_money").innerHTML = 'Balance: ' + await eel.getnowbalance()()
}

export function drawWinMoney(balance): void {
    document.querySelector(".ys_win").innerHTML = `You Win: ${balance}`
}