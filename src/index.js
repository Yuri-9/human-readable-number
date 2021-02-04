module.exports = function toReadable(number) {
    let library = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "one hundred",
    };
    let digit;
    let dozen;
    let hundred;

    if (library[number]) {
        return library[number];
    } else if (number < 100) {
        dozen = library[Math.trunc(number / 10) * 10];
        digit = library[number % 10];
        return `${dozen} ${digit}`;
    } else if (number > 100) {
        hundred = library[Math.trunc(number / 100)];
        if (number % 100 > 0 && library[number % 100]) {
            dozen = library[number % 100];
        } else if (number % 100 > 20) {
            dozen = library[Math.trunc((number % 100) / 10) * 10];
            digit = library[number % 10];
        }
        return `${hundred} hundred ${dozen ? dozen : ""} ${
            digit ? digit : ""
        }`.replace(/\s+$/, "");
    }
};
