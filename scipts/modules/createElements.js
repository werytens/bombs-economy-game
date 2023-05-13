export function createElements() {
    let gameSection = document.querySelector(".game_section");
    let index = 0;
    while (index < 5) {
        let bombString = document.createElement("div");
        bombString.classList.add("bomb_string");
        for (let index = 0; index < 5; index++) {
            let bomb = document.createElement("div");
            bomb.classList.add("bomb");
            bombString.append(bomb);
        }
        gameSection.append(bombString);
        index++;
    }
}
//# sourceMappingURL=createElements.js.map