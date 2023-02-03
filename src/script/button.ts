import { $ } from "../lib/kuery";
import { Synk } from "../lib/synk";

let is_used: boolean = false;
const button_usage = new Synk();

const audio = new Audio("sound.mp3");

button_usage.add_action(() => {
    if (is_used === true) {
        button_usage.halt();
    }
}, 0);
button_usage.add_action(() => {
    audio.play();

    is_used = true;
    $("#button").set_classname("used");
}, 0);
button_usage.add_action(() => {
    $("#button").set_classname("unused");
}, 3000);
button_usage.add_action(() => {
    is_used = false;
}, 400);

export default button_usage;
