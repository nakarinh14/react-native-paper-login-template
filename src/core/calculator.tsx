import Big from 'big.js';

export const calculateNumber = (a, b, operator) => {
    const _a = new Big(a)
    const _b = new Big(b)
    switch (operator){
        case "+":
            return _a.plus(_b).toString()
        case "-":
            return _a.minus(_b).toString()
        case "x":
            return _a.times(_b).toString()
        case "/":
            return _a.div(_b).toString()
    }
}
