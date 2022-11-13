let calculator = {
  // ваш код
  read(a, b) {
    this.firstNum = a;
    this.secondNum = b;
  },
  sum() {
    let sumResult = this.firstNum + this.secondNum;
    return sumResult;
  },
  mul() {
    let mulResult = this.firstNum * this.secondNum;
    return mulResult;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
