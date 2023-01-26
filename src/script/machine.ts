import { $ } from "./../lib/kuery";
import { Synk } from "../lib/synk";

const button_click_actions = new Synk();
export const use_button = () => {
    button_click_actions.execute(0);
};
