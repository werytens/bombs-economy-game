export async function setNowBalance(): Promise<void> {
    document.querySelector(".ys_money").innerHTML = 'Balance: ' + await eel.getnowbalance()()
}