is_gtin <- function(x, type = c(8L, 12L, 13L, 14L, 18L)) {
  require(magrittr)
  
  digits <- strsplit(x, "") %>%
    lapply(as.integer)

  checkdigits <- digits %>%
    lapply(rev) %>%
    lapply(function(x) x[-1L]) %>%
    lapply(function(x) x * rep_len(c(3L, 1L), length(x))) %>%
    lapply(sum) %>%
    lapply(function(x) ifelse((m <- x %% 10L) == 0L, m, 10L - m))

  mapply(
    function(x, y, digits) {
      x == y && length(digits) %in% type
    },
    sapply(digits, tail, 1L), checkdigits, digits
  )
}
