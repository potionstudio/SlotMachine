import { $ } from "../lib/kuery";
import { Synk } from "../lib/synk";

import CardVibration from "./card-vibration";

let is_used: boolean = false;
const machine_usage = new Synk();

const card1 = new CardVibration($(".c1").get_element());
const card2 = new CardVibration($(".c2").get_element());
const card3 = new CardVibration($(".c3").get_element());

const available_cards = ["🍒", '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const set_card_text = (element: HTMLElement) => {
    element.innerText =
        available_cards[Math.floor(Math.random() * available_cards.length)];
};

machine_usage.add_action(() => {
    if (is_used === true) {
        machine_usage.halt();
    }
}, 0);
machine_usage.add_action(() => {
    is_used = true;

    card1.start();
    card2.start();
    card3.start();
}, 0);
machine_usage.add_action(() => {
    card1.halt();
    set_card_text($(".c1 span").get_element());
}, 1368);
machine_usage.add_action(() => {
    card2.halt();
    set_card_text($(".c2 span").get_element());
}, 520);
machine_usage.add_action(() => {
    card3.halt();
    set_card_text($(".c3 span").get_element());
}, 169);
machine_usage.add_action(() => {
    card1.reset();
    card2.reset();
    card3.reset();

    is_used = false;
}, 1243);
export default machine_usage;
