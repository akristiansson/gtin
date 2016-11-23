let is_gtin = function (str) {
    try {
        let digits = [...str].map(x => parseInt(x));
        const checkdigit = digits.pop();
        const m = digits.reduceRight((acc, x, i) => acc + (x << ((i & 1) + 1)) - x, 0) % 10;
        return checkdigit == (m == 0 ? 0 : 10 - m);
    }
    catch (e) {
        return false;
    }
}
