import { $ } from "./../lib/kuery";
import { use_button } from "./machine";

$("#button").add_click(() => {
    use_button();
});

console.log("App was started!");
