const preciseOperation = f => (a, b, decimalDigits) => {
    decimalDigits = decimalDigits || 12 + (f(a, b)).toFixed(decimalDigits)
}

export const calculateNumber = (a, b, operator) => {
    let _a = Number(a)
    let _b = Number(b)
    switch (operator){
        case "+":
            return _a + _b
        case "-":
            return _a - _b
    }
}
