let is_gtin = function (str) {
    try {
        let digits = [...str].map(x => parseInt(x));
        const checkdigit = digits.pop();
        const m = Uint8Array.from(digits)
                .reverse()
                .reduce((acc, x, i) => acc - x + (x << (((i + 1) & 1) + 1)), 0) % 10;
        return checkdigit == (m == 0 ? m : 10 - m);
    }
    catch (e) {
        return false;
    }
}
