type SynkAction = () => void;
type SynkBundle = { func: SynkAction; delay: number };
type SynkActionsArray = SynkBundle[];

export class Synk {
    #actions: SynkActionsArray;
    #is_halt: boolean = false;

    constructor() {
        this.#actions = new Array();
    }

    add_action(_func: SynkAction, _time: number) {
        if (_time < 0) {
            console.error(
                "Only unsigned int can be argument _time of add_action"
            );
            return;
        }

        const new_bundle: SynkBundle = { func: _func, delay: _time };

        this.#actions.push(new_bundle);
    }

    execute(start: number) {
        const current = this.#actions[start];

        const doing = () => {
            current.func();

            if (this.#is_halt === true) {
                this.#is_halt = false;
                return;
            } // when it was halted

            if (start + 1 === this.#actions.length) return; // when array ends

            this.execute(start + 1);
        };

        if (current.delay === 0) {
            doing();
        } else {
            setTimeout(doing, current.delay);
            // using Promise can be another choice
        }
    }

    halt() {
        this.#is_halt = true;
    }
}
