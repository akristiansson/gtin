IsGtin = (x as text) as logical => 
    let 
        digits = List.Transform(Text.ToList(x), each Number.FromText(_)),
        n = List.Count(digits) - 1,
        z = List.Zip({
                List.FirstN({3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3}, n),
                List.Reverse(
                    List.FirstN(digits, n)
                )
        }),
        checksum = List.Accumulate(
            z, 0, (cum, x) => cum + List.Product(x)
        )
    in Number.Mod(10 - Number.Mod(checksum, 10), 10) = List.Last(digits)