let is_gtin = function (str) {
    try {
        var digits = [...str].map(x => parseInt(x));
    }
    catch (e) {
        return false;
    }
    const checkdigit = digits.pop();
    const mod = digits
        .reverse()
        .reduce((cum, digit, i) => cum + digit * (i % 2 == 0 ? 3 : 1), 0) % 10;
    return checkdigit == (mod == 0 ? mod : 10 - mod);
}
