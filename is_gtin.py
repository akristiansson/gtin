def is_gtin(codestr):
    """ Tests a string input as to whether it's a valid GTIN product code - disregarding the length of the string """
    try:
        d = map(int, tuple(codestr))[:-1]
        n = (3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3)[18-len(d):]
        checksum = 0
        for a1, a2 in zip(d, n):
            checksum += a1 * a2
        return abs(checksum % -10) == codestr[-1]
    except:
        return False
