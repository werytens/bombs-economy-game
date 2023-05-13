export function createElements(): void {
    let gameSection: HTMLElement = document.querySelector(".game_section");

    let index = 0; while (index < 5) {

        let bombString: HTMLElement = document.createElement("div");
        bombString.classList.add("bomb_string");

        for (let index = 0; index < 5; index++) {
            let bomb: HTMLElement = document.createElement("div");
            bomb.classList.add("bomb");
            bombString.append(bomb);
        }

        gameSection.append(bombString);

        index++;
    }
}