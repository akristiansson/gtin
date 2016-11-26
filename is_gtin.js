function is_gtin(str) {
    try {
        const digits = [...str].map(x => parseInt(x, 10));
        return [8, 12, 13, 14, 18].includes(digits.length) &&
            digits.reduceRight((xc, x, i) => xc + (x << ((i & 1) + 1)) - x) % 10 == 0;
    }
    catch (e) {
        return false;
    }
}
