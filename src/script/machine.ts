import { $ } from "./../lib/kuery";
const button = $("#button");

// ===== main logic =====
let is_used: boolean = false;
const use = () => {
    if (is_used === true) return;

    button.set_classname("used");
    is_used = true;

    // let use button again after 3s
    setTimeout(() => {
        originate();
        setTimeout(() => {
            is_used = false;
        }, 300); // after using originate();
    }, 3000);
};

const originate = () => {
    if (is_used === false) return;
    button.set_classname("unused");
};

export default { use, originate };
