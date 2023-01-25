import { $ } from "./../lib/kuery";
import * as Machine from "./machine";
$("#button").add_click(() => {
    Machine.default.use();
});

console.log("App was started!");
