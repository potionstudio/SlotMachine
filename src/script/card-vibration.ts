export default class CardVibration {
    #card_element: HTMLElement;
    #is_halt: boolean = false;

    constructor(_card: HTMLElement) {
        this.#card_element = _card;
    }

    start() {
        const interval = setInterval(() => {
            if (this.#is_halt === true) {
                this.#card_element.style.top = "50%";
                this.#card_element.style.left = "0%";

                clearInterval(interval);
            } else {
                this.#change_position(this.#card_element);
            }
        }, 20);
    }

    halt() {
        this.#is_halt = true;
    }

    reset() {
        this.#is_halt = false;
    }

    #change_position(element: HTMLElement) {
        element.style.top = `${50 + Math.floor(Math.random() * 10) - 5}%`;
        element.style.left = `${Math.floor(Math.random() * 10) - 5}%`;
    }
}
