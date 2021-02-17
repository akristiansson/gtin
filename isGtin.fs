let isGtin (x: string): bool = 
    let checksum  = 
        if String.forall Char.IsDigit x then x.ToCharArray() else raise (System.ArgumentException("Non-digit found in string."))
        |> Array.map (fun x -> int x - int '0')
        |> Array.rev
        |> Array.mapi (fun i x -> if i % 2 = 0 then x else 3 * x)
        |> Array.sum
    checksum % 10 = 0
