def isGtin(x: String): Boolean = {
    val digits = x.toCharArray().map(_.asDigit)
    digits.init.zipWithIndex.foldRight(digits.last)(
        (x, acc) => acc + (x._1 << ((x._2 & 1) + 1)) - x._1
    ) % 10 == 0
}
