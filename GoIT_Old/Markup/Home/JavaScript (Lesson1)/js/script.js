var x = +prompt ("Введите число возводимое в степень");
var y = +prompt ("Введите степень");

function pow(variable, degree) {
    var result = 1;

    for (var i = 0; i < degree; i++) {
        result *= variable;
    }

    return result;
}

var powResult = pow(x, y);
console.log(powResult);
alert(x + '^' + y + '=' + powResult);
