'use strict';

function Calculator(base) {

    if (isNaN(base)) {
        base = 0;
    }
        this.base = base,
        this.add = function (secondOperand) {
            return isNaN(secondOperand) ? NaN : this.base += secondOperand;
        },
        this.sub = function (secondOperand) {
            return isNaN(secondOperand) ? NaN : this.base -= secondOperand;
        },
        this.get = function () {
            return this.base;
        },
        this.set = function (newNumber) {
            return isNaN(newNumber) ? NaN : this.base = newNumber;
        }
}

const calc = new Calculator(100);

calc.add(10);
calc.add(10);
calc.sub(20);
calc.set(20);
calc.add(10);
calc.add('qwe');
calc.get();
