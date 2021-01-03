var arr1 = [1, 2, 3, 4, 5];
var sum = 0;
var i;

function mySum() {
    for (i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    document.getElementById("s").innerHTML = sum;
};
// ----------------------------------------------------------------


var arr2 = [1, 2];
var arr3 = [3, 4];
var arr4 = [5, 6];
var multiSum = 0;


function myMultiSum() {
    for (i = 0; i < arr2.length; i++) {
        multiSum += arr2[i];
    }
    for (i = 0; i < arr3.length; i++) {
        multiSum += arr3[i];
    }
    for (i = 0; i < arr4.length; i++) {
        multiSum += arr4[i];
    }
    document.getElementById("multiS").innerHTML = multiSum;
};
//    --------------------------------------------------------------------

var arr5 = [1, 2, 3, 4, 5, 3];
var avg;
var sum1 = 0;

function myAvg() {
    for (i = 0; i < arr5.length; i++) {
        sum1 += arr5[i];
        avg = sum1 / arr5.length;
    }
    document.getElementById("avg").innerHTML = avg;
};
//    ------------------------------------------------------------------


var nT = document.getElementById("tt");
(function (color, user) {
    nT.innerHTML = "Hello <span style= 'color:" + color + "'>" + user + "</span>";
}("green", "Matina"));

//   -------------------------------------------------------------------
// در js متدی به نام eval() وجود دارد که باعث می شود کدها ی درون ان به صورت ریاضی اجرا بشود.


function cal() {
    var aa = document.getElementById("i1").value;
    var bb = document.getElementById("i2").value;
    var namad = document.getElementById("na").value;
    if (aa === undefined) {
        aa = 0;
    }
    if (bb === undefined) {
        bb = 0;
    }


    document.getElementById("i3").value = eval(Number(aa) + namad + Number(bb));


}

//    --------------------------------------------------------------------------
// قرار دادن سه نقطه در پشت نام یک variable باعث می شود تام ان شی یا ارایه باز شود و خوانده شود.


var f = [1, 2, 3, 8, 4, 4];
var e = [0, 8, 9];
var o = [4, 4, 5, 6, 6, 6, 6, 5, 12];
var i;
var s = 0;

function f1() {

    for (i in arguments) {
        s += arguments[i];
    }
    return s;
}

console.log(f1(...e));

//    ---------------------------------------------------------------------------
function f2() {
    var k = document.getElementById("inFactor").value;
    document.getElementById("result").value = factorial(k);
}

function factorial(n) {

    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);

}

//  ---------------------------------------------------------------------------
function f3() {
    var num = document.getElementById("inNum").value;
    var expo = document.getElementById("inExpo").value;
    document.getElementById("res").value = tavan(num, expo);
}


function tavan(n, m) {
    if (m == 1) {
        return n;
    }
    return n * tavan(n, m - 1)
};

//  -----------------------------------------------------------------------------------


function Kia(m, n) {
    this.model = m;
    this.year = 2020;
    this.color = n;
    this.option = "full option";
    return "my favorite car is " + this.model + this.year + " whit " + this.color + " and " + this.option;
}

var mashinMehdi = new Kia("Optima", "black");
mashinMehdi.color = "blue";

var mashinMatina = new Kia("Cadenza", "white");

document.getElementById("p1").innerHTML = mashinMatina.color;
document.getElementById("p2").innerHTML = mashinMehdi.year;
console.log(mashinMatina.color);


//-----------------------------------------------------------------------------------------------------

//می خواهیم خودرویی طراحی کنیم که اگر سوخت ان gas باشد سرعت ماشین در 0/7 ضرب شود .
function Car(m, n, engine, sookht) {
    this.color = "black";
    this.soratOmomi = 200;
    this.year = m;
    this.model = n;
    this.enginVolume = engine;
    this.sookht = sookht;
    this.speed = function () {
        var sorat;
        if (this.sookht == "gas") {
            sorat = this.soratOmomi * 0 / 7;
        } else {
            sorat = soratOmomi;
            return sorat;
        }
    }

}

console.log(Car(2020, cerato, en, gas));

// در نظر داریم خودروی فوق بعد از 1600 به ازای هر 200 عدد افزایش قدرت موتور سرعتش در 0/1 ضرب شود.


function Car(m, n, engine, sookht) {
    this.color = "black";
    this.soratOmomi = 200;
    this.year = m;
    this.model = n;
    this.enginVolume = engine;
    this.sookht = sookht;
    this.speed = function () {
        var sorat;
        if (this.sookht == "gas") {
            sorat = this.soratOmomi * 0 / 7;
        } else {
            sorat = soratOmomi;
            return sorat;
        }
        var a = ((((this.enginVolume - 1600) / 200) * 0 / 1) * sorat) + sorat;
        return a;
    }

}

//در مثال بالا می خواهیم پارامتر دیگری را لحاظ کنیم که از سمت کاربر وارد میشود و روی سرعت خودرو تاثیر دارد.


function Car(m, n, engine, sookht) {
    this.color = "black";
    this.soratOmomi = 200;
    this.year = m;
    this.model = n;
    this.enginVolume = engine;
    this.sookht = sookht;
    this.speed = function (tireVolume) {
        var sorat;
        if (!tireVolume) {
            tireVolume = 1;
        }
        if (this.sookht === "gas") {
            sorat = this.soratOmomi * 0 / 7;
        } else {
            sorat = soratOmomi;
            return sorat;
        }
        var a = ((((this.enginVolume - 1600) / 200) * 0 / 1) * sorat) + sorat;
        tireVolume = (tireVolume > 1) ? 1 : tireVolume;
        return a * tireVolume;
    }
}

var car1 = new Car(2020, "cerato", 1600, "gas");
console.log(car1.speed(0 / 9));
console.log(car1.color);