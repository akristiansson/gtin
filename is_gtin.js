let is_gtin = function (str) {
    try {
        var digits = Uint8Array.from([...str].map(x => parseInt(x)))
            .reverse()
    }
    catch (e) {
        return false;
    }
    const m = digits
        .slice(1)
        .reduce(
            (acc, x, i) => acc + x + (i & 1 == 0 ? x << 1 : 0), 0
        ) % 10;
    return digits[0] == (m == 0 ? m : 10 - m);
}
