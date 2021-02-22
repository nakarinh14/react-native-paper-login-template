import Decimal from 'decimal.js/decimal';

export const calculateNumber = (a, b, operator) => {
    const _a = new Decimal(a)
    const _b = new Decimal(b)
    switch (operator){
        case "+":
            return _a.plus(_b).toString()
        case "-":
            return _a.minus(_b).toString()
        case "*":
            return _a.times(_b).toString()
        case "/":
            return _a.div(_b).toString()
    }
}
