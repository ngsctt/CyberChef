/**
 * @author ngsctt [dev@ngsctt.net]
 * @copyright ngsctt 2024
 * @license Apache-2.0
 */

import Operation from "../Operation.mjs";

const FUNCTIONAL_WORDS = [
    "the", "a", "an", "for", "and", "nor", "but", "or", "yet", "so", "aboard", "about",
    "above", "across", "after", "against", "along", "amid", "among", "around", "as",
    "at", "before", "behind", "below", "beneath", "beside", "between", "beyond",
    "but", "by", "concerning", "considering", "despite", "down", "during", "except",
    "following", "for", "from", "in", "inside", "into", "like", "minus", "near",
    "next", "of", "off", "on", "onto", "opposite", "out", "outside", "over", "past",
    "per", "plus", "regarding", "round", "save", "since", "than", "through", "till",
    "to", "toward", "under", "underneath", "unlike", "until", "up", "upon", "versus",
    "via", "with", "within", "without"
];

/**
 * Operation to convert English string to title case
 */
class ToTitleCase extends Operation {

    /**
     * ToTitleCase constructor
     */
    constructor() {
        super();

        this.name = "To title case";
        this.module = "Default";
        this.description = "Converts an English input string to title case.";
        this.inputType = "string";
        this.outputType = "string";
        this.args = [];
    }

    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
        return input.replace(/(?:\b\w+['’]\w+\b)|(?:\b\w+\b)/g, (m) => {
            return FUNCTIONAL_WORDS.indexOf(m) < 0 ? m[0].toUpperCase() + m.slice(1) : m.toLowerCase();
        })
    }

    /**
     * Highlight To Upper case
     *
     * @param {Object[]} pos
     * @param {number} pos[].start
     * @param {number} pos[].end
     * @param {Object[]} args
     * @returns {Object[]} pos
     */
    highlight(pos, args) {
        return pos;
    }

    /**
     * Highlight To Upper case in reverse
     *
     * @param {Object[]} pos
     * @param {number} pos[].start
     * @param {number} pos[].end
     * @param {Object[]} args
     * @returns {Object[]} pos
     */
    highlightReverse(pos, args) {
        return pos;
    }

}

export default ToTitleCase;
