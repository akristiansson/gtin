let isGtin (x: String): Boolean = 

    let checksum (digits: list<int>) = 
        let accumulate xs acc multiplier recfun = 
            match xs with
            | [] -> acc
            | x :: xs -> recfun xs (acc + multiplier * x)

        let rec every xs acc = accumulate xs acc 3 other
        and other xs acc = accumulate xs acc 1 every

        every digits.Tail digits.Head

    let ds = 
        x.ToCharArray() 
        |> fun x -> if Array.forall Char.IsDigit x then x else raise (System.ArgumentException("Non-digit found in string."))
        |> Array.map (fun x -> int x - int '0')
        |> Array.rev
        |> List.ofArray 

    checksum ds % 10 = 0
