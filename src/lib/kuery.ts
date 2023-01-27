export class KueryElement {
    #element: HTMLElement;

    constructor(_html_element: HTMLElement) {
        this.#element = _html_element;
    }

    get_element(): HTMLElement {
        return this.#element;
    }

    add_click(action: any): KueryElement {
        this.#element.addEventListener("click", action);
        return this;
    }

    set_classname(class_text: string): KueryElement {
        this.#element.className = class_text;
        return this;
    }
}

/**
 * when document.querySelector() -> doesn`t exist
 * 1. get 'none'
 * 2. make KueryElement by it
 *
 * ==== none ====
 * 1. It is created when kuery.ts is read (attached to document.body)
 * 2. when queryed html element doesn`t exist --> use that
 * 3. 'none'`s style ==> display: none;
 */

const none = document.createElement("div");

export const $ = (query: string): KueryElement => {
    const element = document.querySelector(query);

    if (!(element instanceof HTMLElement)) {
        console.error("can`t find HTML element!");
        return new KueryElement(none);
    }

    const kuery_element = new KueryElement(element);

    return kuery_element;
};
