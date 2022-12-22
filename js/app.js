
    function Calculator() {
        this.actions = ['+', '-', '*', '/', '^'];
        this.history = [];
    }

Calculator.prototype.isCorrectAction = function (action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function () {
    return this.history.join('\n');
}

Calculator.prototype.isANumber = function (num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number
    value1 = Number(num1)
    value2 = Number(num2)
    // 2. sprawdź czy są one poprawne
    if (isNaN(num1) || isNaN(num2)) {
        return false
    } else {
        return true
    }
}
Calculator.prototype.alert = function () {
    return alert('Wprowadzono niewłaściwą wartość jako operator\n Spróbuj jeszcze raz')
}
Calculator.prototype.alertIsTrue = function () {
    return alert('Wprowadzono niewłaściwą wartość jako liczba \n Spróbuj jeszcze raz')
}

Calculator.prototype.add = function (number1, number2) {

    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    if (this.isANumber(number1, number2)) {
        let result = Number(number1) + Number(number2);
        // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
        this.history.push(number1 + ' + ' + number2 + ' = ' + result)
        return result
    }
    else {
        return this.alertIsTrue()
    }
}
Calculator.prototype.subtract = function (number1, number2) {
    if (this.isANumber(number1, number2)) {
        let result = Number(number1) - Number(number2);
        this.history.push(number1 + ' - ' + number2 + ' = ' + result)
        return result
    }
    else {
        return this.alertIsTrue()
    }
  
}
Calculator.prototype.multiply = function (number1, number2) {
    if (this.isANumber(number1, number2)) {
        let result = Number(number1) * Number(number2);
        this.history.push(number1 + ' * ' + number2 + ' = ' + result)
        return result
    }
    else {
        return this.alertIsTrue()
    }
}

Calculator.prototype.divide = function (number1, number2) {
    if (this.isANumber(number1, number2)) {
        let result = Number(number1) / Number(number2);
        this.history.push(number1 + ' / ' + number2 + ' = ' + result)
        return result
    }
    else {
        return this.alertIsTrue()
    }
   
}
Calculator.prototype.exp = function (number1, number2) {
    if (this.isANumber(number1, number2)) {
        if (number2 === 0) return 1
        else {
            let sum = 1
            for (let i = 0; i < number2; i++) {
                sum = Number(sum) * Number(number1);
            }
            this.history.push(number1 + ' ^ ' + number2 + ' = ' + sum)
            return sum
        }
    }
    else {
        return this.alertIsTrue()
    }
}

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2, sum;
do {
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if (isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');

        if (action === '+') {
            calc.add(number1, number2);
        }

        else if (action === '-') {
            calc.subtract(number1, number2);
        }

        else if (action === '*') {
            calc.multiply(number1, number2);
        }

        else if (action === '/') {
            calc.divide(number1, number2);
        }

        else if (action === '^') {
            calc.exp(number1, number2);
        }
    }
    else {

        calc.alert()

    }
}
while (calc.isCorrectAction(action))

