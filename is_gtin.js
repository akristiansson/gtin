function isGtin(str, type = [8, 12, 13, 14, 18]) {
    return [].concat(type).includes(str.length) &&
        Uint8Array.from(str, x => parseInt(x, 10))
            .reduceRight(
                (xc, x, i) => xc + (x << ((i & 1) + 1)) - x
            ) % 10 == 0;
}
